import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          eyebrow="Featured Projects"
          title="Enterprise Systems & Digital Solutions"
        />

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Selected enterprise information systems and digital transformation
          initiatives designed to improve operational efficiency, transparency,
          and public service delivery.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
