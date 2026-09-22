import { certificates } from "@/data/content";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

export function Training() {
  return (
    <Section id="training">
      <Container>
        <SectionTitle eyebrow="Training & Certificates" title="Training & Certificates" />

        <div className="mt-16 space-y-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {cert.name} — {cert.year}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
