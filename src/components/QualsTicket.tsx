import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import coverImage from "@/assets/hero-bg.jpg";
import { Star, Clock, ArrowRight, MapPin, Users } from "lucide-react";
import { CTF_PLATFORM_URL } from "@/lib/links";

const QUAL = {
  start: new Date("2026-10-17T09:00:00Z"), // Sat, Oct 17, 09:00 UTC
  end: new Date("2026-10-18T21:00:00Z"), // Sun, Oct 18, 21:00 UTC
};

const fmt = (d: Date) =>
  d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });

const day = (d: Date) => d.toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" });

const secondsLeft = () => Math.max(0, Math.floor((QUAL.start.getTime() - Date.now()) / 1000));

const ReadyIn = () => {
  const [cur, setCur] = useState(secondsLeft);

  useEffect(() => {
    const id = setInterval(() => setCur(secondsLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: Math.floor(cur / 86400) },
    { label: "Hrs", value: Math.floor((cur % 86400) / 3600) },
    { label: "Min", value: Math.floor((cur % 3600) / 60) },
    { label: "Sec", value: cur % 60 },
  ];

  return (
    <div className="mt-5 flex flex-wrap items-end gap-x-5 gap-y-2">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-end gap-4 md:gap-5">
          {i > 0 && (
            <span aria-hidden className="mb-6 hidden font-display text-3xl font-bold text-primary/40 sm:block">
              :
            </span>
          )}
          <div>
            <div
              className={`font-display text-3xl font-bold tabular-nums leading-none tracking-tight md:text-4xl ${
                u.label === "Sec" ? "text-primary" : "text-foreground"
              }`}
            >
              <span key={u.value} className="inline-block animate-tick">
                {u.value.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{u.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// The Quals 2026 event card (dates, CTFtime weight, countdown, link to the platform), shown on the home page.
const QualsTicket = () => {
  const [interested, setInterested] = useState(false);

  return (
    <section id="quals" className="section-tight">
      <Reveal>
        <article className="group grid overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-all duration-300 ease-swift hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.35)] sm:grid-cols-[300px_1fr]">
          {/* Cover */}
          <div className="relative h-44 overflow-hidden sm:h-auto">
            <img
              src={coverImage}
              alt="Securinets CTF Quals 2026"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-card/20 sm:to-card/95" />
          </div>

          {/* Body */}
          <div className="relative flex flex-col bg-gradient-to-br from-card via-card to-primary/5 p-5 sm:p-6">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-primary">
                  {day(QUAL.start)} – {day(QUAL.end)}
                </p>
                <h2 className="mt-1.5 font-display text-xl font-semibold leading-tight tracking-tight">
                  Securinets CTF Quals 2026
                </h2>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
                <span className="text-xs font-semibold text-primary">85.12</span>
                <span className="text-[10px] font-medium text-muted-foreground">CTFtime</span>
              </div>
            </div>

            <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                <span>Online — {fmt(QUAL.start)} → {fmt(QUAL.end)} UTC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                <span>36 hours non-stop</span>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Top teams advance to the onsite finals in Tunisia.
            </p>

            <ReadyIn />

            <div className="mt-4 flex flex-wrap items-center gap-2.5 border-t border-primary/10 pt-4">
              <Button
                variant={interested ? "secondary" : "outline"}
                size="sm"
                aria-pressed={interested}
                onClick={() => setInterested((v) => !v)}
                className="flex items-center gap-2"
              >
                <Users className="h-4 w-4" aria-hidden="true" />
                {interested ? "Interested ✓" : "Interested"}
              </Button>
              <div className="ml-auto">
                <Button asChild variant="hero" size="sm">
                  <a href={CTF_PLATFORM_URL} className="flex items-center gap-2">
                    Play CTF <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
};

export default QualsTicket;
