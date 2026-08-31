"use client";

import { useRef } from "react";
import { experienceCards } from "../data/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { ChevronLeftCircle, ChevronRightCircle } from "./icons";

export function ExperiencesStrip() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 236, behavior: "smooth" });
  };

  return (
    <section
      id="experiences"
      aria-labelledby="experiences-title"
      className="bg-black px-5 pt-12 pb-10 sm:px-9 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 md:grid-cols-[285px_1fr]">
        <div>
          <p className="m-0 flex items-center gap-2 text-[10px] leading-[1.2] font-bold tracking-[0.12em] text-gold uppercase before:block before:h-px before:w-5 before:bg-gold">
            Experiences That Stay
          </p>
          <h2
            id="experiences-title"
            className="mt-5 font-display text-[clamp(28px,3vw,34px)] leading-[1.05] font-medium text-white"
          >
            More Than Just a Stay
          </h2>
          <p className="mt-[18px] max-w-[255px] text-xs leading-[1.65] text-text-on-dark-muted">
            From adventure to relaxation, explore experiences that connect you with nature and
            create unforgettable memories.
          </p>
          <a
            href="#experiences"
            className="mt-[26px] inline-flex h-[43px] min-w-[196px] items-center justify-center border border-white/65 bg-transparent text-[10px] font-bold tracking-[0.06em] !text-white uppercase">
            Explore Experiences
          </a>
        </div>

        <div className="relative min-w-0">
          <ul
            ref={trackRef}
            className="no-scrollbar flex gap-[13px] overflow-x-auto pb-0.5"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {experienceCards.map((card) => (
              <li
                key={card.title}
                style={{ scrollSnapAlign: "start" }}
                className="relative h-[272px] w-[207px] shrink-0 overflow-hidden rounded-[5px] border border-white/35 bg-charcoal after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_50%,rgba(0,0,0,0.12)_62%,rgba(0,0,0,0.82)_100%)] [&>*]:h-full [&>*]:w-full"
              >
                <PhotoPlaceholder alt={card.alt} ratio="3 / 4" />
                <span className="absolute bottom-[15px] left-[13px] right-2 z-[2] flex items-center gap-[7px] text-[10px] leading-[1.2] font-bold tracking-[0.06em] text-white uppercase [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:shrink-0">
                  {card.title}
                </span>
              </li>
            ))}
          </ul>
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
