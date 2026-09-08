"use client";

import React from "react";
import { WhatsAppIcon } from "@/components/icons";

interface LinkButtonProps {
  href: string;
  label?: string;
  className?: string;
  target?: string;
  showIcon?: boolean;
}

export function LinkButton({
  href,
  label = "ENQUIRE NOW",
  className = "",
  target = "_blank",
  showIcon = true,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`w-full flex items-center justify-center gap-2 rounded-[4px] bg-navy-deep px-5 py-3.5 text-xs font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-navy-darker shadow-sm ${className}`}
    >
      {showIcon && (
        <WhatsAppIcon className="h-4 w-4 shrink-0 fill-white text-white" />
      )}
      <span className="text-white">{label}</span>
    </a>
  );
}

export default LinkButton;
