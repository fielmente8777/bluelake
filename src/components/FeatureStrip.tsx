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
      className=" text-center sm:px-8 lg:px-[52px] flex-col flex gap-2"
    >
      {/* TOP LABEL */}
      <p className="m-0 flex items-center justify-center gap-3 font-sans text-[24px] font-bold tracking-[0.15em] text-gold uppercase">
        <span className="h-px w-[24px] bg-gold" />
        The Blue Lake Experience
        <span className="h-px w-[24px] bg-gold" />
      </p>

      {/* HEADING */}
      <h2
        id="feature-strip-title"
        className="mt-[15px] font-sans text-[40px] leading-[1.15] font-semibold text-navy-deep"
      >
        Nature. Comfort. Connection.
      </h2>

      {/* SUBTITLE */}
      <p className="mt-[10px] font-sans text-text-muted">
        Everything you need for a perfect escape.
      </p>
      <br></br>
      {/* FEATURES */}
      {/* FEATURES */}
<ul className="mt-[55px] grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
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
          justify-start
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
        <div className="flex h-[62px] w-full items-center justify-center">
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
            leading-[1.3]
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
            w-full
            max-w-[220px]
            font-sans
            text-[13px]
            leading-[1.55]
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