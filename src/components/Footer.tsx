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
  className="relative h-[330px] overflow-hidden rounded-t-[32px] bg-navy-deep font-sans text-white sm:h-[345px] lg:h-[350px]"
>
  <PhotoPlaceholder
    src="/images/BLR_EDIITED-24_11zon.jpg"
    alt="Ante Meridiem Hotels & Resorts exterior"
    ratio="21 / 8"
    className="absolute inset-0 h-full !aspect-auto"
  />

  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,37,69,0.92)_0%,rgba(11,37,69,0.55)_45%,rgba(11,37,69,0.15)_100%)]" />

  <div className="absolute inset-0 flex items-start px-5 pt-[40px] sm:px-8 lg:px-[7.5%]">
    <div className="max-w-[520px]">

      {/* MANAGED BY */}
      <p className="m-0 text-[16px] font-bold tracking-[0.08em] text-white uppercase">
        Managed By
      </p>

      {/* TITLE */}
      <h2
        id="managed-title"
        className="mt-3 font-sans text-[32px] leading-[1.1] font-semibold text-white"
      >
        Ante Meridiem Hotels &amp; Resorts
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-[28px] max-w-[520px] text-[18px] leading-[1.65] text-white">
        With a commitment to excellence, we bring world-class hospitality,
        operational expertise and a passion for creating memorable stays.
      </p>

      {/* BOOK NOW */}
      <a
        href="#about-ante-meridiem"
        className="mt-[24px] inline-flex items-center bg-white px-7 py-4 text-[12px] font-bold tracking-[0.06em] !text-navy-deep uppercase transition-colors hover:bg-gray-100"
      >
        Book Now
      </a>

    </div>
  </div>
</section>

      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="bg-navy-deep px-5 pt-[42px] font-sans text-text-on-dark sm:px-8 lg:px-16"
      >
        <div className="mx-auto max-w-[1280px]">
          {/* ================= LET'S CONNECT ================= */}
          <div className="mb-[32px] flex items-center justify-center">
            <p className="m-0 flex items-center justify-center gap-2.5 text-[16px] font-bold text-white uppercase">
              <span className="h-px w-[24px] bg-white/60" />
              Let&rsquo;s Connect
              <span className="h-px w-[24px] bg-white/60" />
            </p>
          </div>

          {/* ================= MAIN FOOTER CONTENT ================= */}
          <div className="grid gap-[32px] md:grid-cols-[1.15fr_1fr_1fr] md:gap-0">
            {/* ================= PLAN YOUR ESCAPE ================= */}
            <div className="md:pr-[40px]">
              <h2 className="max-w-lg font-sans text-[32px] font-semibold text-white mb-5!">
                Plan Your Escape to Serenity
              </h2>

              <p className="mt-3 max-w-[30ch] text-text-on-dark-muted">
                Book your stay or reach out to us for enquiries, events and
                special offers.
              </p>
            </div>

            {/* ================= LOCATION ================= */}
            <div className="border-t border-white/15 md:border-t-0 md:border-l md:pt-0 md:px-10 py-6">
              <h3 className="mb-3 font-sans text-[14px] font-bold text-white uppercase">
                Location
              </h3>

              <div className="py-3 flex gap-3">
                <PinIcon
                  aria-hidden="true"
                  className="mt-px h-5 w-5 shrink-0 text-white"
                />

                <p className="m-0 text-[14px] text-text-on-dark">
                  {contactDetails.address}
                </p>
              </div>

              <h3 className="mb-3 font-sans text-[14px] font-bold text-white uppercase">
                Phone
              </h3>

              <div className="py-3 flex gap-3">
                <PhoneIcon
                  aria-hidden="true"
                  className="mt-px h-5 w-5 shrink-0 text-white"
                />

                <p className="m-0 text-[14px] leading-[1.5] text-text-on-dark">
                  {contactDetails.phones.join(" / ")}
                </p>
              </div>

              <h3 className="mb-3 font-sans text-[14px] font-bold text-white uppercase">
                Email
              </h3>

              <div className="flex gap-3 py-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mt-px h-5 w-5 shrink-0 text-white"
                >
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                <div className="m-0 flex flex-col text-[14px] leading-[1.5] text-text-on-dark">
                  {contactDetails.email.map((email) => (
                    <span key={email}>{email}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= FOLLOW US ================= */}
            <div className="border-t border-white/15 pt-[28px] md:border-t-0 md:border-l md:pt-0 md:pl-[38px]">
              <h3 className="mb-3 font-sans text-[14px] font-bold tracking-[0.1em] text-white uppercase">
                Follow Us
              </h3>

              <div className="py-3 flex gap-2.5">
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

              <h3 className="font-sans text-[14px] font-bold text-white uppercase">
                Newsletter
              </h3>

              <p className="py-3 text-[14px] text-text-on-dark">
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
                  className="min-w-0 flex-1 border-none bg-white px-3 font-sans text-[11px] text-navy-deep placeholder:text-[#777] focus:outline-none"
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
                <p role="status" className="mt-1.5 text-[14px] text-gold">
                  Thanks — you&rsquo;re subscribed!
                </p>
              )}
            </div>
          </div>

          {/* ================= COPYRIGHT ================= */}
          <div className="mt-[34px] flex min-h-[48px] flex-col items-start gap-3 border-t border-white/20 pt-4 pb-4 font-sans text-[14px] text-text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
            <span>© 2025 The Blue Lake, Igatpuri. All Rights Reserved.</span>

            <div className="flex flex-wrap gap-6">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms &amp; Conditions</a>
              <a href="#credit">Powered by Fielmente</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
