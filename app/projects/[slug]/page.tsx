import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-20">
      <div className="border-b border-slate-200 pb-14">
        <div className="mb-14 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={project.image ?? "/images/projects/placeholder.jpg"}
            alt={project.title}
            width={1600}
            height={900}
            className="h-[500px] w-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
            {project.client}
          </span>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {project.category}
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900">
          {project.title}
        </h1>

        <p className="mt-4 text-2xl text-blue-600">{project.subtitle}</p>

        <p className="mt-6 text-slate-500">
          {project.role} • {project.year}
        </p>

        <section className="mt-12">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider text-slate-500">
                Client
              </h3>

              <p className="mt-2 font-semibold text-slate-900">
                {project.client}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider text-slate-500">
                Role
              </h3>

              <p className="mt-2 font-semibold text-slate-900">
                {project.role}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider text-slate-500">
                Architecture
              </h3>

              <p className="mt-2 font-semibold text-slate-900">
                {project.architecture}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider text-slate-500">
                Modules
              </h3>

              <p className="mt-2 font-semibold text-slate-900">
                {project.modules?.length}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Executive Summary */}

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-slate-900">Executive Summary</h2>

        <p className="mt-6 text-lg leading-8 text-justify text-slate-600">
          {project.overview}
        </p>
      </section>

      {/* Business Challenges */}

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-slate-900">
          Business Challenges
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {Array.isArray(project.challenge) &&
            project.challenge.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <span className="mt-1 text-red-500">●</span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </section>

      {/* Solution */}

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-slate-900">Solution</h2>

        <div className="mt-8 rounded-3xl bg-slate-50 p-8">
          <p className="text-lg leading-8 text-justify text-slate-700">
            {project.solution}
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-slate-900">Technology Stack</h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-5 py-2 font-medium text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-slate-900">System Modules</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.modules?.map((module) => (
            <div
              key={module}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-semibold text-slate-900">{module}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-slate-900">
          My Responsibilities
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.responsibilities?.map((task) => (
            <div
              key={task}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              ✓ {task}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 mb-20">
        <h2 className="text-3xl font-bold text-slate-900">Business Impact</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {project.impact.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-green-200 bg-green-50 p-5"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
