import { Mail, type LucideProps } from "lucide-react";
import { useEffect, useState } from "react";
import type { ComponentType, CSSProperties, ReactNode } from "react";
import DotField from "./DotField";

function LinkedinIcon(props: LucideProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon(props: LucideProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const LINKS: { icon: ComponentType<LucideProps>; label: string; href: string }[] = [
  { icon: Mail, label: "Email", href: "mailto:camstone63@gmail.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/in/cameronwstone" },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/evilspoon13" },
];

/** Hero content animates on load rather than on scroll — it is already in view. */
function Enter({ delay, children }: { delay: number; children: ReactNode }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="reveal"
      data-shown={shown}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative pt-28 pb-16 px-6 scroll-mt-20">
      <div className="absolute inset-x-0 top-0 h-[520px] overflow-hidden" aria-hidden="true">
        <DotField />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Enter delay={60}>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-zinc-900 mb-4 leading-tight">
            Cameron Stone
          </h1>
        </Enter>

        <Enter delay={140}>
          <p className="text-lg text-muted mb-8 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-zinc-500" />
            </span>
            Software Engineer at <span className="text-zinc-900">Qualcomm</span>
            <span className="text-faint">·</span>
            <span className="text-faint">San Diego</span>
          </p>
        </Enter>

        <Enter delay={220}>
          <div className="space-y-4 text-zinc-600 mb-10 max-w-2xl">
            <p>
              I'm a software engineer interested in low-level development, embedded
              systems, and building things close to hardware. I like working on problems
              where performance and correctness matter, mostly in C/C++. Outside of work,
              I enjoy training Brazilian Jiu-Jitsu and traveling.
            </p>
            <p>Feel free to reach out if you're interested in my experience!</p>
          </div>
        </Enter>

        <Enter delay={300}>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-1.5 text-muted hover:text-zinc-900 transition-colors
                           underline decoration-border underline-offset-4 hover:decoration-zinc-900"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </Enter>
      </div>
    </section>
  );
}
