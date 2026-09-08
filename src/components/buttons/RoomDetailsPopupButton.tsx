"use client";

import React from "react";

interface RoomDetailsPopupButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
}

export function RoomDetailsPopupButton({
  onClick,
  label = "KNOW MORE",
  className = "",
}: RoomDetailsPopupButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-xs uppercase font-semibold text-[#c79a46] hover:underline tracking-wider cursor-pointer text-left block ${className}`}
    >
      {label}
    </button>
  );
}

export default RoomDetailsPopupButton;
