"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { profile } from "@/data/profile";
import { navigation } from "@/data/navigation";
import { Menu, X, GitBranch, UserRound } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="min-w-0">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-900 truncate"
          >
            {profile.name}
          </Link>

          <p className="text-sm text-slate-500 truncate">{profile.headline}</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600 whitespace-nowrap"
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
            className="text-sm font-medium text-slate-600 hover:text-black transition-colors whitespace-nowrap"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-20 border-t border-slate-200 bg-white shadow-xl transition-all duration-200 ease-in-out z-40 ${
          isOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-6 py-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
          <nav className="space-y-2" role="list">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block py-4 text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </nav>

          <div className="mt-6 border-t border-slate-200 pt-6 flex flex-col gap-3">
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
