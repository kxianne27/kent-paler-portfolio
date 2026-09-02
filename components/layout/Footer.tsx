import Link from "next/link";
import { profile } from "@/data/profile";
import { navigation } from "@/data/navigation";
import { GitBranch, UserRound, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 py-16">
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand & Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
              {profile.name}
            </Link>
            <p className="mt-4 max-w-xs text-slate-600">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <UserRound className="size-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
              <span className="flex items-center gap-2 text-slate-500" aria-label="Location">
                <MapPin className="size-5" />
                <span className="text-sm">{profile.location}</span>
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Navigation
            </h3>
            <ul className="mt-6 space-y-3" role="list">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Connect
            </h3>
            <ul className="mt-6 space-y-3" role="list">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <GitBranch className="size-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <UserRound className="size-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Mail className="size-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Download Resume */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Resources
            </h3>
            <ul className="mt-6 space-y-3" role="list">
              <li>
                <a
                  href={profile.resume}
                  download
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  📄 Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="mt-2 text-center text-sm text-slate-500">
            Built with Next.js, React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}