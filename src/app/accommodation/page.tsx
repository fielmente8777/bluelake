"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { SectionWithContainer } from "@/components/sectionComponants";
import { accommodationData } from "./pageData";
import { AccommodationCard } from "@/components/cards/AccommodationCard";

export default function RoomsPage() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <Header />

      <main className="font-sans text-navy-deep">
        {/* ================= HERO BANNER ================= */}
        <Hero
          photoSrc="/images/DJI_0897_11zon.jpg"
          alt="Lake and mountain view of The Blue Lake resort"
          title="OUR ACCOMMODATION"
          tagline=""
          subtitle=""
          align="center"
          showBookingBar={false}
        />

        {/* ================= LUXURY ACCOMMODATION CARDS ================= */}
        <SectionWithContainer
          sectionClassName="bg-[#f8f9f3] px-4 pt-8 pb-10 sm:px-6 sm:pt-12 sm:pb-14 lg:px-12"
          defaultPadding={false}
        >
          {accommodationData.cards.map((room, index) => (
            <AccommodationCard
              key={room.title}
              room={room}
              index={index}
            />
          ))}
        </SectionWithContainer>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}
