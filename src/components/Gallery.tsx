import { galleryImages } from "../data/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-off-white px-5 pt-[58px] pb-[65px] sm:px-8 lg:px-[52px]"
    >
      <div className="mx-auto max-w-[1370px]">

        {/* Centered Header */}
        <div className="mb-[38px] flex flex-col items-center text-center">
          <p className="flex items-center gap-2 text-[9px] font-bold tracking-[0.16em] text-gold uppercase">
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

          <p className="mt-[15px] max-w-[480px] text-[11px] leading-[1.65] text-text-muted">
            See the beauty, feel the calm.
          </p>

          <a
            href="#gallery-full"
            className="mt-[20px] inline-flex h-[41px] min-w-[176px] items-center justify-center bg-navy-deep px-[22px] text-[10px] font-bold tracking-[0.06em] !text-white uppercase"
          >
            View Full Gallery
          </a>
        </div>

        {/* Gallery Images */}
        <ul className="grid grid-cols-4 gap-[9px]">
          {galleryImages.map((img) => (
            <li key={img.alt} className="h-[216px] overflow-hidden rounded-[7px] bg-white">
              <PhotoPlaceholder alt={img.alt} ratio="3 / 4" />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}