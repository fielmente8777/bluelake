"use client";

import { useState } from "react";
import { rooms } from "../data/content";
import {
  GuestsIcon,
  BedIcon,
  PinIcon,
  ChevronLeftCircle,
  ChevronRightCircle,
} from "./icons";

export function RoomsSuites() {
  const [currentImages, setCurrentImages] = useState<Record<string, number>>(
    {}
  );

  const changeImage = (roomName: string, direction: number, total: number) => {
    setCurrentImages((prev) => {
      const current = prev[roomName] ?? 0;

      const next =
        (current + direction + total) % total;

      return {
        ...prev,
        [roomName]: next,
      };
    });
  };

  return (
    <section
      id="rooms"
      aria-labelledby="rooms-title"
      className="bg-[#f8f9f3] px-5 pt-[58px] pb-[65px] sm:px-8 lg:px-[52px]"
    >
      <div className="mx-auto max-w-[1370px]">

        {/* HEADER */}
        <div className="mb-[38px] flex flex-col items-center text-center">
          <p className="flex items-center gap-2 text-[9px] font-bold tracking-[0.16em] text-gold uppercase">
            <span className="block h-px w-[20px] bg-gold" />
            Stay in Comfort
            <span className="block h-px w-[20px] bg-gold" />
          </p>

          <h2
            id="rooms-title"
            className="mt-[12px] font-display text-[34px] leading-none text-navy-deep"
          >
            Rooms &amp; Suites
          </h2>

          <p className="mt-[15px] max-w-[480px] text-[11px] leading-[1.65] text-text-muted">
            Spacious, elegant and thoughtfully designed spaces for a relaxing
            stay.
          </p>
        </div>

        {/* ROOM CARDS */}
        <ul className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
          {rooms.slice(0, 4).map((room) => {
            const currentIndex = currentImages[room.name] ?? 0;

            return (
              <li
                key={room.name}
                className="flex min-w-0 flex-col overflow-hidden rounded-[8px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              >
                {/* IMAGE SLIDER */}
                <div className="group relative aspect-[1.55/1] overflow-hidden">

                  <img
                    src={room.images[currentIndex]}
                    alt={room.name}
                    className="h-full w-full object-cover transition-all duration-500"
                  />

                  {/* LEFT ARROW */}
                  {room.images.length > 1 && (
                    <button
                      type="button"
                      aria-label={`Previous image of ${room.name}`}
                      onClick={() =>
                        changeImage(
                          room.name,
                          -1,
                          room.images.length
                        )
                      }
                      className="absolute left-[10px] top-1/2 flex h-[32px] w-[32px] -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <ChevronLeftCircle
                        aria-hidden="true"
                        className="h-[18px] w-[18px]"
                      />
                    </button>
                  )}

                  {/* RIGHT ARROW */}
                  {room.images.length > 1 && (
                    <button
                      type="button"
                      aria-label={`Next image of ${room.name}`}
                      onClick={() =>
                        changeImage(
                          room.name,
                          1,
                          room.images.length
                        )
                      }
                      className="absolute right-[10px] top-1/2 flex h-[32px] w-[32px] -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <ChevronRightCircle
                        aria-hidden="true"
                        className="h-[18px] w-[18px]"
                      />
                    </button>
                  )}

                  {/* DOTS */}
                  {room.images.length > 1 && (
                    <div className="absolute bottom-[10px] left-1/2 flex -translate-x-1/2 gap-[5px]">
                      {room.images.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          aria-label={`Go to image ${index + 1}`}
                          onClick={() =>
                            setCurrentImages((prev) => ({
                              ...prev,
                              [room.name]: index,
                            }))
                          }
                          className={`h-[5px] w-[5px] rounded-full transition-all ${
                            index === currentIndex
                              ? "w-[14px] bg-white"
                              : "bg-white/60"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col px-[19px] pt-[18px] pb-[20px]">

                  <h3 className="text-[12px] font-bold tracking-[0.04em] text-navy-deep uppercase">
                    {room.name}
                  </h3>

                  <div className="mt-[14px] flex flex-wrap items-center gap-x-[10px] gap-y-2 text-[9.5px] text-text-muted">

                    <span className="inline-flex items-center gap-[4px] whitespace-nowrap">
                      <GuestsIcon
                        aria-hidden="true"
                        className="h-[12px] w-[12px] shrink-0 text-navy-deep"
                      />
                      {room.guests}
                    </span>

                    <span className="inline-flex items-center gap-[4px]">
                      <BedIcon
                        aria-hidden="true"
                        className="h-[12px] w-[12px] shrink-0 text-navy-deep"
                      />
                      {room.beds}
                    </span>

                    <span className="inline-flex items-center gap-[4px] whitespace-nowrap">
                      <PinIcon
                        aria-hidden="true"
                        className="h-[12px] w-[12px] shrink-0 text-navy-deep"
                      />
                      {room.view}
                    </span>

                  </div>

                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}