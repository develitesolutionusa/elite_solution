"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Menu, X } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  {
    href: "https://elitesolutionusa.com/category/business/",
    label: "Blog",
    external: true,
  },
  { href: "/contact", label: "Contact" },
];

const navClass =
  "glow-nav text-sm font-medium text-slate-300 transition-colors hover:text-[#008DDA] hover:underline hover:decoration-2 hover:underline-offset-4";

function NavItem({
  link,
  onNavigate,
  className = navClass,
}: {
  link: NavLink;
  onNavigate?: () => void;
  className?: string;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={className}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} onClick={onNavigate} className={className}>
      {link.label}
    </Link>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent px-4 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl bg-transparent">
        <div className="grid h-14 grid-cols-[1fr_auto] items-center gap-4 px-0 sm:px-1 lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="flex items-center gap-2.5 justify-self-start">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#008DDA] text-white">
              <Globe className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Elite Solution
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {links.map((link) => (
              <NavItem key={link.label} link={link} />
            ))}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Link
              href="/contact"
              className="glow-btn inline-flex items-center gap-2 rounded-xl bg-[#008DDA] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0099ef]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="glow-nav justify-self-end rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="bg-transparent lg:hidden">
            <nav className="flex flex-col gap-1 py-4">
              {links.map((link) => (
                <NavItem
                  key={link.label}
                  link={link}
                  onNavigate={() => setOpen(false)}
                  className="glow-nav rounded-lg px-3 py-2.5 text-center text-sm font-medium text-slate-200 hover:bg-white/10 hover:underline hover:decoration-2 hover:underline-offset-4"
                />
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="glow-btn mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#008DDA] px-3 py-2.5 text-sm font-semibold text-white"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
