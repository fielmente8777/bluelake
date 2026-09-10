import type { SVGProps } from "react";

/**
 * Line-weight, single-color icon set matching the thin navy line icons
 * used throughout the reference (feature strip, contact block, socials).
 * All icons inherit color via `currentColor` so they theme automatically.
 */

const base: SVGProps<SVGSVGElement> = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const LakesideIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    {/* sparkle */}
    <path d="M18 3.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z" />
    {/* boat hull */}
    <path d="M5 16h14l-2 3H7z" />
    {/* mast + sail */}
    <path d="M12 16V7" />
    <path d="M12 8l4.5 8H12z" />
    {/* waves */}
    <path d="M3 20c1.2-1.1 2.4-1.1 3.6 0s2.4 1.1 3.6 0 2.4-1.1 3.6 0 2.4 1.1 3.6 0 2.4-1.1 3.6 0" />
  </svg>
);

export const PremiumStayIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    {/* dome */}
    <path d="M6 15c0-4 2.7-7 6-7s6 3 6 7" />
    {/* handle */}
    <path d="M12 8V5.8" />
    <circle cx="12" cy="5" r="0.9" fill="currentColor" stroke="none" />
    {/* tray */}
    <path d="M4 15h16" />
    <path d="M5.5 17.5h13" />
  </svg>
);

export const DiningIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    {/* fork */}
    <path d="M8.5 3v6" />
    <path d="M7 3v4.5a1.5 1.5 0 0 0 3 0V3" />
    <path d="M8.5 9v12" />
    {/* knife */}
    <path d="M15.5 3c-2 1.5-2 4.5-2 6.5a1.5 1.5 0 0 0 3 0" />
    <path d="M15.5 3v18" />
  </svg>
);

export const ExperiencesIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    {/* flame */}
    <path d="M12 3c1.8 2 .3 3.3.3 5.2A2.7 2.7 0 0 0 15 11a2.7 2.7 0 0 0 1-.3c.2.5.3 1 .3 1.6 0 2.6-2 4.7-4.3 4.7s-4.3-2.1-4.3-4.7c0-1 .3-2 .9-2.8-.4.1-.8.3-1.1.5C6.6 6.7 9.5 4.5 12 3z" />
    {/* base logs */}
    <path d="M5 20l6-2" />
    <path d="M19 20l-6-2" />
  </svg>
);

export const EventsIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    {/* pediment roof */}
    <path d="M4 8l8-4.5L20 8" />
    {/* body */}
    <path d="M5 8h14v10H5z" />
    {/* columns */}
    <path d="M8 8v10M11.5 8v10M15 8v10" />
    {/* base */}
    <path d="M3.5 18h17" />
  </svg>
);

export const ExpertIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    {/* medal circle */}
    <circle cx="12" cy="8" r="4.2" />
    <path d="M12 5.6l.7 1.6 1.7.2-1.3 1.1.4 1.7-1.5-.9-1.5.9.4-1.7-1.3-1.1 1.7-.2z" />
    {/* ribbon tails */}
    <path d="M9 11.5l-2 8 3.2-1.7L12 20l1.8-2.2 3.2 1.7-2-8" />
  </svg>
);

export const WhatsAppIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1z" />
  </svg>
);

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.6 21 3 14.4 3 6a2 2 0 0 1 1-2z" />
  </svg>
);

export const PinIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const CalendarIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={18} height={18} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="1.5" />
    <path d="M3 9.5h18" />
    <path d="M8 3v5M16 3v5" />
  </svg>
);

export const BedIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={16} height={16} {...p}>
    <path d="M3 18v-7a2 2 0 0 1 2-2h5v5" />
    <path d="M3 15h18v3" />
    <path d="M21 18v-4a2 2 0 0 0-2-2h-5" />
    <circle cx="7" cy="9.5" r="1.2" />
  </svg>
);

export const GuestsIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={18} height={18} {...p}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5 21c0-4 3-6 7-6s7 2 7 6" />
  </svg>
);

export const ChevronDown = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={14} height={14} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ChevronLeftCircle = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M14 8l-4 4 4 4" />
  </svg>
);

export const ChevronRightCircle = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8l4 4-4 4" />
  </svg>
);

export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={18} height={18} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={18} height={18} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M14 8h-1.5A1.5 1.5 0 0 0 11 9.5V12h3l-.5 3H11v6" />
  </svg>
);

export const SendIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={16} height={16} {...p}>
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

export const BathroomIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={16} height={16} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 9.5a4 4 0 0 1 8 0" />
    <path d="M9 13.5v.01M12 13.5v.01M15 13.5v.01M9 16v.01M12 16v.01M15 16v.01" strokeWidth={2.5} />
  </svg>
);

export const RoomSizeIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} width={16} height={16} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M7 7h10v10H7z" />
  </svg>
);