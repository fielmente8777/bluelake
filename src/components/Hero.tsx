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
  photoSrc = "/home-banner image.png",
  alt = "Aerial view of The Blue Lake resort at dusk, buildings lit along the lakeshore surrounded by mountains",
  tagline = "Lakeside Serenity. Timeless Memories.",
  title = "THE BLUE LAKE, IGATPURI",
  subtitle = "A serene lakeside resort in Murambi, Igatpuri, where nature’s calm meets refined comfort.",
  whatsappNumber = "918065072001",
  phoneNumber = "+918065072001",
  mapsUrl = "https://maps.google.com/?q=The+Blue+Lake+Igatpuri",
  onSearch,
  showBookingBar = true,
  align = "left",
}: {
  photoSrc?: string;
  alt?: string;
  tagline?: string;
  title?: string;
  subtitle?: string;
  whatsappNumber?: string;
  phoneNumber?: string;
  mapsUrl?: string;
  onSearch?: (params: any) => void;
  showBookingBar?: boolean;
  align?: "left" | "center";
}) {
  const today = new Date().toISOString().slice(0, 10);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [guestsOpen, setGuestsOpen] = useState(false);
  const [status, setStatus] = useState("");

  /* DATE INPUT REFS */
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  /* GUEST DROPDOWN REF */
  const guestsFieldRef = useRef<HTMLDivElement>(null);

  /* CLOSE GUEST DROPDOWN OUTSIDE CLICK */
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* GUEST SUMMARY */
  const guestsSummary = `${adults + children} Guest${
    adults + children !== 1 ? "s" : ""
  }, ${rooms} Room${rooms !== 1 ? "s" : ""}`;

  /* FORM SUBMIT */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("");

    if (!checkIn || !checkOut) {
      setStatus("Pick both a check-in and check-out date to continue.");
      return;
    }

    if (checkOut <= checkIn) {
      setStatus("Check-out must be after check-in.");
      return;
    }

    const payload = {
      checkIn,
      checkOut,
      rooms,
      adults,
      children,
    };

    if (onSearch) {
      onSearch(payload);
    } else {
      setStatus(
        `Checking availability for ${
          adults + children
        } guest${adults + children !== 1 ? "s" : ""} · ${formatDate(
          checkIn,
        )} → ${formatDate(checkOut)}`,
      );
    }
  }

  /* OPEN CHECK-IN CALENDAR */
  function openCheckInPicker() {
    checkInRef.current?.showPicker?.();
  }

  /* OPEN CHECK-OUT CALENDAR */
  function openCheckOutPicker() {
    checkOutRef.current?.showPicker?.();
  }

  return (
    <section>
      {/* ================= HERO ================= */}
      <div className="relative">
        <PhotoPlaceholder
          src={photoSrc}
          alt={alt}
          ratio="21 / 9"
          className="!aspect-auto h-[620px] md:h-[668px]"
        />

        {/* HERO OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(11,37,69,0.72)_0%,rgba(11,37,69,0.32)_45%,rgba(11,37,69,0.05)_70%)]" />

        {/* HERO CONTENT */}
        <div
          className={`absolute ${
            align === "center"
              ? "inset-0 flex flex-col items-center justify-center text-center"
              : "bottom-[90px] left-0 text-left md:bottom-[130px]"
          } w-full px-5 text-white sm:px-8 lg:px-16`}
        >
          {tagline && (
            <p className="whitespace-nowrap py-3 text-[14px] font-semibold tracking-[0.06em] text-text-on-dark uppercase sm:text-base sm:tracking-[0.18em]">
              {tagline}
            </p>
          )}

          {title && (
            <h1
              className={`${
                align === "center" ? "max-w-none" : "max-w-[14ch]"
              } py-3 font-display text-[20px] font-semibold leading-[1.08] uppercase sm:text-[clamp(30px,5.5vw,52px)]`}
            >
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="mt-[18px] text-[14px] max-w-[44ch] text-text-on-dark sm:text-base sm:max-w-[38ch]">
              {subtitle}
            </p>
          )}
        </div>

        {/* ================= SIDE CONTACT BUTTONS ================= */}
        <div
          className="
            absolute
            right-3
            top-[105px]
            z-[5]
            flex
            flex-col
            overflow-hidden
            rounded-[24px]
            bg-navy-deep
            shadow-[var(--shadow-card)]
            sm:right-8
            sm:top-1/2
            sm:-translate-y-1/2
          "
        >
          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp chat"
            className="
              flex
              h-[52px]
              w-[48px]
              items-center
              justify-center
              !text-white
              hover:bg-navy-darker
              [&>svg]:h-[21px]
              [&>svg]:w-[21px]
            "
          >
            <WhatsAppIcon aria-hidden="true" />
          </a>

          {/* PHONE */}
          <a
            href="tel:+918065072001"
            aria-label="Call resort"
            className="
              flex
              h-[52px]
              w-[48px]
              items-center
              justify-center
              !text-white
              hover:bg-navy-darker
              [&>svg]:h-[20px]
              [&>svg]:w-[20px]
            "
          >
            <PhoneIcon aria-hidden="true" />
          </a>

          {/* LOCATION */}
          <a
            href="https://maps.app.goo.gl/yjjb6rpRNq4cHvTH6"
            target="_blank"
            rel="noreferrer"
            aria-label="View on map"
            className="
              flex
              h-[52px]
              w-[48px]
              items-center
              justify-center
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

      {/* ================= BOOKING BAR ================= */}
      {showBookingBar && (
        <>
          <div className="relative z-10 -mt-[35px] px-4 md:-mt-[52px] md:px-0">
        <form
          aria-label="Check availability"
          onSubmit={handleSubmit}
          className="
    relative mx-auto
    grid w-full max-w-[1280px]
    grid-cols-1
    overflow-visible
    rounded-[8px]
    bg-white
    shadow-[0_12px_35px_rgba(11,37,69,0.12)]
    md:grid-cols-[1fr_1fr_1.2fr_auto]
    md:items-stretch
  "
        >
          {/* ================= CHECK-IN ================= */}
          <label
            className="
              relative
              flex
              cursor-pointer
              flex-col
              gap-1.5
              border-b
              border-border
              px-[22px]
              py-4
              rounded-t-[8px]
              md:border-b-0
              md:rounded-tr-none
              md:rounded-l-[8px]
            "
            onClick={openCheckInPicker}
          >
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
              ref={checkInRef}
              type="date"
              min={today}
              value={checkIn}
              aria-label="Check-in date"
              onChange={(e) => {
                const value = e.target.value;

                setCheckIn(value);
                setStatus("");

                if (checkOut && checkOut <= value) {
                  setCheckOut("");
                }
              }}
              className="
                absolute
                inset-0
                cursor-pointer
                border-none
                opacity-0
              "
            />
          </label>

          {/* ================= CHECK-OUT ================= */}
          <label
            className="
              relative
              flex
              cursor-pointer
              flex-col
              gap-1.5
              border-b
              border-border
              px-[22px]
              py-4
              md:border-b-0
            "
            onClick={openCheckOutPicker}
          >
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
              ref={checkOutRef}
              type="date"
              min={checkIn || today}
              value={checkOut}
              aria-label="Check-out date"
              onChange={(e) => {
                setCheckOut(e.target.value);
                setStatus("");
              }}
              className="
                absolute
                inset-0
                cursor-pointer
                border-none
                opacity-0
              "
            />
          </label>

          {/* ================= GUESTS & ROOMS ================= */}
          <div
            ref={guestsFieldRef}
            onClick={() => setGuestsOpen((v) => !v)}
            className="
              relative
              flex
              cursor-pointer
              flex-col
              gap-1.5
              border-b
              border-border
              px-[22px]
              py-4
              md:border-b-0
            "
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

            {/* GUEST DROPDOWN */}
            <div
              onClick={(e) => e.stopPropagation()}
              className={`
                absolute
                top-[calc(100%+8px)]
                left-[22px]
                right-[22px]
                z-20
                rounded-[4px]
                border
                border-border
                bg-white
                p-4
                shadow-[var(--shadow-float)]
                md:left-auto
                md:right-0
                md:w-[260px]
                ${guestsOpen ? "block" : "hidden"}
              `}
            >
              {/* ROOMS */}
              <div className="flex items-center justify-between py-2">
                <span className="text-[13px] text-navy-deep">Rooms</span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setRooms((v) => Math.max(1, v - 1))}
                    disabled={rooms <= 1}
                    className="
                      flex
                      h-[26px]
                      w-[26px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-white
                      text-base
                      leading-none
                      text-navy-deep
                      disabled:cursor-not-allowed
                      disabled:opacity-35
                      enabled:hover:border-navy-deep
                    "
                  >
                    −
                  </button>

                  <span className="min-w-[16px] text-center text-[13px] font-semibold">
                    {rooms}
                  </span>

                  <button
                    type="button"
                    onClick={() => setRooms((v) => Math.min(6, v + 1))}
                    className="
                      flex
                      h-[26px]
                      w-[26px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-white
                      text-base
                      leading-none
                      text-navy-deep
                      hover:border-navy-deep
                    "
                  >
                    +
                  </button>
                </div>
              </div>

              {/* ADULTS */}
              <div className="flex items-center justify-between border-t border-border py-2">
                <span className="text-[13px] text-navy-deep">Adults</span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAdults((v) => Math.max(1, v - 1))}
                    disabled={adults <= 1}
                    className="
                      flex
                      h-[26px]
                      w-[26px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-white
                      text-base
                      leading-none
                      text-navy-deep
                      disabled:cursor-not-allowed
                      disabled:opacity-35
                      enabled:hover:border-navy-deep
                    "
                  >
                    −
                  </button>

                  <span className="min-w-[16px] text-center text-[13px] font-semibold">
                    {adults}
                  </span>

                  <button
                    type="button"
                    onClick={() => setAdults((v) => Math.min(10, v + 1))}
                    className="
                      flex
                      h-[26px]
                      w-[26px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-white
                      text-base
                      leading-none
                      text-navy-deep
                      hover:border-navy-deep
                    "
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CHILDREN */}
              <div className="flex items-center justify-between border-t border-border py-2">
                <span className="text-[13px] text-navy-deep">Children</span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChildren((v) => Math.max(0, v - 1))}
                    disabled={children <= 0}
                    className="
                      flex
                      h-[26px]
                      w-[26px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-white
                      text-base
                      leading-none
                      text-navy-deep
                      disabled:cursor-not-allowed
                      disabled:opacity-35
                      enabled:hover:border-navy-deep
                    "
                  >
                    −
                  </button>

                  <span className="min-w-[16px] text-center text-[13px] font-semibold">
                    {children}
                  </span>

                  <button
                    type="button"
                    onClick={() => setChildren((v) => Math.min(8, v + 1))}
                    className="
                      flex
                      h-[26px]
                      w-[26px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-white
                      text-base
                      leading-none
                      text-navy-deep
                      hover:border-navy-deep
                    "
                  >
                    +
                  </button>
                </div>
              </div>

              {/* DONE */}
              <button
                type="button"
                onClick={() => setGuestsOpen(false)}
                className="
                  mt-3
                  w-full
                  rounded-[4px]
                  bg-navy-deep
                  py-2.5
                  text-[11px]
                  font-bold
                  tracking-[0.06em]
                  text-white
                  uppercase
                "
              >
                Done
              </button>
            </div>
          </div>

          {/* ================= CHECK AVAILABILITY ================= */}
          <button
            type="submit"
            className="
              border-none
              bg-navy-deep
              px-7
              py-[18px]
              text-xs
              font-bold
              tracking-[0.06em]
              text-white
              uppercase
              transition-colors
              hover:bg-navy-darker
              rounded-b-[8px]
              md:rounded-bl-none
              md:rounded-r-[8px]
            "
          >
            Check Availability
          </button>
        </form>
      </div>

      {/* ================= STATUS ================= */}
      {status && (
        <p
          role="status"
          className="
            mx-auto
            mt-2.5
            max-w-[1280px]
            px-4
            text-xs
            text-navy-deep
            md:px-14
          "
        >
          {status}
        </p>
      )}
        </>
      )}
    </section>
  );
}
