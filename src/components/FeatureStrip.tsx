import { featureItems } from "../data/content";
import {
  DiningIcon,
  EventsIcon,
  ExperiencesIcon,
  ExpertIcon,
  LakesideIcon,
  PremiumStayIcon,
} from "./icons";

const iconMap = {
  lakeside: LakesideIcon,
  premium: PremiumStayIcon,
  dining: DiningIcon,
  experiences: ExperiencesIcon,
  events: EventsIcon,
  expert: ExpertIcon,
};

export function FeatureStrip() {
  return (
    <section
      id="about"
      aria-labelledby="feature-strip-title"
      className=" px-5 pt-[50px] pb-[65px] text-center sm:px-8 lg:px-[52px] flex-col flex gap-2"
    >
      {/* TOP LABEL */}
      <p className="m-0 flex items-center justify-center gap-3 font-sans text font-bold tracking-[0.15em] text-gold uppercase">
        <span className="h-px w-[24px] bg-gold" />
        The Blue Lake Experience
        <span className="h-px w-[24px] bg-gold" />
      </p>

      {/* HEADING */}
      <h2
        id="feature-strip-title"
        className="mt-[15px] font-sans text-[35px] leading-[1.15] font-semibold text-navy-deep"
      >
        Nature. Comfort. Connection.
      </h2>

      {/* SUBTITLE */}
      <p className="mt-[10px] font-sans text-[14px] leading-[1.5] text-text-muted">
        Everything you need for a perfect escape.
      </p>

      {/* FEATURES */}
      <ul className="mt-[95px] grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 ">
        {featureItems.map((item, i) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <li
              key={item.title}
              className={`
                relative
                flex
                min-h-[190px]
                flex-col
                items-center
                px-[18px]
                text-center

                ${
                  i !== featureItems.length - 1
                    ? "border-b border-[rgba(11,37,69,0.10)] sm:border-b-0 sm:border-r"
                    : ""
                }
              `}
            >
              {/* ICON */}
              <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center">
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    className="h-[52px] w-[52px] text-navy-deep"
                  />
                )}
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-[14px]
                  min-h-[28px]
                  w-full
                  font-sans
                  text-[16px]
                  font-bold
                  tracking-[0.06em]
                  text-navy-deep
                  uppercase
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-[8px]
                  max-w-[175px]
                  font-sans
                  text-[13px]
                  text-text-muted
                "
              >
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}