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

export interface RoomCardItem {
  title: string;
  span?: string;
  description: string;
  overview?: string;
  amenities: AmenityItem[];
  inRoomAmenities: AmenityItem[];
  images: string[];
  cta: {
    label: string;
    href: string;
  };
}

export interface AccommodationData {
  tagline: string;
  title: string;
  description: string;
  cards: RoomCardItem[];
}

export const accommodationData: AccommodationData = {
  tagline: "OUR ACCOMMODATION",
  title: "Lakeside Luxury Crafted for Your Perfect Igatpuri Getaway",
  description:
    "Explore every room and suite across The Blue Lake Resort, each one thoughtfully designed for serene, unhurried lakeside stays.",
  cards: [
    {
      title: "Deluxe Garden View AC",
      span: "",
      description: "Nestled amidst manicured botanical greens and peaceful surroundings",
      overview:
        "Step into a peaceful retreat surrounded by lush greenery in our Deluxe Garden View AC rooms. Designed to provide a comfortable and relaxing stay, these rooms combine contemporary amenities with a refreshing garden setting. Ideal for couples, families and leisure travellers seeking a quiet escape close to nature.",
      amenities: [
        {
          icon: <GuestsIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "For 2 Adults",
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
      images: [
        "/rooms/deluxe.jpg",
        "/rooms/garden/202002111643316554-abe864aadcf511eca6940a58a9feac02.jpg",
        "/rooms/garden/bed.jpg",
        "/rooms/deleuxelake.jpg",
      ],
      cta: {
        label: "Book Now",
        href: "#about-ante-meridiem",
      },
    },
    {
      title: "Deluxe Lake View AC",
      span: "",
      description: "Wake up to serene lake views & gentle morning breeze",
      overview:
        "Wake up to beautiful views of the serene Blue Lake from the comfort of our Deluxe Lake View AC rooms. Thoughtfully designed for a relaxing stay, these rooms offer a comfortable setting with modern amenities, air-conditioning and a peaceful atmosphere surrounded by nature. Perfect for couples and leisure travellers looking for a refreshing lakeside escape.",
      amenities: [
        {
          icon: <GuestsIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "For 2 Adults",
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
      images: [
        "/rooms/deluxe.jpg",
        "/rooms/beddelux.jpg",
        "/rooms/bathdeluxe.jpg",
        "/rooms/deleuxelake.jpg",
        "/rooms/deluxebath.jpg",
      ],
      cta: {
        label: "Book Now",
        href: "#about-ante-meridiem",
      },
    },
    {
      title: "Super Deluxe Lake View",
      span: "",
      description: "Expansive space, luxury comforts & uninterrupted lake vistas",
      overview:
        "Experience a more spacious and elevated stay in our Super Deluxe Lake View rooms, designed for guests who appreciate extra room and comfort. With captivating views of the lake, generous living space and a choice of King or Twin beds, these rooms offer the perfect blend of relaxation, convenience and natural beauty for a memorable getaway.",
      amenities: [
        {
          icon: <GuestsIcon className="h-[14px] w-[14px] text-navy-deep" />,
          label: "For 2 Adults",
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
        label: "Book Now",
        href: "#about-ante-meridiem",
      },
    },

  ],
};
