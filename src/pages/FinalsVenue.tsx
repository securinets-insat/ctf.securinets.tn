import { useLayoutEffect, useRef, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, Instagram, Play, Video } from "lucide-react";

// Finals venue media (INSAT, Tunis), hosted with the site (public/videos, public/images/finals-venue).
// One item fills the stage at a time; the arrows loop through them and the thumbnails jump to any of them.
type Credit = { name: string; href?: string };
type Media = {
  kind: "video" | "image";
  src: string;
  thumb: string;
  title: string;
  credit: Credit;
  poster?: string; // videos
  alt?: string; // photos
};

const INSAT_PRESS: Credit = { name: "@insat_press", href: "https://www.instagram.com/insat_press/" };
const THUMBS = "/images/finals-venue/thumbs";

const MEDIA: Media[] = [
  {
    kind: "video",
    src: "/videos/finals-venue.mp4",
    poster: "/videos/finals-venue-poster.jpg",
    thumb: `${THUMBS}/finals-venue-video.jpg`,
    title: "INSAT, Tunis",
    credit: { name: "Rayen Bouafif" },
  },
  {
    kind: "video",
    src: "/videos/miss-my-insat.mp4",
    poster: "/videos/miss-my-insat-poster.jpg",
    thumb: `${THUMBS}/miss-my-insat-video.jpg`,
    title: "Miss my INSAT",
    credit: { name: "@nour.reflects", href: "https://www.instagram.com/nour.reflects" },
  },
  {
    kind: "image",
    src: "/images/finals-venue/amphitheatre-talk.jpg",
    thumb: `${THUMBS}/amphitheatre-talk.jpg`,
    title: "The auditorium",
    alt: "A speaker on stage in front of a full auditorium",
    credit: INSAT_PRESS,
  },
  {
    kind: "image",
    src: "/images/finals-venue/amphitheatre-speaker.jpg",
    thumb: `${THUMBS}/amphitheatre-speaker.jpg`,
    title: "The auditorium",
    alt: "A speaker addressing the audience from the auditorium stage",
    credit: INSAT_PRESS,
  },
  {
    kind: "image",
    src: "/images/finals-venue/amphitheatre-audience.jpg",
    thumb: `${THUMBS}/amphitheatre-audience.jpg`,
    title: "The auditorium",
    alt: "The audience filling the auditorium's red seats",
    credit: INSAT_PRESS,
  },
  {
    kind: "image",
    src: "/images/finals-venue/amphitheatre-seats.jpg",
    thumb: `${THUMBS}/amphitheatre-seats.jpg`,
    title: "The auditorium",
    alt: "Rows of empty red seats in the auditorium",
    credit: INSAT_PRESS,
  },
];

const ARROW =
  "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_28px_-10px_hsl(var(--primary)/0.9)] transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-primary/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const TAG = "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm text-muted-foreground";

const CreditTag = ({ item }: { item: Media }) => {
  const { name, href } = item.credit;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${TAG} transition-colors hover:border-primary hover:text-foreground`}>
        <Instagram className="h-4 w-4" aria-hidden="true" />
        {name}
      </a>
    );
  }
  const Icon = item.kind === "video" ? Video : Camera;
  return (
    <span className={TAG}>
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">{item.kind === "video" ? "Video by" : "Photo by"} </span>
      {name}
    </span>
  );
};

const FinalsVenue = () => {
  const [index, setIndex] = useState(0);
  const slides = useRef<(HTMLDivElement | null)[]>([]);
  const from = useRef({ index: 0, dir: 1 });
  const current = MEDIA[index];

  const show = (to: number, dir: number) => {
    if (to === index) return;
    slides.current[index]?.querySelector("video")?.pause();
    from.current = { index, dir };
    setIndex(to);
  };
  const go = (dir: number) => show((index + dir + MEDIA.length) % MEDIA.length, dir);

  // Only the shown item can be focused or clicked. The new one slides in from the side
  // the visitor moved towards and pushes the old one out the other way.
  useLayoutEffect(() => {
    slides.current.forEach((el, i) => {
      if (el) el.inert = i !== index;
    });
    const { index: prev, dir } = from.current;
    if (prev === index || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const offset = (side: number) => `translateX(calc(${side * 100}% + ${side * 24}px))`;
    const timing = { duration: 520, easing: "cubic-bezier(0.65, 0, 0.35, 1)" };
    slides.current[index]?.animate([{ transform: offset(dir) }, { transform: "none" }], timing);
    slides.current[prev]?.animate(
      [
        { transform: "none", visibility: "visible" },
        { transform: offset(-dir), visibility: "visible" },
      ],
      timing
    );
  }, [index]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-14">
      {/* as wide as the page allows while the whole player still fits on screen */}
      <div className="mx-auto w-full max-w-[calc((100svh-21rem)*16/9)]">
        <h1 className="mb-6 font-display text-3xl font-semibold tracking-tight">Finals Venue</h1>

        <div role="region" aria-roledescription="carousel" aria-label="Finals venue videos and photos" className="grid overflow-x-clip">
          {MEDIA.map((m, i) => (
            <div
              key={m.src}
              ref={(el) => {
                slides.current[i] = el;
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${MEDIA.length}: ${m.title}`}
              className={`[grid-area:1/1] ${i === index ? "" : "invisible"}`}
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-[0_24px_48px_-24px_hsl(var(--primary)/0.6)]">
                {m.kind === "video" ? (
                  <video
                    className="block aspect-video h-auto w-full bg-black object-contain"
                    src={m.src}
                    poster={m.poster}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={m.title}
                  >
                    Your browser cannot play this video. <a href={m.src}>Download it</a> instead.
                  </video>
                ) : (
                  <img
                    className="block aspect-video h-auto w-full bg-black object-contain"
                    src={m.src}
                    alt={m.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
            <p className="font-display text-lg font-semibold tracking-tight">{current.title}</p>
            <CreditTag item={current} />
          </div>

          <div className="flex items-center gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous" className={ARROW}>
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <span aria-live="polite" className="min-w-[4rem] text-center font-mono text-base font-semibold tabular-nums text-foreground">
              <span className="text-primary">{index + 1}</span> / {MEDIA.length}
            </span>
            <button type="button" onClick={() => go(1)} aria-label="Next" className={ARROW}>
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* every item at a glance; the current one is outlined in red */}
        <div className="mt-5 grid max-w-xl gap-2" style={{ gridTemplateColumns: `repeat(${MEDIA.length}, minmax(0, 1fr))` }}>
          {MEDIA.map((m, i) => (
            <button
              key={m.thumb}
              type="button"
              onClick={() => show(i, i > index ? 1 : -1)}
              aria-label={`Show ${i + 1} of ${MEDIA.length}: ${m.title} (${m.kind})`}
              aria-current={i === index ? "true" : undefined}
              className={`relative overflow-hidden rounded-md border transition-[opacity,border-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                i === index ? "border-primary opacity-100" : "border-border opacity-60 hover:opacity-100"
              }`}
            >
              <img src={m.thumb} alt="" className="block aspect-video w-full object-cover" loading="lazy" decoding="async" />
              {m.kind === "video" && (
                <span aria-hidden="true" className="absolute inset-0 grid place-items-center">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-black/60 text-white">
                    <Play className="h-3 w-3 fill-current" />
                  </span>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalsVenue;
