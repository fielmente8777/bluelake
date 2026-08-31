import { rooms } from "../data/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { ArrowIcon, GuestsIcon, BedIcon, PinIcon } from "./icons";

export function RoomsSuites() {
  return (
    <section
      id="rooms"
      aria-labelledby="rooms-title"
      className="bg-[#f8f9f3] px-5 pt-[68px] pb-[58px] sm:px-8 lg:px-[52px]"
    >
      <div className="mx-auto grid max-w-[1178px] gap-[34px] lg:grid-cols-[274px_1fr] lg:items-start">
        {/* Left Content */}
        <div className="pt-[17px]">
          <p className="flex items-center gap-2 text-[9px] font-bold tracking-[0.16em] text-gold uppercase before:block before:h-px before:w-[20px] before:bg-gold">
            Stay in Comfort
          </p>

          <h2
            id="rooms-title"
            className="mt-[18px] font-serif text-[32px] leading-none text-navy-deep"
          >
            Rooms &amp; Suites
          </h2>

          <p className="mt-[23px] max-w-[245px] text-[11px] leading-[1.65] text-text-muted">
            Spacious, elegant and thoughtfully designed spaces for a relaxing
            stay.
          </p>

          <a
  href="#rooms"
  className="mt-[25px] inline-flex h-[41px] items-center bg-navy-deep px-[20px] text-[10px] font-bold tracking-[0.06em] !text-white uppercase"
>
  Explore Rooms
</a>
        </div>

        {/* Room Cards */}
        <ul className="grid grid-cols-1 gap-[14px] sm:grid-cols-3">
          {rooms.map((room) => (
            <li
              key={room.name}
              className="flex min-w-0 flex-col overflow-hidden rounded-[8px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            >
              <div className="overflow-hidden">
                <PhotoPlaceholder
                  alt={room.alt}
                  ratio="1.9 / 1"
                />
              </div>

              <div className="flex flex-1 flex-col px-[19px] pt-[18px] pb-[20px]">
                <h3 className="text-[12px] font-bold tracking-[0.04em] text-navy-deep uppercase">
                  {room.name}
                </h3>

                <div className="mt-[14px] flex flex-wrap items-center gap-x-[13px] gap-y-2 text-[9.5px] text-text-muted">
                  <span className="inline-flex items-center gap-[4px] whitespace-nowrap">
                    <GuestsIcon
                      aria-hidden="true"
                      className="h-[12px] w-[12px] shrink-0 text-navy-deep"
                    />
                    {room.guests}
                  </span>

                  <span className="inline-flex items-center gap-[4px] whitespace-nowrap">
                    <BedIcon
                      aria-hidden="true"
                      className="h-[12px] w-[12px] shrink-0 text-navy-deep"
                    />
                    {room.beds}
                  </span>

                  <span className="inline-flex items-center gap-[4px] whitespace-nowrap">
                    <PinIcon
                      aria-hidden="true"
                      className="h-[12px] w-[12px] shrink-0 text-navy-deep"
                    />
                    {room.view}
                  </span>
                </div>

                <p className="mt-[17px] text-[10.5px] leading-[1.55] text-text-muted">
                  {room.description}
                </p>

                <a
                  href={`#${room.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group mt-auto pt-[17px] inline-flex items-center gap-[5px] text-[10px] font-bold tracking-[0.02em] text-navy-deep"
                >
                  View Details
                  <ArrowIcon
                    aria-hidden="true"
                    className="h-[12px] w-[12px] transition-transform group-hover:translate-x-[3px]"
                  />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}