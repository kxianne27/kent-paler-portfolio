import { education } from "@/data/content";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

export function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionTitle eyebrow="Education" title="Academic Background" />

        <div className="mt-16 space-y-10">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-blue-600 font-medium">
                    {item.institution}
                  </p>
                </div>
                <span className="text-slate-500">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
