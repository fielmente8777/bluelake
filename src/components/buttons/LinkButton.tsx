"use client";

import React from "react";

interface LinkButtonProps {
  href?: string;
  label?: string;
  className?: string;
  target?: string;
  showLogo?: boolean;
}

export function LinkButton({
  href = "#about-ante-meridiem",
  label = "Book Now",
  className = "",
  target,
  showLogo = true,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center bg-white border border-[#0B2545] px-5 py-3 text-[12px] font-bold tracking-[0.06em] !text-navy-deep uppercase transition-colors hover:bg-gray-100 sm:px-7 sm:py-4 shadow-xs ${className}`}
    >
      {showLogo && (
        <span className="mr-3 flex items-center border-r border-[#0B2545]/30 pr-3">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="h-5 w-auto object-contain"
          />
        </span>
      )}
      <span>{label}</span>
    </a>
  );
}

export default LinkButton;

