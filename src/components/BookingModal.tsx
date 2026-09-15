"use client";

import { useEffect, useRef, useState } from "react";
import { useBookingModal } from "../context/BookingContext";
import { CalendarIcon, GuestsIcon } from "./icons";

function formatDate(value: string) {
  if (!value) return null;
  const d = new Date(`${value}T00:00:00`);
  return d.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BookingModal() {
  const { isBookingOpen, closeBookingModal } = useBookingModal();

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

  if (!isBookingOpen) return null;

  const guestsSummary = `${adults + children} Guest${
    adults + children !== 1 ? "s" : ""
  }, ${rooms} Room${rooms !== 1 ? "s" : ""}`;

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("");

    if (!checkIn || !checkOut) {
      setStatus("Pick both a check-in and check-out date to continue.");
      return;
    }
    if (checkOut <= checkIn) {
      setStatus("Check-out must be after check-in.");
      return;
    }

    setStatus(
      `Checking availability for ${
        adults + children
      } guest${adults + children !== 1 ? "s" : ""} · ${formatDate(
        checkIn
      )} → ${formatDate(checkOut)}`
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
      onClick={closeBookingModal}
    >
      <div
        className="relative w-full max-w-[380px] overflow-visible rounded-[12px] bg-white p-6 pt-14 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          aria-label="Close booking form"
          onClick={closeBookingModal}
          className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none cursor-pointer"
        >
          ✕
        </button>

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
            <span
              className={`flex items-center justify-between text-[13px] ${
                checkIn ? "text-navy-deep font-medium" : "text-text-muted"
              }`}
            >
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
            <span
              className={`flex items-center justify-between text-[13px] ${
                checkOut ? "text-navy-deep font-medium" : "text-text-muted"
              }`}
            >
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
                Guests &amp; Rooms
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
                  <span className="text-xs font-semibold text-navy-deep">
                    Rooms
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={rooms <= 1}
                      onClick={() => setRooms((r) => Math.max(1, r - 1))}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold disabled:opacity-40 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-4 text-center text-xs font-bold">
                      {rooms}
                    </span>
                    <button
                      type="button"
                      onClick={() => setRooms((r) => r + 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-1.5 border-t border-gray-100">
                  <span className="text-xs font-semibold text-navy-deep">
                    Adults
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults((a) => Math.max(1, a - 1))}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold disabled:opacity-40 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-4 text-center text-xs font-bold">
                      {adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdults((a) => a + 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-1.5 border-t border-gray-100">
                  <span className="text-xs font-semibold text-navy-deep">
                    Children
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={children <= 0}
                      onClick={() => setChildren((c) => Math.max(0, c - 1))}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold disabled:opacity-40 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-4 text-center text-xs font-bold">
                      {children}
                    </span>
                    <button
                      type="button"
                      onClick={() => setChildren((c) => c + 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs font-bold cursor-pointer"
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
            className="mt-2 flex w-full items-center justify-center rounded-[6px] bg-navy-deep py-3 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-colors hover:bg-navy-darker cursor-pointer"
          >
            Check Availability
          </button>
        </form>

        {/* STATUS MESSAGE */}
        {status && (
          <div
            role="status"
            className="mt-3 rounded-[6px] bg-gray-50 border border-border p-2.5 text-center text-xs font-medium text-navy-deep"
          >
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
