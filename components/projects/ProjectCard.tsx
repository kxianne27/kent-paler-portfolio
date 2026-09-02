import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
      {/* Client & Category */}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.client && (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {project.client}
          </span>
        )}

        {project.category && (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {project.category}
          </span>
        )}

        {project.status === "under-development" && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 animate-pulse">
            🚧 Under Development
          </span>
        )}

        {project.status === "planned" && (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            📋 Planned
          </span>
        )}
      </div>

      {/* Title */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>

        <p className="mt-2 font-medium text-blue-600">{project.subtitle}</p>

        <p className="mt-1 text-sm text-slate-500">
          {project.role} • {project.year}
        </p>
      </div>

      {/* Overview */}
      <div className="mb-6">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Overview
        </h4>

        <p className="leading-8 text-justify text-slate-600">
          {project.overview}
        </p>
      </div>

      {/* Challenge */}
      <div className="mb-6">
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Key Challenges
        </h4>

        <div className="space-y-5">
          {Array.isArray(project.challenge)
            ? project.challenge.map((section) => (
                <div
                  key={section.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h5 className="mb-3 font-semibold text-slate-900">
                    {section.title}
                  </h5>

                  <ul className="list-disc space-y-2 pl-5 text-slate-600">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            : (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-slate-600">{project.challenge}</p>
              </div>
            )}
        </div>
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
      <div className="mb-8 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center font-semibold text-blue-600 transition group-hover:translate-x-1"
      >
        View Case Study →
      </Link>
    </article>
  );
}
