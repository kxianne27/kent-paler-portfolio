import Link from "next/link";

import { profile } from "@/data/profile";
import { navigation } from "@/data/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div>
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            {profile.name}
          </Link>

          <p className="text-sm text-slate-500">{profile.headline}</p>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
