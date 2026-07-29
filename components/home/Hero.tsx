export function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Systems Analyst • Software Engineer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
          Kent Niño Paler
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          Designing enterprise information systems that improve public services
          through automation, systems analysis, and digital transformation.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            View Projects
          </button>

          <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
