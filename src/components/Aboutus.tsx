const aboutImages = [
  {
    image: "/images/DJI_0856_11zon.jpg",
    alt: "The Blue Lake resort aerial view",
  },
  {
    image: "/images/DJI_0903_11zon.jpg",
    alt: "The Blue Lake resort at night",
  },
  {
    image: "/images/DJI_0897_11zon.jpg",
    alt: "Lake and mountain view",
  },
];

export function AboutUs() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="px-5 pt-[58px] pb-[65px] sm:px-8 lg:px-[52px]"
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

            <p className="mt-[15px] max-w-[480px] text-text-muted">
              A Serene Lakeside Escape in Igatpuri
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-3">
          {aboutImages.map((image) => (
            <div
              key={image.image}
              className="h-[280px] overflow-hidden rounded-[8px] bg-white"
            >
              <img
                src={image.image}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="mt-[20px]  font-sans text-text-muted">
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