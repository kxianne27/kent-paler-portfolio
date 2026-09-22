import { heroButtons } from "@/data/content";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 pt-2">
      {heroButtons.map((btn) => (
        <a
          key={btn.label}
          href={btn.href}
          className={
            btn.variant === "default"
              ? "rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              : "rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
          }
        >
          {btn.label}
        </a>
      ))}
    </div>
  );
}
