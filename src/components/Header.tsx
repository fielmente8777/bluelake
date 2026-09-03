"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/content";
import { CalendarIcon, GuestsIcon, WhatsAppIcon } from "./icons";

function formatDate(value: string) {
  if (!value) return null;
  const d = new Date(`${value}T00:00:00`);
  return d.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const pathname = usePathname();

  const today = new Date().toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const guestsFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        guestsFieldRef.current &&
        !guestsFieldRef.current.contains(event.target as Node)
      ) {
        setGuestsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const guestsSummary = `${adults + children} Guest${
    adults + children !== 1 ? "s" : ""
  }, ${rooms} Room${rooms !== 1 ? "s" : ""}`;

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      setStatus("Pick both a check-in and check-out date.");
      return;
    }
    if (checkOut <= checkIn) {
      setStatus("Check-out must be after check-in.");
      return;
    }

    const message = `Hello, I want to book a stay at The Blue Lake Resort Igatpuri:\n- Check-in: ${formatDate(checkIn)}\n- Check-out: ${formatDate(checkOut)}\n- Guests: ${adults} Adults, ${children} Children\n- Rooms: ${rooms}`;
    const whatsappUrl = `https://wa.me/918065072001?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setBookingModalOpen(false);
  }

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between gap-4 bg-white/95 px-4 py-[14px] backdrop-blur-[6px] sm:gap-6 sm:px-8 sm:py-[18px] lg:px-14">

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
              setBookingModalOpen(true);
            }}
            className="shrink-0 rounded-[4px] bg-navy-deep px-[16px] py-2.5 text-[11px] font-bold tracking-[0.08em] !text-white uppercase transition-colors hover:bg-navy-darker sm:px-[22px] sm:py-3"
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
      </header>

      {/* ================= BOOKING POPUP MODAL (MOBILE & DESKTOP) ================= */}
      {bookingModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          onClick={() => setBookingModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[380px] overflow-visible rounded-[12px] bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              aria-label="Close booking form"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none"
            >
              ✕
            </button>

            {/* TITLE */}
            <div className="mb-4 text-center">
              <h3 className="font-display text-[18px] font-semibold text-navy-deep">
                Book Your Stay
              </h3>
              <p className="mt-1 text-[12px] text-text-muted">
                Select dates & details to check availability
              </p>
            </div>

            {/* ERROR / STATUS */}
            {status && (
              <p className="mb-3 text-center text-xs font-semibold text-red-600">
                {status}
              </p>
            )}

            {/* FORM */}
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
              {/* CHECK-IN */}
              <label
                className="relative flex cursor-pointer flex-col gap-1 rounded-[8px] border border-border px-3.5 py-2.5 bg-gray-50/50"
                onClick={() => checkInRef.current?.showPicker?.()}
              >
                <span className="text-[10px] font-bold tracking-[0.08em] text-navy-deep uppercase">
                  Check-in Date
                </span>
                <span className={`flex items-center justify-between text-[13px] ${checkIn ? "text-navy-deep font-medium" : "text-text-muted"}`}>
                  {checkIn ? formatDate(checkIn) : "Select Check-in Date"}
                  <CalendarIcon className="h-4 w-4 shrink-0 text-navy-deep" />
                </span>
                <input
                  ref={checkInRef}
                  type="date"
                  min={today}
                  value={checkIn}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    setStatus("");
                  }}
                />
              </label>

              {/* CHECK-OUT */}
              <label
                className="relative flex cursor-pointer flex-col gap-1 rounded-[8px] border border-border px-3.5 py-2.5 bg-gray-50/50"
                onClick={() => checkOutRef.current?.showPicker?.()}
              >
                <span className="text-[10px] font-bold tracking-[0.08em] text-navy-deep uppercase">
                  Check-out Date
                </span>
                <span className={`flex items-center justify-between text-[13px] ${checkOut ? "text-navy-deep font-medium" : "text-text-muted"}`}>
                  {checkOut ? formatDate(checkOut) : "Select Check-out Date"}
                  <CalendarIcon className="h-4 w-4 shrink-0 text-navy-deep" />
                </span>
                <input
                  ref={checkOutRef}
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                    setStatus("");
                  }}
                />
              </label>

              {/* GUESTS & ROOMS */}
              <div ref={guestsFieldRef} className="relative">
                <button
                  type="button"
                  onClick={() => setGuestsOpen((v) => !v)}
                  className="flex w-full cursor-pointer flex-col gap-1 rounded-[8px] border border-border px-3.5 py-2.5 bg-gray-50/50 text-left"
                >
                  <span className="text-[10px] font-bold tracking-[0.08em] text-navy-deep uppercase">
                    Guests & Rooms
                  </span>
                  <span className="flex items-center justify-between text-[13px] font-medium text-navy-deep">
                    {guestsSummary}
                    <GuestsIcon className="h-4 w-4 shrink-0 text-navy-deep" />
                  </span>
                </button>

                {/* GUEST DROPDOWN */}
                {guestsOpen && (
                  <div className="absolute left-0 top-full z-30 mt-1 w-full rounded-[8px] border border-border bg-white p-3.5 shadow-xl">
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-xs font-semibold text-navy-deep">Rooms</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          disabled={rooms <= 1}
                          onClick={() => setRooms((r) => Math.max(1, r - 1))}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold disabled:opacity-40"
                        >
                          -
                        </button>
                        <span className="w-4 text-center text-xs font-bold">{rooms}</span>
                        <button
                          type="button"
                          onClick={() => setRooms((r) => r + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-1.5 border-t border-gray-100">
                      <span className="text-xs font-semibold text-navy-deep">Adults</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          disabled={adults <= 1}
                          onClick={() => setAdults((a) => Math.max(1, a - 1))}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold disabled:opacity-40"
                        >
                          -
                        </button>
                        <span className="w-4 text-center text-xs font-bold">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults((a) => a + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-1.5 border-t border-gray-100">
                      <span className="text-xs font-semibold text-navy-deep">Children</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          disabled={children <= 0}
                          onClick={() => setChildren((c) => Math.max(0, c - 1))}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold disabled:opacity-40"
                        >
                          -
                        </button>
                        <span className="w-4 text-center text-xs font-bold">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren((c) => c + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-[6px] bg-navy-deep py-3 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-colors hover:bg-navy-darker"
              >
                <WhatsAppIcon className="h-4 w-4 text-white" />
                Check Availability
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}