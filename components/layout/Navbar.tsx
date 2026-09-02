"use client";

import { useState } from "react";
import Link from "next/link";

import { profile } from "@/data/profile";
import { navigation } from "@/data/navigation";
import { Menu, X, GitBranch, UserRound } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Navigation */}
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

        {/* Desktop Social Links */}
        <div className="hidden lg:flex items-center gap-6">
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-6 pb-6 border-t border-slate-200 bg-white">
          <nav className="space-y-4" role="list">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-lg font-medium text-slate-600 hover:text-black transition-colors rounded-xl hover:bg-slate-50"
            >
              <GitBranch className="size-5" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-xl hover:bg-slate-50"
            >
              <UserRound className="size-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
