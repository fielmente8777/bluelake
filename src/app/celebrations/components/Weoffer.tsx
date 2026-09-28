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
      src: "/celebration/image 3.jpg.jpeg",
      alt: "Retreats",
    },
    {
      src: "/celebration/image 5.jpg.jpeg",
      alt: "Destination Weddings",
    },
    {
      src: "/celebration/image 6 .jpg.jpeg",
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

          <h2 className="font-display text-[36px] font-medium leading-tight text-navy-deep md:text-[50px]">
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

          <div className="mt-8 flex w-full items-center justify-center gap-8">

            {/* PREVIOUS */}

            <button
              type="button"
              aria-label="Previous slide"
              className="we-prev flex h-10 w-10 items-center justify-center text-[#063333] transition-all duration-300 hover:text-[#D1BA97] active:scale-95"
            >
              <PrevBtnArrow />
            </button>

            {/* PAGINATION */}

            <div className="we-pagination flex items-center justify-center gap-2" />

            {/* NEXT */}

            <button
              type="button"
              aria-label="Next slide"
              className="we-next flex h-10 w-10 items-center justify-center text-[#063333] transition-all duration-300 hover:text-[#D1BA97] active:scale-95"
            >
              <NextBtnArrow />
            </button>

          </div>

        </div>

      </div>

      {/* ================= PAGINATION STYLE ================= */}

      <style jsx global>{`
        .we-pagination .swiper-pagination-bullet {
          width: 25px;
          height: 25px;
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


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

export const PrevBtnArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="20"
      viewBox="0 0 29 16"
      fill="none"
      className="h-5 w-9"
    >
      <path
        d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM29 9H1V7H29V9Z"
        fill="currentColor"
      />
    </svg>
  );
};


/* =========================================================
   NEXT BUTTON
========================================================= */

export const NextBtnArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="20"
      viewBox="0 0 29 16"
      fill="none"
      className="h-5 w-9"
    >
      <path
        d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z"
        fill="currentColor"
      />
    </svg>
  );
};