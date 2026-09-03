"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/sectionComponent";
import { galleryImages } from "@/data/content";
import { ChevronLeftCircle, ChevronRightCircle } from "@/components/icons";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <Header />

      <main className="min-h-screen bg-[#f8f9f3] font-sans text-navy-deep">
        {/* ================= HERO / HEADER ================= */}
        <section className="bg-[#f8f9f3] pt-[120px] pb-6 sm:pt-[140px]">
          <Container>
            <div className="flex flex-col items-center text-center">
              {/* GOLD KICKER */}
              <p className="m-0 flex items-center justify-center gap-2 font-sans text-[14px] font-bold tracking-[0.16em] text-gold uppercase sm:text-[24px]">
                <span className="block h-px w-[20px] bg-gold" />
                Gallery
                <span className="block h-px w-[20px] bg-gold" />
              </p>

              {/* TITLE */}
              <h1 className="mt-[12px] font-display text-[20px] font-medium leading-snug text-navy-deep sm:text-[40px]">
                A Glimpse of Paradise
              </h1>

              {/* SUBTITLE */}
              <p className="mt-4 font-sans text-[14px] text-text-muted sm:mt-5 sm:text-[16px]">
                See the beauty, feel the calm.
              </p>
            </div>
          </Container>
        </section>

        {/* ================= GALLERY CONTENT ================= */}
        <section className="px-5 pb-16 sm:px-8 lg:px-[52px]">
          <div className="mx-auto max-w-[1370px]">
            {/* GALLERY GRID */}
            <ul className="grid grid-cols-1 gap-[9px] sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((img, i) => (
                <li
                  key={`${img.image}-${i}`}
                  onClick={() => setLightboxIndex(i)}
                  className="h-[216px] cursor-pointer overflow-hidden rounded-[7px] bg-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={img.image}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none"
            >
              ✕
            </button>

            {/* PREVIOUS BUTTON (Left Arrow) */}
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-navy-deep shadow-xl sm:left-6 sm:h-13 sm:w-13"
            >
              <ChevronLeftCircle className="h-6 w-6 text-white sm:h-7 sm:w-7" />
            </button>

            {/* FULLSCREEN IMAGE CONTAINER */}
            <div
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg bg-black/40 p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].image}
                alt={galleryImages[lightboxIndex].alt}
                className="max-h-[80vh] max-w-[88vw] object-contain rounded-md"
              />
            </div>

            {/* NEXT BUTTON (Right Arrow) */}
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-navy-deep shadow-xl sm:right-6 sm:h-13 sm:w-13"
            >
              <ChevronRightCircle className="h-6 w-6 text-white sm:h-7 sm:w-7" />
            </button>
          </div>
        )}
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}
