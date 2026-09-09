import React from "react";
import {
  GuestsIcon,
  BedIcon,
  PinIcon,
  BathroomIcon,
  RoomSizeIcon,
} from "@/components/icons";
import {
  WifiIcon,
  AttachedBathroomIcon,
  MineralWaterIcon,
  LaundryServiceIcon,
  HousekeepingIcon,
  RoomServiceIcon,
  AirPurifierIcon,
} from "@/utils/amenitiesIcon";

export interface AmenityItem {
  icon: React.ReactNode;
  label: string;
}

export interface RoomDetailsSection {
  title: string;
  description?: string;
  list?: string[];
}

export interface RoomReview {
  author: string;
  description: string;
}

export interface RoomMoreInfo {
  description?: string[];
  listOfData?: RoomDetailsSection[];
  review?: RoomReview;
}

export interface RoomCardItem {
  title: string;
  span?: string;
  description: string;
  overview?: string;
  amenities: AmenityItem[];
  inRoomAmenities: AmenityItem[];
  startingPrice: string;
  discountCode?: string;
  discountValidTill?: string;
  images: string[];
  cta: {
    label: string;
    href: string;
  };
  moreInfo?: RoomMoreInfo;
}

export interface AccommodationData {
  tagline: string;
  title: string;
  description: string;
  cards: RoomCardItem[];
}

const WHATSAPP_PHONE = "918065072001";
const makeEnquireUrl = (roomName: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hello, I want to enquire about ${roomName} at The Blue Lake Resort Igatpuri.`
  )}`;

export const accommodationData: AccommodationData = {
  tagline: "OUR ACCOMMODATION",
  title: "Lakeside Luxury Crafted for Your Perfect Igatpuri Getaway",
  description:
    "Explore every room and suite across The Blue Lake Resort, each one thoughtfully designed for serene, unhurried lakeside stays.",
  cards: [
    {
      title: "Deluxe Lake View AC",
      span: "",
      description: "Wake up to serene lake views & gentle morning breeze",
      overview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      amenities: [
        {
          icon: <GuestsIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "Max 3 Guests",
        },
        {
          icon: <BedIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "1 Queen Bed",
        },
        {
          icon: <PinIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "Lake View",
        },
        {
          icon: <BathroomIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "1 Bathroom",
        },
        {
          icon: <RoomSizeIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "180 sq.ft (17 sq.mt.)",
        },
      ],
      inRoomAmenities: [
        { icon: <MineralWaterIcon />, label: "Mineral Water" },
        { icon: <LaundryServiceIcon />, label: "Laundry Service" },
        { icon: <HousekeepingIcon />, label: "Housekeeping" },
        { icon: <WifiIcon />, label: "High Speed WiFi" },
        { icon: <AttachedBathroomIcon />, label: "Attached Bathroom" },
        { icon: <RoomServiceIcon />, label: "Room Service" },
      ],
      startingPrice: "From ₹ xx xxx/night",
      discountCode: "xx xxx",
      discountValidTill: "xx xxx",
      images: [
        "/rooms/deluxe.jpg",
        "/rooms/beddelux.jpg",
        "/rooms/bathdeluxe.jpg",
        "/rooms/deleuxelake.jpg",
        "/rooms/deluxebath.jpg",
      ],
      cta: {
        label: "Enquire Now",
        href: makeEnquireUrl("Deluxe Lake View AC room"),
      },
    },
    {
      title: "Super Deluxe Lake View",
      span: "",
      description: "Expansive space, luxury comforts & uninterrupted lake vistas",
      overview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      amenities: [
        {
          icon: <GuestsIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "Max 3 Guests",
        },
        {
          icon: <BedIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "1 King Bed / 2 Twin",
        },
        {
          icon: <PinIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "Lake View",
        },
        {
          icon: <BathroomIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "1 Bathroom",
        },
        {
          icon: <RoomSizeIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "280 sq.ft (26 sq.mt.)",
        },
      ],
      inRoomAmenities: [
        { icon: <MineralWaterIcon />, label: "Mineral Water" },
        { icon: <LaundryServiceIcon />, label: "Laundry Service" },
        { icon: <AttachedBathroomIcon />, label: "Attached Bathroom" },
        { icon: <RoomServiceIcon />, label: "Room Service" },
        { icon: <AirPurifierIcon />, label: "Air Purifier" },
        { icon: <HousekeepingIcon />, label: "Housekeeping" },
      ],
      startingPrice: "From ₹ xx xxx/night",
      discountCode: "xx xxx",
      discountValidTill: "xx xxx",
      images: [
        "/rooms/Superdeluxe.jpg",
        "/rooms/super/bath.jpg",
        "/rooms/super/bathr.jpg",
        "/rooms/super/bed.jpg",
        "/rooms/super/eac02.jpg",
        "/rooms/super/s.jpg",
        "/rooms/super/sup.jpg",
        "/rooms/super/super.jpg",
      ],
      cta: {
        label: "Enquire Now",
        href: makeEnquireUrl("Super Deluxe Lake View room"),
      },
    },
    {
      title: "Deluxe Garden View AC",
      span: "",
      description: "Nestled amidst manicured botanical greens and peaceful surroundings",
      overview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      amenities: [
        {
          icon: <GuestsIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "Max 3 Guests",
        },
        {
          icon: <BedIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "1 King Bed",
        },
        {
          icon: <PinIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "Garden View",
        },
        {
          icon: <BathroomIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "1 Bathroom",
        },
        {
          icon: <RoomSizeIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "180 sq.ft (17 sq.mt.)",
        },
      ],
      inRoomAmenities: [
        { icon: <LaundryServiceIcon />, label: "Laundry Service" },
        { icon: <HousekeepingIcon />, label: "Housekeeping" },
        { icon: <WifiIcon />, label: "High Speed WiFi" },
        { icon: <AttachedBathroomIcon />, label: "Attached Bathroom" },
        { icon: <RoomServiceIcon />, label: "Room Service" },
        { icon: <AirPurifierIcon />, label: "Air Purifier" },
      ],
      startingPrice: "From ₹ XX XXX/night",
      discountCode: "BLUELAKE10",
      discountValidTill: "31st March",
      images: [
        "/rooms/deluxe.jpg",
        "/rooms/garden/202002111643316554-abe864aadcf511eca6940a58a9feac02.jpg",
        "/rooms/garden/bed.jpg",
        "/rooms/deleuxelake.jpg",
      ],
      cta: {
        label: "Enquire Now",
        href: makeEnquireUrl("Deluxe Garden View AC room"),
      },
    },
  ],
};
