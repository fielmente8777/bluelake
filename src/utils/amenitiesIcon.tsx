import React from "react";
import { BathroomIcon, LakesideIcon } from "@/components/icons";

export const SwimmingPoolIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M2 12h20M2 16h20M2 20h20M7 8c2-4 8-4 10 0" />
  </svg>
);

export const SmartTvIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="2" y="7" width="20" height="15" rx="2" />
    <path d="M17 2l-5 5-5-5" />
  </svg>
);

export const WifiIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
  </svg>
);

export const TeaCoffeeIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
  </svg>
);

export const GardenIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 22v-9M12 13a5 5 0 0 0 5-5c0-4-5-6-5-6s-5 2-5 6a5 5 0 0 0 5 5z" />
  </svg>
);

export const AirConditionerIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="2" y="4" width="20" height="10" rx="2" />
    <path d="M6 18h.01M10 18h.01M14 18h.01M18 18h.01M6 14v4M10 14v4M14 14v4M18 14v4" />
  </svg>
);

export const AttachedBathroomIcon = () => <BathroomIcon className="h-4 w-4" />;
export const LakeViewIcon = () => <LakesideIcon className="h-4 w-4" />;
