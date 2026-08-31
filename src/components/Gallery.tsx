import { galleryImages } from "../data/content";

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-off-white px-5 pt-[58px] pb-[65px] sm:px-8 lg:px-[52px]"
    >
      <div className="mx-auto max-w-[1370px]">

        {/* Header */}
        <div className="mb-[38px] flex flex-col items-center text-center">
          <p className="flex items-center gap-2 font-bold tracking-[0.16em] text-gold uppercase">
            <span className="block h-px w-[20px] bg-gold" />
            Gallery
            <span className="block h-px w-[20px] bg-gold" />
          </p>

          <h2
            id="gallery-title"
            className="mt-[12px] font-display text-[34px] leading-none font-medium text-navy-deep"
          >
            A Glimpse of Paradise
          </h2>

          <p className="mt-[15px] max-w-[480px] text-text-muted">
            See the beauty, feel the calm.
          </p>
        </div>

        {/* Gallery Images */}
        <ul className="grid grid-cols-1 gap-[9px] sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((img) => (
            <li
              key={img.image}
              className="h-[216px] overflow-hidden rounded-[7px] bg-white"
            >
              <img
                src={img.image}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}