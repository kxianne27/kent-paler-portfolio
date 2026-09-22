import { skills } from "@/data/content";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Skills"
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((category) => (
            <div
              key={category.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {category.name}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
