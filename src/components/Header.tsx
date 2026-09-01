"use client";

import { useState } from "react";
import { navLinks } from "../data/content";
import { ChevronDown } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between gap-6 bg-white/95 px-5 py-[18px] backdrop-blur-[6px] sm:px-8 lg:px-14">
      <a
  href="#home"
  aria-label="The Blue Lake, Igatpuri — home"
  className="flex shrink-0 items-center"
>
  <img
    src="/images/logo.png"
    alt="The Blue Lake Igatpuri"
    className="h-[55px] w-auto object-contain"
  />
</a>

      {/* <span className="hidden lg:block ml-1 border-l border-border pl-4 text-[9px] leading-[1.5] tracking-[0.04em] text-text-muted">
        managed by
        <strong className="block text-[10px] text-navy-deep">Ante Meridiem Hotels &amp; Resorts</strong>
      </span> */}

      <nav
        aria-label="Primary"
        className={`${open ? "flex" : "hidden"} absolute top-full left-0 right-0 flex-col gap-[18px] bg-white p-5 shadow-[var(--shadow-card)] lg:static lg:flex lg:flex-row lg:items-center lg:gap-[clamp(14px,1.8vw,28px)] lg:bg-transparent lg:p-0 lg:shadow-none`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={`flex items-center gap-1 border-b-2 pb-1 text-xs font-semibold tracking-[0.06em] uppercase transition-colors hover:text-gold ${
              i === 0 ? "border-gold text-gold" : "border-transparent text-navy-deep"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
  href="#book"
  className="hidden shrink-0 rounded-[4px] bg-navy-deep px-[22px] py-3 text-[11px] font-bold tracking-[0.08em] !text-white uppercase transition-colors hover:bg-navy-darker lg:inline-block"
>
  Book Now
</a>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex flex-col gap-1 border-none bg-none p-1.5 lg:hidden"
      >
        <span className="h-0.5 w-[22px] bg-navy-deep" />
        <span className="h-0.5 w-[22px] bg-navy-deep" />
        <span className="h-0.5 w-[22px] bg-navy-deep" />
      </button>
    </header>
  );
}
