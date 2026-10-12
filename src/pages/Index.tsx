import heroImage from "@/assets/hero-bg.jpg";

import AnimatedBackground from "@/components/AnimatedBackground";
import Countdown from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import { CTF_PLATFORM_URL } from "@/lib/links";
import EventsMarquee from "@/components/EventsMarquee";
import FinalsTravel from "@/components/FinalsTravel";
import CategoriesSection from "@/components/CategoriesSection";
import QualsTicket from "@/components/QualsTicket";
import { ArrowRight, Calendar as CalendarIcon, Clock as ClockIcon, Shield, Globe } from "lucide-react";

const QUALS_TARGET = new Date('2026-10-17T09:00:00Z');
const QUALS_DURATION_HOURS = 36; // Oct 17, 09:00 UTC -> Oct 18, 21:00 UTC

const Index = () => {

  return (
    <div>
      {/* Hero */}
      <section id="hero" className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroImage} alt="Securinets CTF background" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
          <AnimatedBackground />
        </div>

        <div className="section relative z-10 flex min-h-[70vh] flex-col items-center justify-center pb-24 text-center">
          <h1 className="animate-enter font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight drop-shadow-lg">
            Securinets CTF<br />Quals 2026
          </h1>
          <p className="mx-auto mt-5 max-w-xl animate-enter text-base md:text-lg text-black dark:text-muted-foreground drop-shadow-sm">
            A 36-hour online jeopardy-style CTF organized by Securinets INSAT. Top teams qualify for the onsite finals in Tunisia.
          </p>

          <div className="mt-8 flex animate-enter flex-wrap items-center justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <a href={CTF_PLATFORM_URL}>
                Go to Competition Platform
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="mt-10 w-full max-w-md shrink-0 animate-enter">
            <Countdown
              targetDate={QUALS_TARGET}
              durationHours={QUALS_DURATION_HOURS}
              className="flex flex-col items-center"
            />
            <div className="mt-3 flex animate-enter flex-col items-center gap-1 text-sm text-muted-foreground drop-shadow-sm">
              <span className="flex items-center gap-2"><CalendarIcon className="h-4 w-4 text-primary" /><span>Oct 17, 09:00 UTC → Oct 18, 21:00 UTC</span></span>
              <span className="flex items-center gap-2"><ClockIcon className="h-4 w-4 text-primary" /><span>Online</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* separator */}
      <div className="container mx-auto px-4">
        <hr className="my-4 border-border/50" />
      </div>

      <QualsTicket />

      <FinalsTravel />

      <CategoriesSection />

      {/* About */}
      <section id="about" className="section-tight">
        <div className="border-t border-border pt-5">
          <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">About us</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Securinets is Tunisia's first cybersecurity association, founded in 2003, and this qualifier is its flagship competition: teams play online from anywhere, and the best of them are invited to fight for the title on our campus at INSAT.
          </p>
          <div className="mt-5 grid gap-4 md:gap-5">
            <div className="flex items-start gap-3"><Shield className="mt-1 h-5 w-5 shrink-0 text-primary" /><p>Challenges across web exploitation, pwn, reverse engineering, cryptography, forensics and OSINT, all written by our team.</p></div>
            <div className="flex items-start gap-3"><Globe className="mt-1 h-5 w-5 shrink-0 text-primary" /><p>Open to everyone. Students, professionals and first-timers all play the same board.</p></div>
            <div className="flex items-start gap-3"><img src="https://ctftime.org/favicon.png" alt="" className="mt-1 h-4 w-4 grayscale transition-all duration-300 hover:grayscale-0" loading="lazy" decoding="async" /> <p>Ranked on CTFtime, weight 85.12 last edition.</p></div>
          </div>
        </div>
      </section>

      {/* ===== Events marquee ===== */}
      <EventsMarquee />
    </div>
  );
};

export default Index;
