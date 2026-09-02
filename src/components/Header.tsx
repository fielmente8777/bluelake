"use client";

import { useState } from "react";
import { navLinks } from "../data/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between gap-6 bg-white/95 px-5 py-[18px] backdrop-blur-[6px] sm:px-8 lg:px-14">

      {/* ================= LOGO ================= */}
      <a
        href="/"
        aria-label="The Blue Lake, Igatpuri — home"
        className="flex shrink-0 items-center"
        onClick={() => setOpen(false)}
      >
        <img
          src="/images/logo.png"
          alt="The Blue Lake Igatpuri"
          className="h-[55px] w-auto object-contain"
        />
      </a>

      {/* ================= NAVIGATION ================= */}
      <nav
        aria-label="Primary"
        className={`${
          open ? "flex" : "hidden"
        } absolute top-full left-0 right-0 flex-col gap-[18px] bg-white p-5 shadow-[var(--shadow-card)] lg:static lg:flex lg:flex-row lg:items-center lg:gap-[clamp(14px,1.8vw,28px)] lg:bg-transparent lg:p-0 lg:shadow-none`}
      >
        {navLinks.map((link, i) => {
          /*
           * IMPORTANT:
           * If navLinks contains "#about", "#rooms", etc.,
           * convert them to "/#about", "/#rooms", etc.
           *
           * This makes navigation work from:
           * /privacy-policy
           * /terms
           * /etc.
           */

          const href = link.href.startsWith("#")
            ? `/${link.href}`
            : link.href;

          return (
            <a
              key={link.label}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-1 border-b-2 pb-1 text-xs font-semibold tracking-[0.06em] uppercase transition-colors hover:text-gold ${
                i === 0
                  ? "border-gold text-gold"
                  : "border-transparent text-navy-deep"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      {/* ================= BOOK NOW ================= */}
      <a
        href="/#book"
        onClick={() => setOpen(false)}
        className="hidden shrink-0 rounded-[4px] bg-navy-deep px-[22px] py-3 text-[11px] font-bold tracking-[0.08em] !text-white uppercase transition-colors hover:bg-navy-darker lg:inline-block"
      >
        Book Now
      </a>

      {/* ================= MOBILE MENU ================= */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex flex-col gap-1 border-none bg-transparent p-1.5 lg:hidden"
      >
        <span className="h-0.5 w-[22px] bg-navy-deep" />
        <span className="h-0.5 w-[22px] bg-navy-deep" />
        <span className="h-0.5 w-[22px] bg-navy-deep" />
      </button>
    </header>
  );
}