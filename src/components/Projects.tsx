import { ExternalLink } from "lucide-react";
import { formulaProjects, personalProjects } from "../data/projects";
import type { Project } from "../types";
import Section from "./Section";
import Reveal from "./Reveal";

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-2">
      {projects.map((project, i) => (
        <Reveal key={project.title} index={i}>
          <div
            className="group relative -mx-4 px-4 py-4 rounded-lg transition-colors
                       hover:bg-zinc-900/[0.025]"
          >
            {/* left marker that grows in on hover */}
            <span
              className="absolute left-0 top-5 bottom-5 w-px bg-zinc-900 origin-center
                         scale-y-0 opacity-0 transition-all duration-300
                         group-hover:scale-y-100 group-hover:opacity-100"
              aria-hidden="true"
            />

            <div className="flex items-baseline justify-between gap-4 mb-1">
              <h4 className="text-xl font-medium text-zinc-900">{project.title}</h4>
              <div className="flex gap-4 shrink-0 items-center">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-faint hover:text-zinc-900 transition-colors"
                    aria-label={`${project.title} source code`}
                  >
                    <GithubIcon size={20} />
                  </a>
                )}
                {project.githubUrls?.map((repo) => (
                  <a
                    key={repo.label}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-faint hover:text-zinc-900 transition-colors"
                  >
                    <GithubIcon size={16} />
                    {repo.label}
                  </a>
                ))}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-faint hover:text-zinc-900 transition-colors"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-base text-zinc-600 mb-3 max-w-2xl">{project.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-white ring-1 ring-border px-2 py-0.5 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div id="formula-sae" className="mb-16 scroll-mt-24">
        <Reveal as="h3" className="font-serif text-2xl font-medium text-zinc-900 mb-6">
          Formula SAE Electric
        </Reveal>
        <ProjectList projects={formulaProjects} />
      </div>

      <div>
        <Reveal as="h3" className="font-serif text-2xl font-medium text-zinc-900 mb-6">
          Personal
        </Reveal>
        <ProjectList projects={personalProjects} />
      </div>
    </Section>
  );
}
