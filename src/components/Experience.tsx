import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl font-medium text-zinc-900 mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          {experience.map((entry, i) => (
            <div key={i} className="flex gap-6">
              {entry.logo ? (
                <img
                  src={entry.logo}
                  alt={entry.company}
                  className="w-14 h-14 object-contain shrink-0 mt-1 rounded-md bg-white p-1 shadow-sm grayscale opacity-0 animate-[fade-in_0.5s_ease-out_forwards]"
                />
              ) : (
                <div className="w-14 h-14 shrink-0 mt-1 border border-border flex items-center justify-center text-base text-muted">
                  {entry.company.charAt(0)}
                </div>
              )}

              <div>
                <h3 className="text-xl font-medium text-zinc-900">
                  {entry.role}
                </h3>
                <p className="text-lg text-muted mb-2">
                  {entry.company} &middot; {entry.location} &middot; {entry.dateRange}
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed mb-2">
                  {entry.summary}
                </p>
                {entry.techStack.length > 0 && (
                  <p className="text-base text-muted">
                    {entry.techStack.join(" · ")}
                  </p>
                )}
                {entry.link && (
                  <a
                    href={entry.link.href}
                    className="inline-block mt-3 text-sm font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors"
                  >
                    {entry.link.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
