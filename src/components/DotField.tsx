import { useEffect, useRef } from "react";

const SPACING = 24;
const RADIUS = 1.2;
const INFLUENCE = 150;

/**
 * Faint monochrome dot grid that brightens and drifts toward the cursor.
 * Idles when off-screen, and renders one static frame under reduced motion.
 */
export default function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let visible = true;

    // Off-canvas resting point so nothing is highlighted before first move.
    const pointer = { x: -9999, y: -9999 };
    const eased = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw();
    };

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          const dx = eased.x - x;
          const dy = eased.y - y;
          const dist = Math.hypot(dx, dy);

          let alpha = 0.14;
          let px = x;
          let py = y;
          let r = RADIUS;

          if (dist < INFLUENCE) {
            const pull = 1 - dist / INFLUENCE;
            const falloff = pull * pull;
            alpha = 0.14 + falloff * 0.5;
            r = RADIUS + falloff * 1.1;
            // Drift a few pixels toward the cursor.
            px += (dx / (dist || 1)) * falloff * 5;
            py += (dy / (dist || 1)) * falloff * 5;
          }

          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(39, 39, 42, ${alpha})`;
          ctx.fill();
        }
      }
    }

    const tick = () => {
      eased.x += (pointer.x - eased.x) * 0.12;
      eased.y += (pointer.y - eased.y) * 0.12;
      draw();
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (reduced || frame) return;
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    observer.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (reduced) draw();
    else start();

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none
                 [mask-image:radial-gradient(ellipse_65%_75%_at_50%_30%,black,transparent_80%)]"
    />
  );
}
