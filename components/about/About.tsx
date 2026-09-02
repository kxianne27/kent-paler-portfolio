import { about } from "@/data/about";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { CheckCircle } from "lucide-react";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          <div>
            <SectionTitle
              eyebrow="About Me"
              title={about.title}
            />

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>{about.description.split('\n\n')[0]}</p>
              <p>{about.description.split('\n\n')[1]}</p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {about.expertise.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-10 shadow-sm border border-slate-200">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <CheckCircle className="size-6 text-blue-600" />
              Highlights
            </h3>

            <ul className="mt-8 space-y-4" role="list">
              {about.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="size-5 text-green-500 shrink-0" />
                  <span className="text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
