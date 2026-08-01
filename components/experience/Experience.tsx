import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-40 lg:py-30">
      <div className="mb-14">
        <p className="text-blue-600 font-semibold uppercase tracking-[0.2em]">
          Professional Experience
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Building Digital Solutions Through Experience
        </h2>
      </div>

      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.position}
            className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition hover:shadow-lg"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">{job.position}</h3>

                <p className="text-blue-600 font-medium">{job.company}</p>
              </div>

              <span className="text-slate-500">{job.period}</span>
            </div>

            <p className="mt-6 leading-8 text-slate-600">{job.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {job.achievements.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
