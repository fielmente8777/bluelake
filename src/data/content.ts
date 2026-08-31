export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const featureItems = [
  {
    icon: "lakeside",
    title: "Lakeside Location",
    description: "Wake up to breathtaking views of the peaceful lake and lush mountains.",
  },
  {
    icon: "premium",
    title: "Premium Stay",
    description: "Elegant rooms & villas designed for comfort, relaxation and style.",
  },
  {
    icon: "dining",
    title: "Delightful Dining",
    description: "Savor delicious multi-cuisine meals crafted with fresh, local ingredients.",
  },
  {
    icon: "experiences",
    title: "Experiences",
    description: "Adventure, bonfires, nature walks & curated outdoor activities.",
  },
  {
    icon: "events",
    title: "Events & Celebrations",
    description: "Perfect for weddings, corporate retreats & special occasions.",
  },
  {
    icon: "expert",
    title: "Managed by Experts",
    description: "Delivering world-class hospitality with Ante Meridiem Hotels & Resorts.",
  },
] as const;

export const rooms = [
  {
    name: "Deluxe Room",
    guests: "2 Guests",
    beds: "1 King Bed",
    view: "Lake View",
    description:
      "Modern comfort with scenic views and all essential amenities.",
    alt: "Deluxe Room interior with king bed and lake-facing window",
    image: "/rooms/deluxe.jpg",
  },

  {
    name: "Premium Villa",
    guests: "4 Guests",
    beds: "2 King Beds",
    view: "Lake View",
    description:
      "Spacious villas with private sit-out, perfect for families.",
    alt: "Premium Villa with private sit-out and lake view",
    image: "/rooms/Superdeluxe.jpg",
  },

  {
    name: "Executive Suite",
    guests: "2 Guests",
    beds: "1 King Bed",
    view: "Lake View",
    description:
      "Luxury suite with separate living area, elevated comfort and views.",
    alt: "Executive Suite with separate living area",
    image: "/rooms/deluxegarden.jpg",
  },

  {
    name: "Family Suite",
    guests: "4 Guests",
    beds: "2 King Beds",
    view: "Garden View",
    description:
      "Spacious family suite with a comfortable living area and peaceful garden views.",
    alt: "Family Suite",
    image: "/rooms/deleuxelake.jpg",
  },
];
export const experienceCards = [
  { title: "Bonfire Nights", alt: "Guests gathered around a bonfire at night" },
  { title: "Water Activities", alt: "Kayaking on the lake" },
  { title: "Nature Trails", alt: "Guests walking a forest nature trail" },
  { title: "Outdoor Dining", alt: "String-lit outdoor dining setup by the lake" },
];

export const galleryImages = [
  { alt: "Lakeside lounge seating area at the resort" },
  { alt: "Aerial view of the resort property amid the hills" },
  { alt: "Poolside daybeds overlooking the lake" },
  { alt: "Sunset over the lake" },
];

export const contactDetails = {
  address: "Murambi, Igatpuri – 422403, Maharashtra, India",
  phones: ["+91 91565 55504", "91565 55505"],
  email: "reservations@thebluelakeigatpuri.com",
};
