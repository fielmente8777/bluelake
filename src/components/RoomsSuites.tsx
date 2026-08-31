import { rooms } from "../data/content";
import { ArrowIcon, GuestsIcon, BedIcon, PinIcon } from "./icons";

export function RoomsSuites() {
  return (
    <section
      id="rooms"
      aria-labelledby="rooms-title"
      className="bg-[#f8f9f3] px-5 pt-[58px] pb-[65px] sm:px-8 lg:px-[52px]"
    >
      <div className="mx-auto max-w-[1370px]">

        {/* Centered Header */}
        <div className="mb-[38px] flex flex-col items-center text-center">
          <p className="flex items-center gap-2 text-[9px] font-bold tracking-[0.16em] text-gold uppercase">
            <span className="block h-px w-[20px] bg-gold" />
            Stay in Comfort
            <span className="block h-px w-[20px] bg-gold" />
          </p>

          <h2
            id="rooms-title"
            className="mt-[12px] font-display text-[34px] leading-none text-navy-deep"
          >
            Rooms &amp; Suites
          </h2>

          <p className="mt-[15px] max-w-[480px] text-[11px] leading-[1.65] text-text-muted">
            Spacious, elegant and thoughtfully designed spaces for a relaxing
            stay.
          </p>

          <a
            href="#rooms"
            className="mt-[20px] inline-flex h-[41px] items-center bg-navy-deep px-[22px] text-[10px] font-bold tracking-[0.06em] !text-white uppercase"
          >
            Explore Rooms
          </a>
        </div>

        {/* Room Cards */}
        <ul className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
          {rooms.slice(0, 4).map((room) => (
            <li
              key={room.name}
              className="flex min-w-0 flex-col overflow-hidden rounded-[8px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            >
              {/* Room Image */}
              <div className="aspect-[1.55/1] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col px-[19px] pt-[18px] pb-[20px]">
                <h3 className="text-[12px] font-bold tracking-[0.04em] text-navy-deep uppercase">
                  {room.name}
                </h3>

                <div className="mt-[14px] flex flex-wrap items-center gap-x-[10px] gap-y-2 text-[9.5px] text-text-muted">
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

                <p className="mt-[16px] text-[10.5px] leading-[1.55] text-text-muted">
                  {room.description}
                </p>

                <a
                  href={`#${room.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="group mt-auto inline-flex items-center gap-[5px] pt-[17px] text-[10px] font-bold tracking-[0.02em] text-navy-deep"
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