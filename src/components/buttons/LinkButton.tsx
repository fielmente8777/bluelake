"use client";

import React from "react";

interface LinkButtonProps {
  href?: string;
  label?: string;
  className?: string;
  target?: string;
  showLogo?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export function LinkButton({
  href = "#about-ante-meridiem",
  label = "Book Now",
  className = "",
  target,
  showLogo = true,
  fullWidth = false,
  onClick,
}: LinkButtonProps) {
  const content = (
    <>
      {showLogo && (
        <span
          className={
            fullWidth
              ? "absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 flex items-center border-r border-[#0B2545]/30 pr-3"
              : "mr-3 flex items-center border-r border-[#0B2545]/30 pr-3"
          }
        >
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="h-5 w-auto object-contain"
          />
        </span>
      )}
      <span className={fullWidth ? "text-center" : ""}>{label}</span>
    </>
  );

  const baseClasses = `${
    fullWidth ? "w-full relative" : "inline-flex"
  } flex items-center justify-center bg-white border border-[#0B2545] px-5 py-3 text-[12px] font-bold tracking-[0.06em] !text-navy-deep uppercase transition-colors hover:bg-gray-100 sm:px-7 sm:py-3.5 shadow-xs cursor-pointer ${className}`;

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={baseClasses}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={baseClasses}
    >
      {content}
    </a>
  );
}

export default LinkButton;
