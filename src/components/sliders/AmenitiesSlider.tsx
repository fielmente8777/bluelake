"use client";

import React from "react";

export interface AmenityItem {
  icon: React.ReactNode;
  label: string;
}

interface AmenitiesSliderProps {
  amenities: AmenityItem[];
}

export function AmenitiesSlider({ amenities }: AmenitiesSliderProps) {
  return (
    <div className="my-2 p-2.5 bg-white border border-[#0b2545] rounded-2xl overflow-hidden relative">
      <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
        {[...amenities, ...amenities].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0b2545] uppercase tracking-wider shrink-0"
          >
            <span className="w-4 h-4 flex items-center justify-center text-[#c79a46]">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AmenitiesSlider;
