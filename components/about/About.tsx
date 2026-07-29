export function About() {
  return (
    <section id="about" className="py-28">
      <div className="grid gap-16 lg:grid-cols-2 items-center">
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-[0.2em]">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Building Information Systems that Improve Public Services
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            I am a Systems Analyst and Software Engineer with over a decade of
            experience in the Philippine government. My work focuses on
            enterprise application development, digital transformation,
            automation, database design, and business process improvement.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Combining technical expertise with public administration enables me
            to bridge technology and organizational needs, delivering solutions
            that improve operational efficiency and service delivery.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-50 p-10 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold">Highlights</h3>

          <ul className="mt-8 space-y-5">
            <li>✔ 10+ Years Government Service</li>

            <li>✔ Enterprise Information Systems</li>

            <li>✔ Database Design & SQL Development</li>

            <li>✔ Digital Transformation Projects</li>

            <li>✔ Systems Analysis & Process Automation</li>

            <li>✔ Public Administration Background</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
