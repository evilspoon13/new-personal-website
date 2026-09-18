import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const listRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector<HTMLElement>(l.href)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        // Near the top the hero is short enough that the midline already sits in
        // Experience — keep About lit until the reader has actually left it.
        if (window.scrollY < 120) {
          setActiveSection("about");
          return;
        }
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection((visible[0].target as HTMLElement).id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Scroll progress + the border that only appears past the hero.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        setScrolled(window.scrollY > 80);
        if (window.scrollY < 120) setActiveSection("about");
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Position the sliding underline beneath the active link.
  const measure = useCallback(() => {
    const link = linkRefs.current[activeSection];
    const list = listRef.current;
    if (!link || !list) return;
    const l = link.getBoundingClientRect();
    const parent = list.getBoundingClientRect();
    setIndicator({ left: l.left - parent.left, width: l.width });
  }, [activeSection]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Fonts land after first paint and shift link widths.
  useEffect(() => {
    document.fonts?.ready.then(measure).catch(() => {});
  }, [measure]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md
                    transition-[border-color,box-shadow] duration-500 border-b ${
                      scrolled
                        ? "border-border shadow-[0_1px_12px_rgba(0,0,0,0.03)]"
                        : "border-transparent"
                    }`}
      >
        <div
          className="absolute bottom-0 left-0 h-px bg-accent/60 origin-left transition-transform duration-150 ease-out w-full"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="#about"
            className={`font-serif text-lg text-zinc-900 transition-all duration-500 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
            aria-label="Back to top"
          >
            CS
          </a>

          <div ref={listRef} className="relative hidden md:flex gap-8">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    linkRefs.current[id] = el;
                  }}
                  className={`text-sm py-1 transition-colors ${
                    activeSection === id ? "text-zinc-900" : "text-muted hover:text-zinc-900"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <span
              className="absolute -bottom-0.5 h-px bg-zinc-900 transition-all duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.width ? 1 : 0,
              }}
              aria-hidden="true"
            />
          </div>

          <button
            className="md:hidden text-zinc-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-surface flex flex-col items-start justify-center gap-6 px-10">
          <button
            className="absolute top-4 right-6 text-zinc-700"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-2xl text-zinc-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
