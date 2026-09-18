import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "../data/experience";
import Reveal from "./Reveal";

export default function Timeline() {
  // Most recent role starts open.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="relative">
      {/* rail */}
      <div
        className="absolute left-[27px] top-3 bottom-3 w-px bg-border hidden sm:block"
        aria-hidden="true"
      />

      <div className="space-y-2">
        {experience.map((entry, i) => {
          const open = openIndex === i;
          const panelId = `experience-panel-${i}`;

          return (
            <Reveal key={entry.company} index={i}>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="group w-full text-left flex items-start gap-5 py-3 rounded-lg
                             transition-colors hover:bg-zinc-900/[0.025]"
                >
                  {/* node / logo */}
                  <span className="relative z-10 shrink-0 mt-0.5">
                    {entry.logo ? (
                      <img
                        src={entry.logo}
                        alt=""
                        loading="lazy"
                        className={`w-14 h-14 object-contain rounded-md bg-white p-1.5
                                    ring-1 ring-border transition-all duration-500
                                    ${open ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`}
                      />
                    ) : (
                      <span className="w-14 h-14 rounded-md bg-white ring-1 ring-border flex items-center justify-center text-base text-muted">
                        {entry.company.charAt(0)}
                      </span>
                    )}
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="text-xl font-medium text-zinc-900">
                        {entry.role}
                      </span>
                      <span className="hidden sm:block shrink-0 text-sm text-faint tabular-nums">
                        {entry.dateRange}
                      </span>
                    </span>
                    <span className="block text-base text-muted">
                      {entry.company} &middot; {entry.location}
                    </span>
                    <span className="block sm:hidden text-sm text-faint">
                      {entry.dateRange}
                    </span>
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 mt-2 text-faint transition-transform duration-300
                                group-hover:text-muted ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={panelId}
                  className="grid transition-[grid-template-rows,opacity] duration-400 ease-out ml-[76px] mr-4"
                  style={{
                    gridTemplateRows: open ? "1fr" : "0fr",
                    opacity: open ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 pt-1">
                      <p className="text-base text-zinc-600 leading-relaxed">
                        {entry.summary}
                      </p>

                      {entry.techStack.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {entry.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-white ring-1 ring-border px-2 py-0.5 text-xs text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {entry.link && (
                        <a
                          href={entry.link.href}
                          className="inline-block mt-4 text-sm font-medium text-zinc-900
                                     underline underline-offset-4 decoration-zinc-300
                                     hover:decoration-zinc-900 transition-colors"
                        >
                          {entry.link.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
