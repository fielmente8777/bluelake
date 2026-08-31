import { PhotoPlaceholder } from "./PhotoPlaceholder";

const aboutImages = [
  {
    alt: "The Blue Lake resort exterior",
  },
  {
    alt: "The Blue Lake resort at night",
  },
  {
    alt: "Lake and mountain view",
  },
];

export function AboutUs() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-white px-5 pt-[58px] pb-[65px] sm:px-8 lg:px-[52px]"
    >
      <div className="mx-auto max-w-[1370px]">
        {/* Header */}
        <div className="mb-[38px] flex items-start justify-between">
          <div>
            <h2
              id="about-title"
              className="font-serif text-[34px] leading-none text-navy-deep"
            >
              About Us
            </h2>

            <p className="mt-[15px] max-w-[480px] text-[14px] leading-[1.65] text-text-muted">
              Beyond Stays, We Create Memories.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-[6px]">
            <button
              type="button"
              aria-label="Previous image"
              className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#f1f2f2] text-[11px] text-text-muted"
            >
              ‹
            </button>

            <span className="px-[3px] text-[10px] text-text-muted">1/3</span>

            <button
              type="button"
              aria-label="Next image"
              className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#cfd3d4] bg-white text-[11px] text-navy-deep"
            >
              ›
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-3">
          {aboutImages.map((image) => (
            <div
              key={image.alt}
              className="overflow-hidden rounded-[8px] bg-white"
            >
              <PhotoPlaceholder alt={image.alt} ratio="1.55 / 1" />
            </div>
          ))}
        </div>

        {/* Content */}
        
        <div className="mt-[20px] space-y-[12px] text-[15px] leading-[1.55] text-text-muted">
            <p>
              A Serene Lakeside Escape in Igatpuri
            </p>
          <p>
            Nestled amidst the scenic beauty of Igatpuri, The Blue Lake Resort
            is a peaceful retreat designed for guests looking to relax,
            reconnect and create memorable moments. Surrounded by lush greenery
            and beautiful lake views, the resort offers comfortable stays, an
            infinity swimming pool, delicious dining, indoor and outdoor
            activities, and spacious spaces for families, friends and
            celebrations. Whether it’s a relaxing weekend getaway, a family
            holiday or a special occasion, The Blue Lake Resort brings together
            nature, comfort and warm hospitality for a refreshing escape from
            the everyday.
            
          </p>
        </div>
      </div>
    </section>
  );
}
