"use client";

import { useEffect, useState } from "react";
import { galleryImages } from "../data/content";
import { ChevronLeftCircle, ChevronRightCircle } from "./icons";

export function Gallery() {
  // Show only 4 images on desktop single row
  const homepageGalleryImages = galleryImages.slice(0, 4);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  /*
   * MOBILE AUTO SLIDER
   * Auto slides through all 36 gallery images every 3 seconds on mobile view
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const changeMobileImage = (direction: number) => {
    setCurrentMobileIndex(
      (prev) => (prev + direction + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-off-white px-5 pt-[58px] pb-[65px] sm:px-8 lg:px-[52px]"
    >
      <div className="mx-auto max-w-[1370px]">

        {/* Header */}
        <div className="mb-[38px] flex flex-col items-center text-center">
          <p className="flex items-center gap-2 font-sans text-[14px] font-bold tracking-[0.16em] text-gold uppercase sm:text-[24px]">
            <span className="block h-px w-[20px] bg-gold" />
            Gallery
            <span className="block h-px w-[20px] bg-gold" />
          </p>

          <h2
            id="gallery-title"
            className="mt-[12px] font-display text-[20px] font-medium leading-snug text-navy-deep sm:text-[40px]"
          >
            A Glimpse of Paradise
          </h2>

          <p className="mt-4 font-sans text-[14px] text-text-muted sm:mt-5 sm:text-[16px]">
            See the beauty, feel the calm.
          </p>
        </div>

        {/* MOBILE VIEW: SINGLE IMAGE SLIDER (WITH INSIDE BUTTONS & ROOMS STYLE) */}
        <div className="relative h-[250px] w-full overflow-hidden rounded-[7px] bg-white sm:hidden">
          <img
            src={galleryImages[currentMobileIndex].image}
            alt={galleryImages[currentMobileIndex].alt}
            className="h-full w-full object-cover transition-all duration-700 ease-in-out"
          />

          {/* LEFT ARROW (Inside image on left, exact Rooms/AboutUs style) */}
          <button
            type="button"
            aria-label="Previous gallery image"
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

          {/* RIGHT ARROW (Inside image on right, exact Rooms/AboutUs style) */}
          <button
            type="button"
            aria-label="Next gallery image"
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

        {/* DESKTOP VIEW: 4 IMAGES ROW (100% UNTOUCHABLE & UNCHANGED) */}
        <ul className="hidden grid-cols-1 gap-[9px] sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {homepageGalleryImages.map((img) => (
            <li
              key={img.image}
              className="h-[216px] overflow-hidden rounded-[7px] bg-white"
            >
              <img
                src={img.image}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </li>
          ))}
        </ul>

        {/* View All Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="/gallery"
            className="inline-flex items-center rounded-[4px] bg-navy-deep px-[22px] py-3 text-[11px] font-bold tracking-[0.08em] !text-white uppercase transition-colors hover:bg-navy-darker"
          >
            View All
          </a>
        </div>

      </div>
    </section>
  );
}