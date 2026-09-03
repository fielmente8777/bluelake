"use client";

import { useEffect, useState } from "react";
import { ChevronLeftCircle, ChevronRightCircle } from "./icons";

const aboutImages = [
  {
    image: "/images/DJI_0856_11zon.jpg",
    alt: "The Blue Lake resort aerial view",
  },
  {
    image: "/images/DJI_0903_11zon.jpg",
    alt: "The Blue Lake resort at night",
  },
  {
    image: "/images/DJI_0897_11zon.jpg",
    alt: "Lake and mountain view",
  },
];

export function AboutUs() {
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  /*
   * MOBILE AUTO SLIDER
   * Auto slides image every 3 seconds on mobile view
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const changeMobileImage = (direction: number) => {
    setCurrentMobileIndex(
      (prev) => (prev + direction + aboutImages.length) % aboutImages.length
    );
  };

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="px-5 pt-[58px] pb-[65px] sm:px-8 lg:px-[52px]"
    >
      <div className="mx-auto max-w-[1370px]">

        {/* HEADER */}
        <div className="mb-[38px] flex flex-col items-center text-center">
          <p className="m-0 flex items-center justify-center gap-3 font-sans text-[14px] font-bold tracking-[0.15em] text-gold uppercase sm:text-[24px]">
            <span className="h-px w-[24px] bg-gold" />
            About Us
            <span className="h-px w-[24px] bg-gold" />
          </p>

          <h2
            id="about-title"
            className="mt-4 whitespace-nowrap font-sans text-[20px] font-semibold leading-[1.15] text-navy-deep sm:mt-[40px] sm:max-w-[900px] sm:whitespace-normal sm:text-[40px]"
          >
            A Serene Lakeside Escape in Igatpuri
          </h2>
        </div>

        {/* MOBILE VIEW: SINGLE IMAGE SLIDER (WITH INSIDE BUTTONS & ROOMS STYLE) */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-[8px] bg-white sm:hidden">
          <img
            src={aboutImages[currentMobileIndex].image}
            alt={aboutImages[currentMobileIndex].alt}
            className="h-full w-full object-cover transition-all duration-700 ease-in-out"
          />

          {/* LEFT ARROW (Inside image on left, exact RoomsSuites style) */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => changeMobileImage(-1)}
            className="
              absolute
              left-[10px]
              top-1/2
              z-10
              flex
              h-[34px]
              w-[34px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/45
              text-white
              backdrop-blur-sm
              transition-all
              hover:bg-black/65
            "
          >
            <ChevronLeftCircle className="h-[20px] w-[20px] text-white" />
          </button>

          {/* RIGHT ARROW (Inside image on right, exact RoomsSuites style) */}
          <button
            type="button"
            aria-label="Next image"
            onClick={() => changeMobileImage(1)}
            className="
              absolute
              right-[10px]
              top-1/2
              z-10
              flex
              h-[34px]
              w-[34px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/45
              text-white
              backdrop-blur-sm
              transition-all
              hover:bg-black/65
            "
          >
            <ChevronRightCircle className="h-[20px] w-[20px] text-white" />
          </button>
        </div>

        {/* DESKTOP VIEW: 3 IMAGES GRID (100% UNTOUCHABLE & UNCHANGED) */}
        <div className="hidden grid-cols-1 gap-[16px] sm:grid sm:grid-cols-3">
          {aboutImages.map((item) => (
            <div
              key={item.image}
              className="h-[280px] overflow-hidden rounded-[8px] bg-white"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="mt-[20px] font-sans text-[14px] leading-[1.7] text-text-muted sm:text-[16px]">
          <p>
            Nestled amidst the scenic beauty of Igatpuri, The Blue Lake Resort
            is a peaceful retreat designed for guests looking to relax,
            reconnect and create memorable moments. Surrounded by lush greenery
            and beautiful lake views, the resort offers comfortable stays, an
            infinity swimming pool, delicious dining, indoor and outdoor
            activities, and spacious spaces for families, friends and
            celebrations. Whether it’s a relaxing weekend getaway, a family
            holiday or a special occasion, The Blue Lake Resort brings together
            nature, comfort and warm hospitality for a refreshing escape from
            the everyday.
          </p>
        </div>

      </div>
    </section>
  );
}