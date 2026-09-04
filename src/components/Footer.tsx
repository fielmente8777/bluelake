"use client";

import { useState, type FormEvent } from "react";
import { contactDetails } from "../data/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  SendIcon,
} from "./icons";
import Link from "next/link";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      {/* ================= MANAGED BY BANNER ================= */}
      <section
        aria-labelledby="managed-title"
        className="relative h-[280px] overflow-hidden rounded-t-[32px] bg-navy-deep font-sans text-white sm:h-[345px] lg:h-[350px]"
      >
        <PhotoPlaceholder
          src="/images/BLR_EDIITED-24_11zon.jpg"
          alt="Ante Meridiem Hotels & Resorts exterior"
          ratio="21 / 8"
          className="absolute inset-0 h-full !aspect-auto"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,37,69,0.85)_0%,rgba(11,37,69,0.60)_50%,rgba(11,37,69,0)_85%)] sm:bg-[linear-gradient(90deg,rgba(11,37,69,0.92)_0%,rgba(11,37,69,0.55)_45%,rgba(11,37,69,0.15)_100%)]" />

        <div className="absolute inset-0 z-10 flex items-center px-5 py-4 sm:items-start sm:px-8 sm:pt-[40px] lg:px-[7.5%]">
          <div className="max-w-[520px]">
            {/* MANAGED BY */}
            <p className="m-0 text-[14px] font-bold tracking-[0.08em] text-white uppercase sm:text-[16px]">
              A UNIT OF
            </p>

            {/* TITLE */}
            <h2
              id="managed-title"
              className="font-cormorant! text-[20px] font-semibold text-white sm:mt-3 md:text-5xl uppercase"
            >
              Ante Meridiem
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-1.5 max-w-[520px] text-[13px] text-white sm:mt-[28px] sm:text-[18px]">
              With a commitment to excellence, we bring world-class hospitality,
              operational expertise and a passion for creating memorable stays.
            </p>

            {/* BOOK NOW */}
            <a
              href="#about-ante-meridiem"
              className="mt-2 inline-flex items-center bg-white px-5 py-3 text-[12px] font-bold tracking-[0.06em] !text-navy-deep uppercase transition-colors hover:bg-gray-100 sm:mt-[24px] sm:px-7 sm:py-4"
            >
              <span className="mr-3 flex items-center border-r border-navy-deep/30 pr-3">
                <img
                  src="/images/logo.jpeg"
                  alt="Logo"
                  className="h-5 w-auto object-contain"
                />
              </span>
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="bg-navy-deep px-5 pt-8 font-sans text-text-on-dark sm:px-8 sm:pt-[42px] lg:px-16"
      >
        <div className="mx-auto max-w-[1280px]">
          {/* ================= MAIN FOOTER CONTENT ================= */}
          <div className="grid gap-6 md:grid-cols-[1.15fr_1fr_1fr] md:gap-0">
            {/* ================= PLAN YOUR ESCAPE ================= */}
            <div className="flex flex-col items-start text-left md:pr-[40px]">
              <h2 className="mb-2 max-w-lg font-sans text-[20px] font-semibold text-white sm:mb-3 sm:text-[32px]">
                Plan Your Escape to Serenity
              </h2>

              <p className="mt-2 max-w-[30ch] text-[14px] text-text-on-dark-muted sm:mt-3 sm:text-base">
                Book your stay or reach out to us for enquiries, events and
                special offers.
              </p>
            </div>

            {/* ================= LOCATION ================= */}
            <div className="border-t border-white/15 py-4 md:border-t-0 md:border-l md:px-10 md:py-0">
              <h3 className="mb-2 font-sans text-[13px] font-bold text-white uppercase sm:mb-3 sm:text-[14px]">
                Location
              </h3>

              <div className="flex gap-2.5 py-2 sm:py-3">
                <PinIcon
                  aria-hidden="true"
                  className="mt-px h-4 w-4 shrink-0 text-white sm:h-5 sm:w-5"
                />

                <p className="m-0 text-[13px] text-text-on-dark sm:text-[14px]">
                  {contactDetails.address}
                </p>
              </div>

              <h3 className="mb-2 mt-2 font-sans text-[13px] font-bold text-white uppercase sm:mb-3 sm:mt-0 sm:text-[14px]">
                Phone
              </h3>

              <div className="flex gap-2.5 py-2 sm:py-3">
                <PhoneIcon
                  aria-hidden="true"
                  className="mt-px h-4 w-4 shrink-0 text-white sm:h-5 sm:w-5"
                />

                <p className="m-0 text-[13px] leading-[1.5] text-text-on-dark sm:text-[14px]">
                  {contactDetails.phones.join(" / ")}
                </p>
              </div>

              <h3 className="mb-2 mt-2 font-sans text-[13px] font-bold text-white uppercase sm:mb-3 sm:mt-0 sm:text-[14px]">
                Email
              </h3>

              <div className="flex gap-2.5 py-2 sm:py-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mt-px h-4 w-4 shrink-0 text-white sm:h-5 sm:w-5"
                >
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                <p className="m-0 text-[13px] leading-[1.5] text-text-on-dark sm:text-[14px]">
                  {contactDetails.email.join(" / ")}
                </p>
              </div>
            </div>

            {/* ================= FOLLOW US ================= */}
            <div className="border-t border-white/15 pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-[38px]">
              <h3 className="mb-2 font-sans text-[13px] font-bold tracking-[0.1em] text-white uppercase sm:mb-3 sm:text-[14px]">
                Follow Us
              </h3>

              <div className="flex gap-2.5 py-2 sm:py-3">
                <a
                  href="https://www.instagram.com/thebluelakeresort?igsi=MTg1MDBiNW9pZTJkZQ=="
                  aria-label="Instagram"
                  className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 [&>svg]:h-[16px] [&>svg]:w-[16px]"
                >
                  <InstagramIcon aria-hidden="true" />
                </a>

                <a
                  href="https://www.facebook.com/thebluelakeresort/"
                  aria-label="Facebook"
                  className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 [&>svg]:h-[16px] [&>svg]:w-[16px]"
                >
                  <FacebookIcon aria-hidden="true" />
                </a>
              </div>

              <h3 className="mt-2 font-sans text-[13px] font-bold text-white uppercase sm:mt-0 sm:text-[14px]">
                Newsletter
              </h3>

              <p className="py-2 text-[13px] text-text-on-dark sm:py-3 sm:text-[14px]">
                Stay updated with our latest offers and experiences.
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex h-10 w-full border border-white/35"
              >
                <label htmlFor="newsletter-email" className="hidden">
                  Email address
                </label>

                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-1 border-none bg-white px-3 font-sans text-[12px] text-navy-deep placeholder:text-[#777] focus:outline-none"
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex w-10 items-center justify-center border-none bg-transparent text-white transition-colors hover:bg-white/10 [&>svg]:h-4 [&>svg]:w-4"
                >
                  <SendIcon aria-hidden="true" />
                </button>
              </form>

              {submitted && (
                <p
                  role="status"
                  className="mt-1.5 text-[13px] text-gold sm:text-[14px]"
                >
                  Thanks — you&rsquo;re subscribed!
                </p>
              )}
            </div>
          </div>

          {/* ================= COPYRIGHT ================= */}
          <div className="mt-6 flex min-h-[48px] flex-col items-start gap-3 border-t border-white/20 pt-4 pb-6 font-sans text-[13px] text-text-on-dark-muted sm:mt-[34px] sm:flex-row sm:items-center sm:justify-between sm:text-[14px]">
            <span>© 2025 The Blue Lake, Igatpuri. All Rights Reserved.</span>

            <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-6">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cancellation-policy"
                className="transition-colors hover:text-white"
              >
                Cancellation Policy
              </Link>
              <Link
                href="/in-house-guest-policy"
                className="transition-colors hover:text-white"
              >
                In House Guest Policy
              </Link>
              <Link
                href="/credit"
                className="transition-colors hover:text-white"
              >
                Powered by Fielmente
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
