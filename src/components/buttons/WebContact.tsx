"use client";

import React from "react";
import { WhatsAppIcon, PhoneIcon } from "@/components/icons";

interface WebContactProps {
  type?: "whatsapp" | "phone";
  value: string;
  className?: string;
  label?: string;
}

export function WebContact({
  type = "whatsapp",
  value,
  className = "",
  label,
}: WebContactProps) {
  const href =
    type === "whatsapp"
      ? `https://wa.me/${value.replace(/\D/g, "")}`
      : `tel:${value}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-gold ${className}`}
    >
      {type === "whatsapp" ? (
        <WhatsAppIcon className="h-4 w-4 fill-current" />
      ) : (
        <PhoneIcon className="h-4 w-4" />
      )}
      {label && <span>{label}</span>}
    </a>
  );
}

export default WebContact;
