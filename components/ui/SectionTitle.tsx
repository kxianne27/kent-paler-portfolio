interface SectionTitleProps {
  eyebrow: string;
  title: string;
}

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
    </>
  );
}
