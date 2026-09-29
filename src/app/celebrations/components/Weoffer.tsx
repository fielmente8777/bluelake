"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const WeOffer = () => {
  const cImage = [
    {
      src: "/celebration/image 1.jpg.jpeg",
      alt: "Host conferences ",
    },
    {
      src: "/celebration/image 2.jpg.jpeg",
      alt: "Conferences",
    },
    {
      src: "/celebration/bluelake image 2.jpg.jpeg",
      alt: "Retreats",
    },
    {
      src: "/celebration/image 5.jpg.jpeg",
      alt: "Destination Weddings",
    },
    {
      src: "/celebration/image 6.jpg.jpeg",
      alt: "Social Gatherings",
    },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4">

        {/* ================= HEADING ================= */}
        <div className="mb-10 text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />

            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-gold">
              Celebrations & MICE
            </span>

            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-[20px] font-medium leading-tight text-navy-deep md:text-[40px]">
            Where Every Occasion Finds Its Perfect Setting
          </h2>

          

        </div>

        {/* ================= SLIDER ================= */}

        <div className="mt-10 w-full">

          <div className="mx-auto overflow-hidden rounded-md">

            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              effect="coverflow"
              centeredSlides={true}
              slidesPerView="auto"

              pagination={{
                clickable: true,
                el: ".we-pagination",
              }}

              navigation={{
                nextEl: ".we-next",
                prevEl: ".we-prev",
              }}

              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },

                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}

              coverflowEffect={{
                rotate: 0,
                stretch: 100,
                depth: 600,
                modifier: 1,
                slideShadows: false,
              }}

              modules={[
                Autoplay,
                EffectCoverflow,
                Navigation,
                Pagination,
              ]}

              className="mySwiper we-offer-slider"
            >
              {cImage.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="h-full"
                >
                  <div className="flex w-full flex-col items-center justify-center gap-4 bg-white">

                    {/* ================= IMAGE ================= */}

                    <div className="group relative aspect-[4/2.5] w-full overflow-hidden rounded-lg">

                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Image hover overlay */}

                      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                    </div>

                    {/* ================= TITLE ================= */}

                    <h3 className="mt-3 w-full text-center font-display text-[21px] font-medium text-navy-deep transition-all duration-300 md:text-[24px]">
                      {item.alt}
                    </h3>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

{/* ================= CONTROLS ================= */}

<div className="mt-8 flex w-full items-center justify-center gap-3">

  {/* PREVIOUS */}
  <button
    type="button"
    aria-label="Previous slide"
    className="we-prev flex h-10 w-10 items-center justify-center rounded-full bg-[#294126] text-white transition-all duration-300 hover:bg-[#1f331d] active:scale-95"
  >
    <PrevBtnArrow />
  </button>

   <div className="we-pagination flex items-center w-fit justify-center gap-2" />

  {/* NEXT */}
  <button
    type="button"
    aria-label="Next slide"
    className="we-next flex h-10 w-10 items-center justify-center rounded-full bg-[#294126] text-white transition-all duration-300 hover:bg-[#1f331d] active:scale-95"
  >
    <NextBtnArrow />
  </button>

</div>

        </div>

      </div>

      {/* ================= PAGINATION STYLE ================= */}

      <style jsx global>{`
        .we-pagination .swiper-pagination-bullet {
          width: 18px;
          height: 18px;
          margin: 0 !important;
          border-radius: 9999px;
          background: #f1eee8;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .we-pagination .swiper-pagination-bullet:hover {
          background: #e3d8c7;
        }

        .we-pagination .swiper-pagination-bullet-active {
          background: #d1ba97;
        }

        .we-pagination {
          min-height: 25px;
        }

        @media (max-width: 640px) {
          .we-pagination .swiper-pagination-bullet {
            width: 14px;
            height: 14px;
          }

          .we-pagination {
            gap: 5px;
          }
        }
      `}</style>
    </section>
  );
};

export default WeOffer;

export const PrevBtnArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="white"
        strokeWidth="1.5"
      />

      <path
        d="M13.5 8.5L10 12L13.5 15.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NextBtnArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="white"
        strokeWidth="1.5"
      />

      <path
        d="M10.5 8.5L14 12L10.5 15.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};