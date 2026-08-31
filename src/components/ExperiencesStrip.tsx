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
      className="bg-black px-5 pt-[50px] pb-[55px] sm:px-9 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 md:grid-cols-[285px_1fr]">

        {/* LEFT CONTENT */}
        <div>
          <p className="m-0 flex items-center gap-2 font-sans text-[11px] leading-[1.2] font-bold tracking-[0.14em] text-gold uppercase">
            Experiences That Stay
          </p>

          <h2
            id="experiences-title"
            className="mt-[18px] font-sans text-[34px] leading-[1.1] font-semibold text-white"
          >
            More Than Just a Stay
          </h2>

          <p className="mt-[18px] max-w-[270px] font-sans text-[13px] leading-[1.65] text-text-on-dark-muted">
            From adventure to relaxation, explore experiences that connect you
            with nature and create unforgettable memories.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="relative min-w-0">
          <ul
            ref={trackRef}
            className="no-scrollbar flex gap-[15px] overflow-x-auto pb-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {experienceCards.map((card, index) => (
              <li
                key={card.image || index}
                style={{ scrollSnapAlign: "start" }}
                className="relative h-[290px] w-[220px] shrink-0 overflow-hidden rounded-[6px] border border-white/35 bg-charcoal"
              >
                {/* IMAGE ONLY */}
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* DARK GRADIENT */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_30%,rgba(0,0,0,0.2)_52%,rgba(0,0,0,0.9)_100%)]" />
              </li>
            ))}
          </ul>

          {/* ARROWS */}
          <div className="absolute -right-[30px] -bottom-[27px] z-[5] flex gap-2">
            <button
              type="button"
              aria-label="Previous experiences"
              onClick={() => scrollByCard(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(47,68,42,0.85)] text-white backdrop-blur-[4px] transition-all hover:-translate-y-px hover:bg-navy-deep [&>svg]:h-5 [&>svg]:w-5"
            >
              <ChevronLeftCircle aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Next experiences"
              onClick={() => scrollByCard(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(47,68,42,0.85)] text-white backdrop-blur-[4px] transition-all hover:-translate-y-px hover:bg-navy-deep [&>svg]:h-5 [&>svg]:w-5"
            >
              <ChevronRightCircle aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}