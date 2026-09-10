"use client";

import React from "react";
import { RoomCardItem } from "@/app/accommodation/pageData";
import { SwiperCarousel } from "@/components/sliders/SwiperCarousel";
import { AmenitiesSlider } from "@/components/sliders/AmenitiesSlider";
import { LinkButton } from "@/components/buttons/LinkButton";

export interface AccommodationCardProps {
  room: RoomCardItem;
  index: number;
}

export function AccommodationCard({
  room,
  index,
}: AccommodationCardProps) {
  const isImageRight = index % 2 !== 0;
  const roomTitle = room.title;
  const enquireUrl = room.cta?.href || "#";

  return (
    <div className="w-full max-w-7xl mx-auto my-6 lg:my-8 bg-white lg:bg-transparent border-2 border-[#0b2545] lg:border-none rounded-2xl lg:rounded-none overflow-hidden lg:overflow-visible shadow-sm lg:shadow-none grid grid-cols-1 lg:grid-cols-10 gap-0 lg:gap-6 items-stretch">
      {/* Image Slider (Top attached inside card on Mobile, Col-span 6 on Desktop) */}
      <div
        className={`w-full h-[260px] sm:h-[340px] lg:h-[480px] lg:col-span-6 lg:rounded-2xl overflow-hidden ${isImageRight ? "lg:order-last" : "lg:order-first"
          }`}
      >
        <SwiperCarousel
          images={room.images}
          title={roomTitle}
          className="h-full w-full rounded-none lg:rounded-2xl"
        />
      </div>

      {/* Details Card (Below Image inside card on Mobile, Standalone Box on Desktop) */}
      <div className="lg:col-span-4 flex flex-col justify-between lg:border-2 lg:border-[#0b2545] lg:rounded-2xl p-5 lg:p-6 bg-white lg:shadow-sm min-h-auto lg:min-h-[480px]">
        {/* Top: Header & Details */}
        <div className="flex flex-col">
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0b2545] leading-tight">
            {roomTitle}{" "}
            {room.span && (
              <span className="font-normal text-xl lg:text-2xl block sm:inline sm:before:content-['_-__']">
                {room.span}
              </span>
            )}
          </h3>

          {/* ROOM DETAILS */}
          <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center gap-2 text-[12px] lg:text-[13px] leading-normal">
            {room.amenities.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#0b2545]/25 bg-white text-[#1C1917] font-medium whitespace-nowrap"
              >
                <span className="text-navy-deep shrink-0">{item.icon}</span>
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Middle: Full Description */}
        {room.overview && (
          <div className="my-3">
            <p className="text-sm text-[#57534E] leading-relaxed">
              {room.overview}
            </p>
          </div>
        )}

        {/* In-Room Amenities Marquee Slider */}
        <AmenitiesSlider amenities={room.inRoomAmenities} />

        {/* CTA Button */}
        <div className="pt-3 flex justify-center w-full">
          <LinkButton href={enquireUrl} label={room.cta?.label || "Book Now"} />
        </div>
      </div>
    </div>
  );
}

export default AccommodationCard;
