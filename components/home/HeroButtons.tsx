export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 pt-2">
      <a
        href="#projects"
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        View Projects
      </a>

      <a
        href="/Kent-Nino-Paler-Resume.pdf"
        className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
      >
        Download Resume
      </a>
    </div>
  );
}
