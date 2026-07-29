import { profile } from "@/data/profile";
import { HeroButtons } from "./HeroButtons";
import { HeroImage } from "./HeroImage";
import { HeroStats } from "./HeroStats";
import { TechBadges } from "./TechBadges";

export function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            {profile.headline} • {profile.subtitle}
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {profile.tagline}
          </p>

          <HeroButtons />

          <TechBadges />

          <HeroStats />
        </div>

        <HeroImage />
      </div>
    </section>
  );
}
