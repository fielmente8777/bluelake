"use client";

import { useEffect, useRef, useState } from "react";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import {
  CalendarIcon,
  GuestsIcon,
  ChevronDown,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./icons";

function formatDate(value: string) {
  if (!value) return null;
  const d = new Date(`${value}T00:00:00`);
  return d.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function Hero({
  photoSrc,
  whatsappNumber = "911234567890",
  phoneNumber = "+911234567890",
  mapsUrl = "https://maps.google.com/?q=The+Blue+Lake+Igatpuri",
  onSearch,
}: {
  photoSrc?: string;
  whatsappNumber?: string;
  phoneNumber?: string;
  mapsUrl?: string;
  onSearch?: (params: any) => void;
}) {
  const today = new Date().toISOString().slice(0, 10);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const guestsFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (
        guestsFieldRef.current &&
        !guestsFieldRef.current.contains(event.target)
      ) {
        setGuestsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const guestsSummary = `${adults + children} Guest${adults + children !== 1 ? "s" : ""}, ${rooms} Room${rooms !== 1 ? "s" : ""}`;

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (!checkIn || !checkOut) {
      setStatus("Pick both a check-in and check-out date to continue.");
      return;
    }
    if (checkOut <= checkIn) {
      setStatus("Check-out must be after check-in.");
      return;
    }

    const payload = { checkIn, checkOut, rooms, adults, children };
    if (onSearch) {
      onSearch(payload);
    } else {
      setStatus(
        `Checking availability for ${adults + children} guest${adults + children !== 1 ? "s" : ""} · ${formatDate(checkIn)} → ${formatDate(checkOut)}`,
      );
    }
  }

  return (
    <section id="home" className="relative bg-navy-deep">
      <div className="relative">
        <PhotoPlaceholder
          src={photoSrc}
          alt="Aerial view of The Blue Lake resort at dusk, buildings lit along the lakeshore surrounded by mountains"
          ratio="21 / 9"
          className="!aspect-auto h-[620px] md:h-[668px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(11,37,69,0.72)_0%,rgba(11,37,69,0.32)_45%,rgba(11,37,69,0.05)_70%)]" />

        <div className="absolute left-0 bottom-[90px] w-full px-5 text-white sm:px-8 md:bottom-[130px] lg:px-16">
          <p className="mb-3.5 text-[11px] font-semibold tracking-[0.18em] text-text-on-dark uppercase">
            Lakeside Serenity. Timeless Memories.
          </p>
          <h1 className="max-w-[14ch] font-display text-[clamp(30px,5.5vw,52px)] leading-[1.08] font-semibold uppercase">
            THE BLUE LAKE, IGATPURI
          </h1>
          <p className="mt-[18px] max-w-[38ch] text-sm leading-[1.6] text-text-on-dark">
            A serene lakeside resort in Murambi, Igatpuri, where nature&rsquo;s
            calm meets refined comfort.
          </p>
          <span className="mt-5 block h-0.5 w-[42px] bg-white/50" />
          <div className="mt-[26px] flex flex-wrap gap-3.5">
            <a
              href="#book"
              className="border border-white/50 bg-navy-deep px-6 py-3.5 text-[11px] font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-navy-darker"
            >
              Book Your Stay
            </a>
            <a
              href="#about"
              className="border border-white/60 bg-transparent px-6 py-3.5 text-[11px] font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-white/10"
            >
              Explore Resort
            </a>
          </div>
        </div>

        <div
  className="
    absolute right-3 top-1/2 z-[5]
    flex -translate-y-1/2 flex-col
    overflow-hidden
    rounded-[24px]
    bg-navy-deep
    shadow-[var(--shadow-card)]
    sm:right-8
  "
>
  {/* WhatsApp */}
  <a
    href={`https://wa.me/${whatsappNumber}`}
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp chat"
    className="
      flex h-[52px] w-[48px]
      items-center justify-center
      !text-white
      hover:bg-navy-darker
      [&>svg]:h-[21px]
      [&>svg]:w-[21px]
    "
  >
    <WhatsAppIcon aria-hidden="true" />
  </a>

  {/* Phone */}
  <a
    href={`tel:${phoneNumber}`}
    aria-label="Call resort"
    className="
      flex h-[52px] w-[48px]
      items-center justify-center
      !text-white
      hover:bg-navy-darker
      [&>svg]:h-[20px]
      [&>svg]:w-[20px]
    "
  >
    <PhoneIcon aria-hidden="true" />
  </a>

  {/* Location */}
  <a
    href={mapsUrl}
    target="_blank"
    rel="noreferrer"
    aria-label="View on map"
    className="
      flex h-[52px] w-[48px]
      items-center justify-center
      !text-white
      hover:bg-navy-darker
      [&>svg]:h-[21px]
      [&>svg]:w-[21px]
    "
  >
    <PinIcon aria-hidden="true" />
  </a>
</div>
      </div>

      <div className="relative z-10 -mt-[35px] px-4 md:-mt-[52px] md:px-0">
        <form
          aria-label="Check availability"
          onSubmit={handleSubmit}
          className="relative mx-auto grid max-w-[1280px] grid-cols-1 overflow-visible rounded-[8px] bg-white shadow-[var(--shadow-float)] md:grid-cols-[1fr_1fr_1.2fr_auto] md:items-stretch"
        >
          <label className="relative flex cursor-pointer flex-col gap-1.5 border-b border-border px-[22px] py-4 md:border-b-0 md:border-r">
            <span className="text-[10px] font-bold tracking-[0.08em] text-navy-deep uppercase">
              Check-in
            </span>
            <span
              className={`flex items-center justify-between gap-2 text-[13px] [&>svg]:shrink-0 [&>svg]:text-navy-deep ${
                checkIn ? "text-navy-deep" : "text-text-muted"
              }`}
            >
              {checkIn ? formatDate(checkIn) : "Select Date"}
              <CalendarIcon aria-hidden="true" />
            </span>
            <input
              type="date"
              min={today}
              value={checkIn}
              aria-label="Check-in date"
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (checkOut && checkOut <= e.target.value) setCheckOut("");
              }}
              className="absolute inset-0 cursor-pointer border-none opacity-0"
            />
          </label>

          <label className="relative flex cursor-pointer flex-col gap-1.5 border-b border-border px-[22px] py-4 md:border-b-0 md:border-r">
            <span className="text-[10px] font-bold tracking-[0.08em] text-navy-deep uppercase">
              Check-out
            </span>
            <span
              className={`flex items-center justify-between gap-2 text-[13px] [&>svg]:shrink-0 [&>svg]:text-navy-deep ${
                checkOut ? "text-navy-deep" : "text-text-muted"
              }`}
            >
              {checkOut ? formatDate(checkOut) : "Select Date"}
              <CalendarIcon aria-hidden="true" />
            </span>
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              aria-label="Check-out date"
              onChange={(e) => setCheckOut(e.target.value)}
              className="absolute inset-0 cursor-pointer border-none opacity-0"
            />
          </label>

          <div
            ref={guestsFieldRef}
            onClick={() => setGuestsOpen((v) => !v)}
            className="relative flex cursor-pointer flex-col gap-1.5 border-b border-border px-[22px] py-4 md:border-b-0 md:border-r"
          >
            <span className="text-[10px] font-bold tracking-[0.08em] text-navy-deep uppercase">
              Guests &amp; Rooms
            </span>
            <span className="flex items-center justify-between gap-2 text-[13px] text-navy-deep [&>svg]:shrink-0 [&>svg]:text-navy-deep">
              <span className="flex items-center gap-1.5">
                <GuestsIcon aria-hidden="true" />
                {guestsSummary}
              </span>
              <ChevronDown aria-hidden="true" />
            </span>

            <div
              onClick={(e) => e.stopPropagation()}
              className={`absolute top-[calc(100%+8px)] left-[22px] right-[22px] z-20 rounded-[4px] border border-border bg-white p-4 shadow-[var(--shadow-float)] md:left-auto md:right-0 md:w-[260px] ${
                guestsOpen ? "block" : "hidden"
              }`}
            >
              <div className="flex items-center justify-between py-2">
                <span className="text-[13px] text-navy-deep">Rooms</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setRooms((v) => Math.max(1, v - 1))}
                    disabled={rooms <= 1}
                    className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-border bg-white text-base leading-none text-navy-deep disabled:cursor-not-allowed disabled:opacity-35 enabled:hover:border-navy-deep"
                  >
                    −
                  </button>
                  <span className="min-w-[16px] text-center text-[13px] font-semibold">
                    {rooms}
                  </span>
                  <button
                    type="button"
                    onClick={() => setRooms((v) => Math.min(6, v + 1))}
                    className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-border bg-white text-base leading-none text-navy-deep hover:border-navy-deep"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border py-2">
                <span className="text-[13px] text-navy-deep">Adults</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAdults((v) => Math.max(1, v - 1))}
                    disabled={adults <= 1}
                    className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-border bg-white text-base leading-none text-navy-deep disabled:cursor-not-allowed disabled:opacity-35 enabled:hover:border-navy-deep"
                  >
                    −
                  </button>
                  <span className="min-w-[16px] text-center text-[13px] font-semibold">
                    {adults}
                  </span>
                  <button
                    type="button"
                    onClick={() => setAdults((v) => Math.min(10, v + 1))}
                    className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-border bg-white text-base leading-none text-navy-deep hover:border-navy-deep"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border py-2">
                <span className="text-[13px] text-navy-deep">Children</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChildren((v) => Math.max(0, v - 1))}
                    disabled={children <= 0}
                    className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-border bg-white text-base leading-none text-navy-deep disabled:cursor-not-allowed disabled:opacity-35 enabled:hover:border-navy-deep"
                  >
                    −
                  </button>
                  <span className="min-w-[16px] text-center text-[13px] font-semibold">
                    {children}
                  </span>
                  <button
                    type="button"
                    onClick={() => setChildren((v) => Math.min(8, v + 1))}
                    className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-border bg-white text-base leading-none text-navy-deep hover:border-navy-deep"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setGuestsOpen(false)}
                className="mt-3 w-full rounded-[4px] bg-navy-deep py-2.5 text-[11px] font-bold tracking-[0.06em] text-white uppercase"
              >
                Done
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="border-none bg-navy-deep px-7 py-[18px] text-xs font-bold tracking-[0.06em] text-white uppercase transition-colors hover:bg-navy-darker"
          >
            Check Availability
          </button>
        </form>
      </div>

      {status && (
        <p
          role="status"
          className="mx-auto mt-2.5 max-w-[1280px] px-4 text-xs text-navy-deep md:px-14"
        >
          {status}
        </p>
      )}
    </section>
  );
}
