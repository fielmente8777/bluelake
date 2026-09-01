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

        {/* HEADER */}
        <div className="mb-[38px] flex flex-col items-center text-center">
          <p className="m-0 flex items-center justify-center gap-3 font-sans text-[24px] font-bold tracking-[0.15em] text-gold uppercase">
            <span className="h-px w-[24px]  bg-gold" />
            About Us
            <span className="h-px w-[24px] bg-gold" />
          </p>

          <h2
            id="about-title"
            className="mt-[40px] max-w-[900px] font-sans text-[40px] leading-[1.15] font-semibold text-navy-deep"
          >
            A Serene Lakeside Escape in Igatpuri
          </h2>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-3">
          {aboutImages.map((item) => (
            <div
              key={item.image}
              className="h-[280px] overflow-hidden rounded-[8px] bg-white"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="mt-[20px] font-sans leading-[1.7] text-text-muted">
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