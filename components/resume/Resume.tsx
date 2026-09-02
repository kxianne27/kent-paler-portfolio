import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Download, CheckCircle, ChevronRight } from "lucide-react";

export function Resume() {
  return (
    <Section id="resume">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div>
            <SectionTitle
              eyebrow="Resume"
              title="Experience & Skills Overview"
            />
          </div>
          <div className="w-full md:w-auto">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2"
            >
              <Download className="size-4" />
              Download Full Resume (PDF)
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Professional Experience */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900">
              <CheckCircle className="size-5 text-blue-600" />
              Professional Experience
            </h3>

            <div className="mt-8 space-y-8">
              {experience.map((job) => (
                <div
                  key={job.position}
                  className="relative pl-8 border-l-2 border-slate-200 last:border-transparent"
                >
                  <div className="absolute -left-3 top-1 size-5 rounded-full bg-blue-600 border-4 border-white" />
                  <div className="flex flex-col justify-between gap-4 md:flex-row">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        {job.position}
                      </h4>
                      <p className="mt-1 text-blue-600 font-medium">{job.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">{job.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900">
              <CheckCircle className="size-5 text-blue-600" />
              Technical Skills
            </h3>

            <div className="mt-8 space-y-10">
              {skills.map((category) => (
                <div key={category.name}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    {category.name}
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Competencies */}
            <div className="mt-12">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Core Competencies
              </h4>
              <ul className="mt-6 space-y-3" role="list">
                {[
                  "Enterprise Information Systems Architecture",
                  "Full-Stack Web Development (Laravel, Next.js, PHP, VB.NET)",
                  "Database Design & Optimization (SQL Server, MySQL)",
                  "Business Process Analysis & Automation",
                  "Government Digital Transformation",
                  "Data Quality Assurance & Reporting",
                  "System Integration & API Development",
                  "Legacy System Modernization",
                  "User Training & Technical Documentation",
                  "Agile Development & Version Control (Git)",
                ].map((competency) => (
                  <li key={competency} className="flex items-center gap-3 text-slate-700">
                    <ChevronRight className="size-4 text-blue-500 shrink-0" />
                    <span>{competency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}