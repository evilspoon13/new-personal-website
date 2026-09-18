import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-6 scroll-mt-20 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <Reveal as="h2" className="font-serif text-4xl font-medium text-zinc-900 mb-12">
          {title}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
