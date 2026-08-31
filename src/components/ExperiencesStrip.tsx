"use client";

import { useRef } from "react";
import { experienceCards } from "../data/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
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
          <p className="m-0 flex items-center gap-2 font-sans text-[11px] leading-[1.2] font-bold tracking-[0.14em] text-gold uppercase before:block before:h-px before:w-[24px] before:bg-gold">
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

          <a
            href="#experiences"
            className="mt-[28px] inline-flex h-[44px] min-w-[200px] items-center justify-center border border-white/65 bg-transparent font-sans text-[11px] font-bold tracking-[0.07em] !text-white uppercase transition-colors hover:bg-white hover:!text-navy-deep"
          >
            Explore Experiences
          </a>
        </div>

        {/* RIGHT CARDS */}
        <div className="relative min-w-0">
          <ul
            ref={trackRef}
            className="no-scrollbar flex gap-[15px] overflow-x-auto pb-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {experienceCards.map((card) => (
              <li
                key={card.title}
                style={{ scrollSnapAlign: "start" }}
                className="relative h-[290px] w-[220px] shrink-0 overflow-hidden rounded-[6px] border border-white/35 bg-charcoal"
              >
                {/* IMAGE */}
                <div className="absolute inset-0">
                  <PhotoPlaceholder
                    alt={card.alt}
                    ratio="3 / 4"
                  />
                </div>

                {/* DARK GRADIENT */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_42%,rgba(0,0,0,0.15)_58%,rgba(0,0,0,0.88)_100%)]" />

                {/* CARD CONTENT - BOTTOM */}
                <div className="absolute right-0 bottom-0 left-0 z-[2] px-[15px] pb-[17px]">

                  {/* TITLE */}
                  <div className="flex items-center gap-[8px] font-sans text-[12px] leading-[1.3] font-bold tracking-[0.06em] text-white uppercase">
                    {card.title}
                  </div>

                  {/* DESCRIPTION */}
                  {card.description && (
                    <p className="mt-[7px] max-w-[190px] font-sans text-[11px] leading-[1.45] text-white/85">
                      {card.description}
                    </p>
                  )}
                </div>
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