"use client";

import { useEffect, useRef, useState } from "react";
import { experienceCards } from "../data/content";
import { ChevronLeftCircle, ChevronRightCircle } from "./icons";

// Duplicate cards array for seamless infinite circular looping on desktop
const doubledCards = [...experienceCards, ...experienceCards];

export function ExperiencesStrip() {
  const trackRef = useRef<HTMLUListElement>(null);
  const isHoveredRef = useRef(false);
  const [mobileIndex, setMobileIndex] = useState(0);

  /*
   * DESKTOP INFINITE CIRCULAR CONTINUOUS SLIDER
   * Continuously moves images forward on desktop without scrolling back.
   */
  useEffect(() => {
    let animationFrameId: number;

    const step = () => {
      if (trackRef.current && !isHoveredRef.current) {
        const container = trackRef.current;
        const halfWidth = container.scrollWidth / 2;

        container.scrollLeft += 1;

        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  /*
   * MOBILE AUTO SLIDER EFFECT
   * Changes single centered image every 3 seconds on mobile view.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoveredRef.current) {
        setMobileIndex((prev) => (prev + 1) % experienceCards.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevMobile = () => {
    setMobileIndex(
      (prev) => (prev - 1 + experienceCards.length) % experienceCards.length
    );
  };

  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % experienceCards.length);
  };

  const scrollByCard = (dir: 1 | -1) => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const halfWidth = container.scrollWidth / 2;
    const cardWidth = 235;

    let target = container.scrollLeft + dir * cardWidth;

    if (target >= halfWidth) {
      target -= halfWidth;
    } else if (target < 0) {
      target += halfWidth;
    }

    container.scrollTo({
      left: target,
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
          <p className="m-0 flex items-center justify-center gap-3 py-3 font-sans text-[14px] font-bold tracking-[0.12em] text-gold uppercase sm:text-[24px]">
            <span className="h-px w-[24px] bg-gold" />

            Experiences That Stay

            <span className="h-px w-[24px] bg-gold" />
          </p>

          {/* MAIN HEADING */}
          <h2
            id="experiences-title"
            className="mt-[10px] font-display text-[20px] leading-[1.1] text-white sm:text-[40px]"
          >
            More Than Just a Stay
          </h2>
        </div>

        {/* ================= MOBILE VIEW: SINGLE FIXED CENTERED IMAGE SLIDER ================= */}
        <div
          className="relative mx-auto w-full max-w-[280px] sm:hidden"
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => (isHoveredRef.current = false)}
        >
          {/* CENTERED IMAGE FRAME */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-[8px] border border-white/35 bg-charcoal shadow-lg">
            <img
              src={experienceCards[mobileIndex].image}
              alt={experienceCards[mobileIndex].alt || "Experience photo"}
              className="h-full w-full object-cover transition-all duration-700 ease-in-out"
            />

            {/* DARK GRADIENT OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_25%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.9)_100%)]" />
          </div>

          {/* MOBILE LEFT BUTTON (Half inside, half outside on left border) */}
          <button
            type="button"
            aria-label="Previous experience image"
            onClick={prevMobile}
            className="absolute left-[-18px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(47,68,42,0.95)] text-white shadow-xl backdrop-blur-[4px] transition-all hover:scale-105 hover:bg-navy-deep [&>svg]:h-5 [&>svg]:w-5"
          >
            <ChevronLeftCircle aria-hidden="true" />
          </button>

          {/* MOBILE RIGHT BUTTON (Half inside, half outside on right border) */}
          <button
            type="button"
            aria-label="Next experience image"
            onClick={nextMobile}
            className="absolute right-[-18px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(47,68,42,0.95)] text-white shadow-xl backdrop-blur-[4px] transition-all hover:scale-105 hover:bg-navy-deep [&>svg]:h-5 [&>svg]:w-5"
          >
            <ChevronRightCircle aria-hidden="true" />
          </button>
        </div>

        {/* ================= DESKTOP VIEW: MULTI-CARD CAROUSEL (100% UNTOUCHABLE & UNCHANGED) ================= */}
        <div
          className="relative hidden w-full sm:block"
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => (isHoveredRef.current = false)}
        >
          {/* CARDS LIST */}
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
          >
            {doubledCards.map((card, index) => (
              <li
                key={`${card.image}-${index}`}
                className="
                  relative
                  h-[290px]
                  min-w-[220px]
                  shrink-0
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

          {/* DESKTOP ARROWS */}
          <div className="absolute right-[5px] bottom-[-25px] z-10 flex gap-2">
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
          <p className="max-w-[650px] font-sans text-[14px] leading-[1.6] text-white/65 sm:text-[15px]">
            From adventure to relaxation, explore experiences that connect
            you with nature and create unforgettable memories.
          </p>
        </div>

      </div>
    </section>
  );
}