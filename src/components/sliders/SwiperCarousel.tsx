"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeftCircle, ChevronRightCircle } from "@/components/icons";

interface SwiperCarouselProps {
  images: string[];
  title: string;
  className?: string;
  autoPlayDelay?: number;
}

export function SwiperCarousel({
  images,
  title,
  className = "",
  autoPlayDelay = 3500,
}: SwiperCarouselProps) {
  // If no images or single image, handle simply
  const count = images?.length || 0;

  // Clone first and last slide for seamless infinite looping
  // [Last, Image 0, Image 1, ..., Image N-1, First]
  const slides = count > 1 ? [images[count - 1], ...images, images[0]] : images;

  // Starts at 1 (which corresponds to images[0])
  const [currentIndex, setCurrentIndex] = useState(count > 1 ? 1 : 0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const isAnimatingRef = useRef(false);

  /*
   * AUTO SLIDING TIMER (Infinite Loop)
   */
  useEffect(() => {
    if (count <= 1 || isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [count, isPaused, autoPlayDelay, currentIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  /*
   * TRANSITION END HANDLER:
   * Handles seamless wrap-around without rewinding backwards
   */
  const handleTransitionEnd = () => {
    isAnimatingRef.current = false;

    if (count <= 1) return;

    // If moved past the last slide (into cloned first slide)
    if (currentIndex >= slides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
    // If moved before the first slide (into cloned last slide)
    else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(count);
    }
  };

  // Re-enable transition on next frame after teleporting
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Calculate active dot index (0 to count - 1)
  const activeDotIndex =
    count <= 1
      ? 0
      : currentIndex === 0
      ? count - 1
      : currentIndex === slides.length - 1
      ? 0
      : currentIndex - 1;

  if (count === 0) return null;

  return (
    <div
      className={`group relative w-full h-full overflow-hidden bg-[#081b36] select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ================= SEAMLESS INFINITE SLIDING TRACK ================= */}
      <div
        className={`flex h-full w-full ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((img, i) => (
          <div key={`${img}-${i}`} className="relative h-full w-full shrink-0">
            <img
              src={img}
              alt={`${title} - View ${i}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* ================= LEFT ARROW BUTTON ================= */}
      {count > 1 && (
        <button
          type="button"
          aria-label={`Previous image of ${title}`}
          onClick={handlePrev}
          className="
            absolute
            left-[12px]
            top-1/2
            z-20
            flex
            h-[36px]
            w-[36px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black/45
            text-white
            opacity-100
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-black/70
            hover:scale-105
            sm:opacity-0
            sm:group-hover:opacity-100
          "
        >
          <ChevronLeftCircle
            aria-hidden="true"
            className="h-[22px] w-[22px] text-white"
          />
        </button>
      )}

      {/* ================= RIGHT ARROW BUTTON ================= */}
      {count > 1 && (
        <button
          type="button"
          aria-label={`Next image of ${title}`}
          onClick={handleNext}
          className="
            absolute
            right-[12px]
            top-1/2
            z-20
            flex
            h-[36px]
            w-[36px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black/45
            text-white
            opacity-100
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-black/70
            hover:scale-105
            sm:opacity-0
            sm:group-hover:opacity-100
          "
        >
          <ChevronRightCircle
            aria-hidden="true"
            className="h-[22px] w-[22px] text-white"
          />
        </button>
      )}

      {/* ================= DOT INDICATORS ================= */}
      {count > 1 && (
        <div className="absolute bottom-[10px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-[5px]">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to image ${index + 1}`}
              onClick={(e) => handleDotClick(index, e)}
              className={`h-[5px] rounded-full transition-all duration-300 ${
                index === activeDotIndex
                  ? "w-[14px] bg-white"
                  : "w-[5px] bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SwiperCarousel;
