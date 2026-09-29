"use client";

import Image from "next/image";
import Link from "next/link";

interface EventsProps {
  title: string;
  subtitle?: string;
  description?: string;
  link?: {
    label: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
}

export default function Events({
  title,
  subtitle,

  link,
  image,
  description,
}: EventsProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex flex-col items-center justify-center gap-4">

        {/* ================= TITLE ================= */}

        <div className="text-center flex flex-col items-center justify-center gap-4">

          <h2
            className="font-display
              text-navy-deep
              text-[30px]
              font-medium
              leading-[1.2]
              md:text-[36px]
              lg:text-[40px]
            "
          >
            {title}
          </h2>

          {/* ================= SUBTITLE ================= */}

          {subtitle && (
            <p
              className="
                mx-auto
              max-w-[1250px]
              text-center
              font-sans
              text-[15px]
              font-normal
              leading-[1.7]
              text-[#111111]
              md:text-[16px]
              lg:text-[17px]
              "
            >
              {subtitle}
            </p>
          )}

        

        </div>

        {/* ================= IMAGE ================= */}

        {image && (
          <div className="relative mx-auto mt-5 w-full overflow-hidden rounded-[3px] md:mt-12">
            <div className="relative aspect-[16/6.2] w-full">

              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1400px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.01]
                "
              />

            </div>
          </div>
        )}

        {/* ================= BOTTOM DESCRIPTION ================= */}

        {description && (
          <p
            className="
              mx-auto
              mt-7
              max-w-[1250px]
              text-center
              font-sans
              text-[15px]
              font-normal
              leading-[1.7]
              text-[#111111]
              md:text-[16px]
              lg:text-[17px]
            "
          >
            {description}
          </p>
        )}

        {/* ================= CTA ================= */}

        {link && (
          <div className="mt-7 flex justify-center">
            <Link
              href={link.href}
              className="
                inline-flex
                min-w-[165px]
                items-center
                justify-center
                bg-navy-deep
                px-8
                py-3
                font-sans
                font-medium
                text-white!
                transition-all
                duration-300
                hover:bg-gold
                hover:text-navy-deep!
                active:scale-95
              "
            >
              {link.label}
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}