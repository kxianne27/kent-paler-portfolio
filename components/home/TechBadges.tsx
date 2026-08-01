const skills = ["SQL Server", "MySQL", "PHP", "VB.NET", "Excel", "Git"];

export function TechBadges() {
  return (
    <div className="flex flex-wrap gap-3 pt-6">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
