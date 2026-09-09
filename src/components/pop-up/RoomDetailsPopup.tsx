"use client";

import React from "react";
import { RoomCardItem } from "@/app/accommodation/pageData";
import { SwiperCarousel } from "@/components/sliders/SwiperCarousel";
import { LinkButton } from "@/components/buttons/LinkButton";

interface RoomDetailsPopupProps {
  room: RoomCardItem | null;
  onClose: () => void;
}

export function RoomDetailsPopup({ room, onClose }: RoomDetailsPopupProps) {
  if (!room) return null;

  const moreInfo = room.moreInfo;
  const roomTitle = room.title;
  const enquireUrl = room.cta?.href || "#";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto lg:overflow-hidden rounded-3xl bg-[#FCFAF4] p-6 sm:p-10 shadow-2xl text-navy-deep border border-[#c79a46]/25 no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-5 right-6 z-30 text-2xl font-light text-[#c79a46] hover:text-[#a87f33] transition-colors"
        >
          ✕
        </button>

        {/* ================= 2-COLUMN MODAL CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT COLUMN: Image Carousel & In-Room Amenities (FIXED / NON-SCROLLING ON DESKTOP) ================= */}
          <div className="lg:col-span-6 flex flex-col lg:sticky lg:top-0 h-fit">
            {/* Image Slider */}
            <div className="w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-sm">
              <SwiperCarousel
                images={room.images}
                title={roomTitle}
                className="h-full w-full rounded-2xl"
              />
            </div>

            {/* In-Room Amenities Section */}
            <div className="mt-7 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[#0b2545] mb-3.5">
                In-Room Amenities
              </h3>

              <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 text-xs font-medium text-[#1C1917]">
                {room.inRoomAmenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="text-[#0b2545] shrink-0">{item.icon}</span>
                    <span className="text-[#333] text-[13px]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Room Details, Story, Add-ons & Reviews (INDEPENDENTLY SCROLLABLE ON DESKTOP) ================= */}
          <div className="lg:col-span-6 flex flex-col space-y-4 lg:max-h-[78vh] lg:overflow-y-auto no-scrollbar">
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2545] leading-snug">
                {roomTitle}
              </h2>
              {room.description && (
                <p className="mt-1 text-sm sm:text-base font-medium text-[#0b2545]">
                  {room.description}
                </p>
              )}
            </div>

            {/* ROOM DETAILS (MATCHING HOMEPAGE ROOMSSUITES EXACTLY) */}
            <div className="flex flex-wrap items-center gap-x-[14px] gap-y-2 text-[13px] lg:text-[14px] leading-[1.4] text-text-muted pt-1 pb-1">
              {room.amenities.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-[5px] whitespace-nowrap"
                >
                  <span className="text-navy-deep">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
              ))}
            </div>

            {/* Long Overview Paragraphs */}
            {moreInfo?.description && (
              <div className="text-xs sm:text-sm text-[#57534E] leading-relaxed space-y-3 pt-2">
                {moreInfo.description.map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            {/* Structured Sections (Explore your stay, Curated Add-ons, Essential Stay Info) */}
            {moreInfo?.listOfData &&
              moreInfo.listOfData.map((section, sIdx: number) => (
                <div key={sIdx} className="pt-3">
                  <h3 className="text-sm sm:text-base font-bold text-[#0b2545] uppercase tracking-wide mb-2">
                    {section.title}
                  </h3>

                  {section.description && (
                    <p className="mt-1 text-xs sm:text-sm text-[#57534E] leading-relaxed mb-2">
                      {section.description}
                    </p>
                  )}

                  {section.list && (
                    <ul className="space-y-2 text-xs sm:text-sm text-[#57534E]">
                      {section.list.map((item: string, lIdx: number) => (
                        <li
                          key={lIdx}
                          className="leading-relaxed list-disc list-inside"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            {/* Guest Review */}
            {moreInfo?.review && (
              <div className="pt-4 border-t border-[#0b2545]/10">
                <h3 className="text-sm sm:text-base font-bold text-[#0b2545]">
                  Guest Review
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm font-semibold text-[#0b2545]">
                    {moreInfo.review.author}
                  </p>
                  <span className="bg-[#003580] text-white font-bold text-xs px-2 py-0.5 rounded shadow-sm">
                    B.
                  </span>
                </div>

                {/* 5 Stars */}
                <div className="flex text-[#c79a46] text-sm mt-1">
                  ★★★★★
                </div>

                <p className="italic text-xs sm:text-sm text-[#57534E] leading-relaxed mt-2">
                  &ldquo;{moreInfo.review.description}&rdquo;
                </p>
              </div>
            )}

            {/* Action CTA Button */}
            <div className="pt-4 pb-2">
              <LinkButton href={enquireUrl} label={room.cta?.label || "ENQUIRE NOW"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetailsPopup;
