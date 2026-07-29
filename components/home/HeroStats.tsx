const stats = [
  {
    value: "10+",
    label: "Years in Government",
  },
  {
    value: "6+",
    label: "Enterprise Systems",
  },
  {
    value: "100K+",
    label: "Government Records",
  },
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-6 pt-10">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>

          <p className="text-sm text-slate-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
