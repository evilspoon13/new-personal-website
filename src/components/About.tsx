import { Mail, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";

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

const COUNTRIES: { name: string; flag: string }[] = [
  { name: "France", flag: "🇫🇷" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Monaco", flag: "🇲🇨" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Peru", flag: "🇵🇪" },
  { name: "Guatemala", flag: "🇬🇹" },
];

export default function About() {
  return (
    <section id="about" className="pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-zinc-900 mb-4 leading-tight">
          Cameron Stone
        </h1>

        <p className="text-lg text-muted mb-8">
          Software Engineer at{" "}
          <span className="text-zinc-900">Qualcomm</span>
        </p>

        <div className="space-y-4 text-zinc-600 mb-10">
          <p>
            I'm a software engineer interested in low-level development, embedded
            systems, and building things close to hardware. I like working on problems
            where performance and correctness matter, mostly in C/C++. I also have
            experience with full-stack development and AI applications. Outside of work,
            I enjoy training Brazilian Jiu-Jitsu and traveling.
          </p>
          <p>
            Feel free to reach out if you're interested in my experience!
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted mb-3">
            Places I've been
          </h2>
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map(({ name, flag }) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 rounded-full border border-border
                           px-3 py-1 text-sm text-zinc-600"
              >
                <span aria-hidden="true">{flag}</span>
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 text-muted hover:text-zinc-900 transition-colors
                         underline decoration-border underline-offset-4 hover:decoration-zinc-900"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
