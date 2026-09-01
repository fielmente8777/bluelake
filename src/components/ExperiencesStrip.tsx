"use client";

import { useRef } from "react";
import { experienceCards } from "../data/content";
import { ChevronLeftCircle, ChevronRightCircle } from "./icons";

export function ExperiencesStrip() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: dir * 236,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="experiences"
      aria-labelledby="experiences-title"
      className="bg-black px-5 pt-[70px] pb-[70px] sm:px-9 lg:px-12"
    >
      <div className="mx-auto max-w-[1370px]">

        {/* ================= TOP HEADING ================= */}
        <div className="mb-[42px] text-center">

          {/* SMALL LABEL */}
          <p className="m-0 flex items-center justify-center gap-3 py-3 font-sans text-[24px] font-bold tracking-[0.12em] text-gold uppercase">
            <span className="h-px w-[24px] bg-gold" />

            Experiences That Stay

            <span className="h-px w-[24px] bg-gold" />
          </p>

          {/* MAIN HEADING */}
          <h2
            id="experiences-title"
            className="mt-[10px] font-display text-[40px] leading-[1.1] text-white"
          >
            More Than Just a Stay
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="relative w-full">

          <ul
            ref={trackRef}
            className="
              no-scrollbar
              flex
              w-full
              gap-[15px]
              overflow-x-auto
              pb-1
            "
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {experienceCards.map((card, index) => (
              <li
                key={card.image || index}
                style={{
                  scrollSnapAlign: "start",
                }}
                className="
                  relative
                  h-[290px]
                  min-w-[220px]
                  flex-1
                  overflow-hidden
                  rounded-[6px]
                  border
                  border-white/35
                  bg-charcoal
                "
              >
                {/* IMAGE */}
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* DARK GRADIENT */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[linear-gradient(
                      to_bottom,
                      rgba(0,0,0,0)_25%,
                      rgba(0,0,0,0.15)_50%,
                      rgba(0,0,0,0.9)_100%
                    )]
                  "
                />
              </li>
            ))}
          </ul>

          {/* ================= ARROWS ================= */}
          <div
            className="
              absolute
              right-[5px]
              bottom-[-25px]
              z-10
              flex
              gap-2
            "
          >
            {/* LEFT ARROW */}
            <button
              type="button"
              aria-label="Previous experiences"
              onClick={() => scrollByCard(-1)}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[rgba(47,68,42,0.9)]
                text-white
                backdrop-blur-[4px]
                transition-all
                hover:-translate-y-px
                hover:bg-navy-deep
                [&>svg]:h-5
                [&>svg]:w-5
              "
            >
              <ChevronLeftCircle aria-hidden="true" />
            </button>

            {/* RIGHT ARROW */}
            <button
              type="button"
              aria-label="Next experiences"
              onClick={() => scrollByCard(1)}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[rgba(47,68,42,0.9)]
                text-white
                backdrop-blur-[4px]
                transition-all
                hover:-translate-y-px
                hover:bg-navy-deep
                [&>svg]:h-5
                [&>svg]:w-5
              "
            >
              <ChevronRightCircle aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="mt-[38px] flex justify-center text-center">
          <p className="max-w-[650px] font-sans text-[15px] leading-[1.6] text-white/65">
            From adventure to relaxation, explore experiences that connect
            you with nature and create unforgettable memories.
          </p>
        </div>

      </div>
    </section>
  );
}