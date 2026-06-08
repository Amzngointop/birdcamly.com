"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Bird, ChevronDown, Menu, X } from "lucide-react";
import { site } from "@/data/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl" style={{ color: "var(--accent)", fontFamily: "var(--font-playfair)" }}>
            <Bird className="w-6 h-6" />
            BirdCamly
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Bird Gear Reviews dropdown */}
            <div className="relative" ref={wrapperRef}>
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "var(--text-primary)" }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Bird Gear Reviews <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-xl shadow-lg border py-2 z-50" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}>
                  {site.nav.bestFeeders.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/best/${item.slug}`}
                      className="block px-4 py-2 text-sm transition-colors hover:text-white"
                      style={{ color: "var(--text-secondary)" }}
                      onClick={() => setDropdownOpen(false)}
                      onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.backgroundColor = "var(--accent)"; (e.target as HTMLAnchorElement).style.color = "white"; }}
                      onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.backgroundColor = ""; (e.target as HTMLAnchorElement).style.color = "var(--text-secondary)"; }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {site.nav.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--text-primary)" }}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t py-4 space-y-2" style={{ borderColor: "var(--border)" }}>
            <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
              Bird Gear Reviews
            </div>
            {site.nav.bestFeeders.map((item) => (
              <Link
                key={item.slug}
                href={`/best/${item.slug}`}
                className="block px-4 py-2 text-sm rounded-lg"
                style={{ color: "var(--text-primary)" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t my-2" style={{ borderColor: "var(--border)" }} />
            {site.nav.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium rounded-lg"
                style={{ color: "var(--text-primary)" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
