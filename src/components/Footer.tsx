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
  YoutubeIcon,
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
      {/* Managed By Banner */}
      <section
        aria-labelledby="managed-title"
        className="relative h-[275px] overflow-hidden rounded-t-[32px] bg-navy-deep font-sans text-white sm:h-[290px] lg:h-[310px]"
      >
        <PhotoPlaceholder
          src="/images/BLR_EDIITED-24_11zon.jpg"
          alt="Ante Meridiem Hotels & Resorts exterior"
          ratio="21 / 8"
          className="absolute inset-0 h-full !aspect-[21/8]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,37,69,0.92)_0%,rgba(11,37,69,0.55)_45%,rgba(11,37,69,0.15)_100%)]" />

        <div className="absolute inset-0 flex items-start px-5 pt-[40px] sm:px-8 lg:px-[7.5%]">
          <div className="max-w-[440px]">
            <p className="m-0 text-[11px] font-bold tracking-[0.14em] text-text-on-dark uppercase">
              Managed By
            </p>

            <h2
              id="managed-title"
              className="mt-3 font-sans text-[32px] leading-[1.1] font-semibold text-white"
            >
              Ante Meridiem Hotels &amp; Resorts
            </h2>

            <p className="mt-3.5  text-text-on-dark">
              With a commitment to excellence, we bring world-class hospitality,
              operational expertise and a passion for creating memorable stays.
            </p>

            <a
              href="#about-ante-meridiem"
              className="mt-5 inline-flex items-center bg-white px-6 py-3.5 text-[11px] font-bold tracking-[0.06em] !text-navy-deep uppercase transition-colors hover:bg-gray-100"
            >
              Book Now
            </a>
          </div>

          {/* Ante Meridiem Logo */}
         
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-navy-deep px-5 pt-[30px] font-sans text-text-on-dark sm:px-8 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1280px] gap-[30px] md:grid-cols-[1.15fr_1fr_1fr]">

          {/* CONNECT */}
          <div>
            <p className="m-0 flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-text-on-dark uppercase before:block before:h-px before:w-5">
              Let&rsquo;s Connect
            </p>

            <h2 className="mt-3.5 max-w-[14ch] font-sans text-[32px] leading-[1.08] font-semibold text-white">
              Plan Your Escape to Serenity
            </h2>

            <p className="mt-3 max-w-[30ch] text-[14px]  text-text-on-dark-muted">
              Book your stay or reach out to us for enquiries, events and
              special offers.
            </p>
          </div>

          {/* LOCATION */}
          <div className="md:border-l md:border-white/15 md:pl-[30px]">
            <h3 className="mb-3 font-sans text-[14px] font-bold tracking-[0.1em] text-white uppercase">
              Location
            </h3>

            <div className="mb-4 flex gap-3 [&>svg]:mt-px [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0 [&>svg]:text-white">
              <PinIcon aria-hidden="true" />

              <p className="m-0 text-[14px] leading-[1.5] text-text-on-dark">
                {contactDetails.address}
              </p>
            </div>

            <h3 className="mb-3 font-sans text-[14px] font-bold tracking-[0.1em] text-white uppercase">
              Phone
            </h3>

            <div className="mb-4 flex gap-3 [&>svg]:mt-px [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0 [&>svg]:text-white">
              <PhoneIcon aria-hidden="true" />

              <p className="m-0 text-[14px] leading-[1.5] text-text-on-dark">
                {contactDetails.phones.join(" / ")}
              </p>
            </div>

            <h3 className="mb-3 font-sans text-[14px] font-bold tracking-[0.1em] text-white uppercase">
              Email
            </h3>

            <div className="mb-3 flex gap-3 [&>svg]:mt-px [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0 [&>svg]:text-white">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5 shrink-0"
              >
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="m3 7 9 6 9-6" />
              </svg>

              <p className="m-0 text-[14px] leading-[1.5] text-text-on-dark">
                {contactDetails.email}
              </p>
            </div>
          </div>

          {/* SOCIAL + NEWSLETTER */}
          <div className="md:border-l md:border-white/15 md:pl-[30px]">
            <h3 className="mb-3 font-sans text-[14px] font-bold tracking-[0.1em] text-white uppercase">
              Follow Us
            </h3>

            <div className="mb-4 mt-2 flex gap-2.5">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 [&>svg]:h-[16px] [&>svg]:w-[16px]"
              >
                <InstagramIcon aria-hidden="true" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 [&>svg]:h-[16px] [&>svg]:w-[16px]"
              >
                <FacebookIcon aria-hidden="true" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 [&>svg]:h-[16px] [&>svg]:w-[16px]"
              >
                <YoutubeIcon aria-hidden="true" />
              </a>
            </div>

            <h3 className="mb-3 font-sans text-[14px] font-bold tracking-[0.1em] text-white uppercase">
              Newsletter
            </h3>

            <p className="mb-3 text-[14px] leading-[1.5] text-text-on-dark">
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

        {/* COPYRIGHT */}
        <div className="mx-auto mt-7 flex min-h-[38px] max-w-[1280px] flex-col items-start gap-3 border-t border-white/22 pt-3 pb-3.5 font-sans text-[14px] text-text-on-dark-muted sm:flex-row sm:items-center sm:justify-between sm:pb-0">
          <span>
            © 2025 The Blue Lake, Igatpuri. All Rights Reserved.
          </span>

          <div className="flex flex-wrap gap-6">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#credit">Website by AM Digital</a>
          </div>
        </div>
      </footer>
    </>
  );
}