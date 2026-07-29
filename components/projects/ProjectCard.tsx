import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>

        <p className="mt-2 text-blue-600 font-medium">{project.subtitle}</p>
      </div>

      {/* Challenge */}
      <div className="mb-6">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Challenge
        </h4>

        <p className="leading-7 text-slate-600">{project.challenge}</p>
      </div>

      {/* Solution */}
      <div className="mb-6">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Solution
        </h4>

        <p className="leading-7 text-slate-600">{project.solution}</p>
      </div>

      {/* Impact */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Impact
        </h4>

        <ul className="space-y-2">
          {project.impact.map((item) => (
            <li key={item} className="flex items-center gap-2 text-slate-700">
              <span className="text-green-500">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
