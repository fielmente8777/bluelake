"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/content";
import { useBookingModal } from "../context/BookingContext";
import { Container } from "./sectionComponants";

export function Header() {
  const [open, setOpen] = useState(false);
  const { openBookingModal } = useBookingModal();
  const pathname = usePathname();

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-[6px]">
        <Container className="relative flex items-center justify-between gap-4 py-[14px] sm:gap-6 sm:py-[18px]">
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
              className="h-[46px] w-auto object-contain sm:h-[55px]"
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
              const href = link.href.startsWith("#")
                ? `/${link.href}`
                : link.href;

              const isActive =
                pathname === href ||
                (pathname === "/" && i === 0) ||
                (href !== "/" && href !== "/#home" && !href.startsWith("/#") && pathname?.startsWith(href));

              return (
                <a
                  key={link.label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-1 border-b-2 pb-1 text-xs font-semibold tracking-[0.06em] uppercase transition-colors hover:text-gold ${
                    isActive
                      ? "border-gold text-gold"
                      : "border-transparent text-navy-deep"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* ================= BOOK NOW BUTTON ================= */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openBookingModal();
              }}
              className="shrink-0 rounded-[4px] bg-navy-deep px-[16px] py-2.5 text-[11px] font-bold tracking-[0.08em] !text-white uppercase transition-colors hover:bg-navy-darker sm:px-[22px] sm:py-3 cursor-pointer"
            >
              Book Now
            </button>

            {/* ================= MOBILE MENU TOGGLE ================= */}
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
          </div>
        </Container>
      </header>
    </>
  );
}