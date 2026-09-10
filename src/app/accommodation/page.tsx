"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { accommodationData } from "./pageData";
import { AccommodationCard } from "@/components/cards/AccommodationCard";

export default function RoomsPage() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <Header />

      <main className="min-h-screen bg-[#f8f9f3] font-sans text-navy-deep">
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
        <section className="px-4 pt-10 pb-20 sm:px-6 sm:pt-14 lg:px-12">
          <div className="mx-auto max-w-7xl">
            {accommodationData.cards.map((room, index) => (
              <AccommodationCard
                key={room.title}
                room={room}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}
