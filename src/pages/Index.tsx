import heroImage from "@/assets/hero-securinets-ctf.jpg";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import team1 from "@/assets/bahae.jpg";
import team2 from "@/assets/jihed.jpg";
import team3 from "@/assets/karrab.jpg";
import team4 from "@/assets/masmoudi.jpg";
import team5 from "@/assets/wassim.jpg";
import team6 from "@/assets/abid.jpg";
import team7 from "@/assets/zied.jpg";
import team8 from "@/assets/limam.jpg";
import team9 from "@/assets/ad3m.jpg";
import team10 from "@/assets/charfeddine.jpg";

import AnimatedBackground from "@/components/AnimatedBackground";
import Countdown from "@/components/Countdown";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, MapPin, Shield, Cpu, Bug, Lock, Globe, ArrowUp, ExternalLink, Images, Sparkles, Twitter, Github, Linkedin, Facebook, Instagram, Search } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle.tsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Consistent Discord icon component (fill-current for proper theming)
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const Index = () => {
  const [showTop, setShowTop] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const googleCalendarLink =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Securinets+CTF+Quals+2025&dates=20251004T130000Z/20251005T210000Z&ctz=Africa/Tunis&details=Qualifiers+online%2C+finals+onsite.+More%3A+https%3A%2F%2Fctftime.org%2Fevent%2F2884&location=Online";
  const ctftimeLink = "https://ctftime.org/event/2884";
  const discordInvite = "https://discord.gg/Xqj6WnNmbQ";
  const discordServerId = "558606114565128192";

  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <div className="min-h-screen bg-background/60 text-foreground">
      {/* Skip link */}
      <a href="#main-content" className="skip-to-content">Skip to content</a>

      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#hero" className="flex items-center gap-3 hover-scale">
            <img src="https://media.securinets.tn/logo.svg" alt="Securinets INSAT" className="h-8 w-8" loading="eager" decoding="async" />
            <span className="font-display text-lg font-semibold">Securinets INSAT</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#sponsors" className="story-link">Sponsors</a>
            <a href="#about" className="story-link">About</a>
            <a href="#schedule" className="story-link">Schedule</a>
            <a href="#tracks" className="story-link">Categories</a>
            <a href="#location" className="story-link">Location</a>
            <a href="#gallery" className="story-link">Gallery</a>
            <a href="#team" className="story-link">Team</a>
            <a href="#contact" className="story-link">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Discord button with icon */}
            <Button asChild variant="discord" className="hidden sm:inline-flex">
              <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <DiscordIcon className="h-4 w-4" />
                Discord
              </a>
            </Button>
            {/* CTFtime with favicon icon */}
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <a href={ctftimeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src="https://ctftime.org/favicon.png" alt="" className="h-4 w-4" loading="lazy" decoding="async" />
                CTFtime
              </a>
            </Button>
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="md:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-semibold">Menu</span>
                  <ThemeToggle />
                </div>
                <div className="mt-6 grid gap-3 text-base">
                  <a href="#sponsors" className="story-link">Sponsors</a>
                  <a href="#about" className="story-link">About</a>
                  <a href="#schedule" className="story-link">Schedule</a>
                  <a href="#tracks" className="story-link">Categories</a>
                  <a href="#location" className="story-link">Location</a>
                  <a href="#gallery" className="story-link">Gallery</a>
                  <a href="#team" className="story-link">Team</a>
                  <a href="#contact" className="story-link">Contact</a>
                </div>
                <div className="mt-6 flex gap-3">
                  <Button asChild variant="discord" className="flex-1">
                    <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <DiscordIcon className="h-4 w-4" />
                      Discord
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={ctftimeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <img src="https://ctftime.org/favicon.png" alt="" className="h-4 w-4" loading="lazy" decoding="async" /> CTFtime
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* Hero */}
        <section id="hero" className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <img src={heroImage} alt="Futuristic Securinets CTF background" className="w-full h-[60vh] md:h-[70vh] object-cover opacity-80" loading="eager" fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-black/35 dark:bg-black/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background/95" />
            <AnimatedBackground />
          </div>
          <div className="section relative z-10 min-h-[56vh] flex items-center">
            <div className="grid w-full items-center gap-8 md:grid-cols-2">
              {/* Left: Headline and CTAs */}
              <div className="max-w-2xl animate-enter">
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
                  Securinets CTF<br></br>Quals 2025
                </h1>
                <p className="mt-4 text-lg md:text-xl text-black dark:text-muted-foreground max-w-2xl drop-shadow-sm">
                  A thrilling, global cybersecurity competition spanning diverse challenge categories. Compete, learn, and push your skills to the next level.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="discord" asChild>
                    <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <DiscordIcon className="h-4 w-4" />
                      Join Discord
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href={ctftimeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <img src="https://ctftime.org/favicon.png" alt="" className="h-4 w-4" loading="lazy" decoding="async" /> Register on CTFtime
                    </a>
                  </Button>
                </div>
                <div className="mt-5 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><CalendarIcon className="h-4 w-4 text-primary" /><span>Oct 4–5, 2025 • CET</span></div>
                </div>
              </div>

              {/* Right: Countdown */}
              <div className="animate-enter md:justify-self-end w-full md:max-w-md">
                <Countdown
                  targetDate={new Date('2025-10-04T13:00:00Z')}
                  title="Qualifiers Start In"
                  subtitle="October 4, 2025 • 14:00 CET"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors: Gold & Silver */}
        <section id="sponsors" className="section-tight">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-display font-semibold">Sponsors</h2>
            <p className="text-muted-foreground mt-2">Support the next generation of security talent. Partner with Securinets.</p>
          </div>

          <div className="mb-5">
            <h3 className="text-xl font-semibold mb-3">Gold Sponsors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-[1px] rounded-md bg-gradient-to-r from-amber-400/50 via-yellow-500/40 to-amber-400/50">
                  <div className="h-20 md:h-24 rounded-[6px] border border-border bg-card/60 flex items-center justify-center text-muted-foreground hover-scale">
                    Sponsor us
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Silver Sponsors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="p-[1px] rounded-md bg-gradient-to-r from-zinc-300/60 via-zinc-400/40 to-zinc-300/60 dark:from-zinc-600/50 dark:via-zinc-500/40 dark:to-zinc-600/50">
                  <div className="h-16 md:h-20 rounded-[6px] border border-border bg-card/60 flex items-center justify-center text-muted-foreground hover-scale">
                    Sponsor us
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center flex flex-col items-center gap-3">
            <Button variant="hero" asChild>
              <a href="mailto:securinets@insat.ucar.tn?subject=Sponsorship%20Inquiry%20-%20Securinets%20CTF%20Quals%202025">Become a Sponsor</a>
            </Button>
          </div>
        </section>

        {/* separator */}
        <div className="container mx-auto px-4">
          <hr className="my-4 border-border/50" />
        </div>

        {/* About */}
        <section id="about" className="section">
          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="font-display">About the Event</CardTitle>
              <CardDescription>
                Organized by Securinets INSAT, the Qualifiers run online; the Finals are onsite. Join students and professionals for a challenging and educational experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:gap-5">
              <div className="flex items-start gap-3"><Shield className="mt-1 h-5 w-5 text-primary" /><p>Diverse categories: web exploitation, reverse engineering, binary exploitation, cryptography, forensics, and more.</p></div>
              <div className="flex items-start gap-3"><Globe className="mt-1 h-5 w-5 text-primary" /><p>Open to global teams. Learn, compete, and connect with the community.</p></div>
              <div className="flex items-start gap-3"><img src="https://ctftime.org/favicon.png" alt="" className="h-4 w-4" loading="lazy" decoding="async" /> <p>CTFtime weight: 70.50. Recognition for top teams.</p></div>
            </CardContent>
          </Card>
        </section>

        {/* CTFtime with logo badge */}
        <section className="section-tight">
          <Card>
            <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-md bg-white ring-1 ring-border grid place-items-center overflow-hidden">
                  <img src="https://ctftime.org/favicon.png" alt="" className="h-6 w-6" loading="lazy" decoding="async" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">CTFtime</div>
                  <h2 className="text-2xl font-display font-semibold">Event page & weight</h2>
                  <p className="text-muted-foreground mt-1">Official CTFtime page with standings. Weight: 70.50.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" asChild>
                  <a href={ctftimeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <img src="https://ctftime.org/favicon.png" alt="" className="h-4 w-4" loading="lazy" decoding="async" />
                    Visit CTFtime <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="discord" asChild>
                  <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <DiscordIcon className="h-4 w-4" />
                    Join Discord
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* separator */}
        <div className="container mx-auto px-4">
          <hr className="my-4 border-border/50" />
        </div>

        {/* Schedule & Calendar */}
        <section id="schedule" className="section">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-semibold flex items-center justify-center gap-2">
              <CalendarIcon className="h-6 w-6 text-primary" /> Schedule & Important Dates
            </h2>
            <p className="text-muted-foreground mt-2">Mark your calendar for this exciting cybersecurity competition</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Schedule Card */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  Competition Schedule
                </CardTitle>
                <CardDescription>All times in Central European Time (CET)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Qualifiers */}
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Qualifiers (Online)</h3>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">Online</Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>Saturday, October 4, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 flex items-center justify-center">🕐</span>
                      <span>14:00 CET (32 hours)</span>
                    </div>
                  </div>
                </div>

                {/* Finals */}
                <div className="border-l-4 border-accent pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Finals (Onsite)</h3>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">Onsite</Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>Date TBA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 flex items-center justify-center">🕐</span>
                      <span>Time TBA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>INSAT, Tunis, Tunisia</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button variant="hero" asChild>
                    <a href={googleCalendarLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      Add to Calendar
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={ctftimeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <img src="https://ctftime.org/favicon.png" alt="" className="h-4 w-4" loading="lazy" decoding="async" />
                      View on CTFtime
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Visual Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Event Calendar</CardTitle>
                <CardDescription>October 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="range"
                  defaultMonth={new Date(2025, 9, 1)}
                  selected={{ from: new Date(2025, 9, 4), to: new Date(2025, 9, 5) }}
                  className="rounded-md border"
                />
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Competition Days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section id="tracks" className="section">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-display font-semibold">Categories</h2>
            <p className="text-muted-foreground mt-2">From beginner-friendly to advanced — something for everyone.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5 text-primary" /> Web</CardTitle>
                <CardDescription>XSS, SQLi, SSRF, deserialization, sandbox escapes.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bug className="h-5 w-5 text-primary" /> Pwn</CardTitle>
                <CardDescription>Stack/heap, ROP, format strings, UAF.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Cpu className="h-5 w-5 text-primary" /> Reverse</CardTitle>
                <CardDescription>Native/bytecode, unpacking, patching, deobfuscation.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Lock className="h-5 w-5 text-primary" /> Crypto</CardTitle>
                <CardDescription>Modern/classic, RSA/ECC, attacks & implementations.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Search className="h-5 w-5 text-primary" /> Forensics</CardTitle>
                <CardDescription>PCAP, memory, logs, stego, artifact analysis.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> OSINT/Misc</CardTitle>
                <CardDescription>Open-source intel, scripting, fun curveballs.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Location & Community */}
        <section id="location" className="section">
          <div className="grid gap-6">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Location</CardTitle>
                <CardDescription>Qualifiers are online. Organizer HQ: INSAT, Tunis. Finals onsite.</CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="rounded-lg overflow-hidden ring-1 ring-border shadow-glow">
                  <iframe
                    title="INSAT on Google Maps"
                    src="https://www.google.com/maps?q=INSAT%20Tunis&output=embed"
                    className="w-full h-64"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex gap-3">
                  <Button variant="secondary" asChild>
                    <a href="https://www.google.com/maps/search/?api=1&query=INSAT+Tunis" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5 text-primary" /> Community</CardTitle>
                <CardDescription>Discord server widget.</CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="rounded-lg overflow-hidden ring-1 ring-border">
                  <iframe
                    title="Discord Widget"
                    src={`https://discord.com/widget?id=${discordServerId}&theme=dark`}
                    className="w-full h-64"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Gallery with lightbox */}
        <section id="gallery" className="section">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-display font-semibold flex items-center justify-center gap-2"><Images className="h-6 w-6 text-primary" /> Gallery</h2>
            <p className="text-muted-foreground mt-2">Highlights from past Securinets events and CTFs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button
              onClick={() => setLightbox({ src: gallery1, title: "Securiday XVII 1st Place Winners" })}
              className="group relative overflow-hidden rounded-lg ring-1 ring-border w-full"
            >
              <img src={gallery1} alt="Securiday XVII 1st Place Winners" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center rounded-md bg-background/80 px-2 py-1 text-xs ring-1 ring-border">
                  Securiday XVII 1st Place Winners
                </div>
              </div>
            </button>
            <button
              onClick={() => setLightbox({ src: gallery2, title: "Darkest Hour CTF 2024" })}
              className="group relative overflow-hidden rounded-lg ring-1 ring-border w-full"
            >
              <img src={gallery2} alt="Darkest Hour CTF 2024" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center rounded-md bg-background/80 px-2 py-1 text-xs ring-1 ring-border">
                  Darkest Hour CTF 2024
                </div>
              </div>
            </button>
            <button
              onClick={() => setLightbox({ src: gallery3, title: "Securiday 2023" })}
              className="group relative overflow-hidden rounded-lg ring-1 ring-border w-full"
            >
              <img src={gallery3} alt="Securiday 2023" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center rounded-md bg-background/80 px-2 py-1 text-xs ring-1 ring-border">
                  Securiday 2023
                </div>
              </div>
            </button>
            <button
              onClick={() => setLightbox({ src: gallery4, title: "Mini CTF 2022" })}
              className="group relative overflow-hidden rounded-lg ring-1 ring-border w-full"
            >
              <img src={gallery4} alt="Mini CTF 2022" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center rounded-md bg-background/80 px-2 py-1 text-xs ring-1 ring-border">
                  Mini CTF 2022
                </div>
              </div>
            </button>
            <button
              onClick={() => setLightbox({ src: gallery5, title: "Darkest Hour CTF 2024" })}
              className="group relative overflow-hidden rounded-lg ring-1 ring-border w-full"
            >
              <img src={gallery5} alt="Darkest Hour CTF 2024" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center rounded-md bg-background/80 px-2 py-1 text-xs ring-1 ring-border">
                  Darkest Hour CTF 2024
                </div>
              </div>
            </button>
            <button
              onClick={() => setLightbox({ src: gallery6, title: "Pwn Race 2023" })}
              className="group relative overflow-hidden rounded-lg ring-1 ring-border w-full"
            >
              <img src={gallery6} alt="Pwn Race 2023" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center rounded-md bg-background/80 px-2 py-1 text-xs ring-1 ring-border">
                  Pwn Race 2023
                </div>
              </div>
            </button>
          </div>

          <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{lightbox?.title}</DialogTitle>
              </DialogHeader>
              {lightbox && (
                <img src={lightbox.src} alt={lightbox.title} className="w-full h-auto rounded-md" />
              )}
            </DialogContent>
          </Dialog>
        </section>

        {/* Technical Team */}
        <section id="team" className="section">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-display font-semibold">Technical Team</h2>
            <p className="text-muted-foreground mt-2">Meet the minds crafting challenges and ensuring a smooth experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            <Card className="overflow-hidden transition-transform duration-300 hover:scale-[1.015]">
              <div className="aspect-square overflow-hidden">
                <img src={team1} alt="Bahae Bahrini" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Bahae Bahrini</CardTitle>
                <CardDescription>Binary Exploitation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <a href="https://buddurid.me" aria-label="Bahae Bahrini website" className="story-link"><Globe className="h-4 w-4" /></a>
                  <a href="https://github.com/buddurid" aria-label="Bahae Bahrini on GitHub" className="story-link"><Github className="h-4 w-4" /></a>
                  <a href="https://www.linkedin.com/in/bahae-bahrini/" aria-label="Bahae Bahrini on LinkedIn" className="story-link"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform duration-300 hover:scale-[1.015]">
              <div className="aspect-square overflow-hidden">
                <img src={team2} alt="Jihed Kdiss" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Jihed Kdiss</CardTitle>
                <CardDescription>Reverse Engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <a href="https://jihedkdiss.tn/" aria-label="Jihed Kdiss website" className="story-link"><Globe className="h-4 w-4" /></a>
                  <a href="https://x.com/0xjio_" aria-label="Jihed Kdiss on Twitter/X" className="story-link"><Twitter className="h-4 w-4" /></a>
                  <a href="https://github.com/jihedkdiss" aria-label="Jihed Kdiss on GitHub" className="story-link"><Github className="h-4 w-4" /></a>
                  <a href="https://linkedin.com/in/jihedkdiss" aria-label="Jihed Kdiss on LinkedIn" className="story-link"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform duration-300 hover:scale-[1.015]">
              <div className="aspect-square overflow-hidden">
                <img src={team3} alt="Mohamed Karrab" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Mohamed Karrab</CardTitle>
                <CardDescription>Web Exploitation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <a href="https://karrab7.com/" aria-label="Mohamed Karrab website" className="story-link"><Globe className="h-4 w-4" /></a>
                  <a href="https://x.com/_karrab" aria-label="Mohamed Karrab on Twitter/X" className="story-link"><Twitter className="h-4 w-4" /></a>
                  <a href="https://github.com/MohamedKarrab" aria-label="Mohamed Karrab on GitHub" className="story-link"><Github className="h-4 w-4" /></a>
                  <a href="https://www.linkedin.com/in/mohamedkarrab/" aria-label="Mohamed Karrab on LinkedIn" className="story-link"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform duration-300 hover:scale-[1.015]">
              <div className="aspect-square overflow-hidden">
                <img src={team5} alt="Wassim Jhinaoui" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Wassim Jhinaoui</CardTitle>
                <CardDescription>Web Exploitation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/wassim-jhinaoui-100671289/" aria-label="Wassim Jhinaoui on LinkedIn" className="story-link"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform duration-300 hover:scale-[1.015]">
              <div className="aspect-square overflow-hidden">
                <img src={team4} alt="Mohamed Masmoudi" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Mohamed Masmoudi</CardTitle>
                <CardDescription>Digital Forensics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <a href="https://enigma522.online/" aria-label="Mohamed Masmoudi website" className="story-link"><Globe className="h-4 w-4" /></a>
                  <a href="https://x.com/enigma5226" aria-label="Mohamed Masmoudi on Twitter/X" className="story-link"><Twitter className="h-4 w-4" /></a>
                  <a href="https://github.com/enigma522" aria-label="Mohamed Masmoudi on GitHub" className="story-link"><Github className="h-4 w-4" /></a>
                  <a href="https://www.linkedin.com/in/mohamed-masmoudi-enigma522/" aria-label="Mohamed Masmoudi on LinkedIn" className="story-link"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform duration-300 hover:scale-[1.015]">
              <div className="aspect-square overflow-hidden">
                <img src={team6} alt="Youssef Abid" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Youssef Abid</CardTitle>
                <CardDescription>Web Exploitation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/youssef-abid-55a250295/" aria-label="Youssef Abid on LinkedIn" className="story-link"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform duration-300 hover:scale-[1.015]">
              <div className="aspect-square overflow-hidden">
                <img src={team7} alt="Zied Abrougui" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Zied Abrougui</CardTitle>
                <CardDescription>Open Source Intelligence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/zied-abrougui/" aria-label="Zied Abrougui on LinkedIn" className="story-link"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform duration-300 hover:scale-[1.015]">
              <div className="aspect-square overflow-hidden">
                <img src={team8} alt="Ahmed Limam" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Ahmed Limam</CardTitle>
                <CardDescription>Digital Forensics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/ahmed-limam-a58561301/" aria-label="Ahmed Limam on LinkedIn" className="story-link"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform duration-300 hover:scale-[1.015]">
              <div className="aspect-square overflow-hidden">
                <img src={team10} alt="Youssef Charfeddine" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Youssef Charfeddine</CardTitle>
                <CardDescription>Digital Forensics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <a href="https://portefolio-v2.vercel.app/" aria-label="Youssef Charfeddine website" className="story-link"><Globe className="h-4 w-4" /></a>
                  <a href="https://github.com/youssefnoob003" aria-label="Youssef Charfeddine on GitHub" className="story-link"><Github className="h-4 w-4" /></a>
                  <a href="https://www.linkedin.com/in/youssef-charfeddine/" aria-label="Youssef Charfeddine on LinkedIn" className="story-link"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform duration-300 hover:scale-[1.015]">
              <div className="aspect-square overflow-hidden">
                <img src={team9} alt="Adem Marzouki" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Adem Marzouki</CardTitle>
                <CardDescription>Reverse Engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <a href="https://medium.com/@ad3mx0" aria-label="Adem Marzouki website" className="story-link"><Globe className="h-4 w-4" /></a>
                  <a href="https://www.linkedin.com/in/-0xad3m-/" aria-label="Adem Marzouki on LinkedIn" className="story-link"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact (removed Messenger button) */}
        <section id="contact" className="section">
          <Card>
            <CardContent className="py-8 grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Email</div>
                <a href="mailto:securinets@insat.ucar.tn" className="story-link">securinets@insat.ucar.tn</a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Discord</div>
                <Button asChild variant="discord">
                  <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <DiscordIcon className="h-4 w-4" />
                    Join our server
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-6 md:py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-6 text-center md:text-left">
          <div>© {new Date().getFullYear()} Securinets INSAT • Developed by <a href="https://jihedkdiss.tn" target="_blank" className="story-link"><b>Jihed Kdiss</b></a></div>
          <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
            <a href={ctftimeLink} target="_blank" rel="noopener noreferrer" className="story-link flex items-center gap-1"><img src="https://ctftime.org/favicon.png" alt="" className="h-4 w-4" loading="lazy" decoding="async" /> CTFtime</a>
            <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="story-link flex items-center gap-1">
              <DiscordIcon className="h-4 w-4" />
              Discord
            </a>
            <a href="https://www.facebook.com/Securinets" target="_blank" rel="noopener noreferrer" className="story-link flex items-center gap-1"><Facebook className="h-4 w-4" /> Facebook</a>
            <a href="https://x.com/securinets" target="_blank" rel="noopener noreferrer" className="story-link flex items-center gap-1"><Twitter className="h-4 w-4" /> Twitter</a>
            <a href="https://www.linkedin.com/company/securinets" target="_blank" rel="noopener noreferrer" className="story-link flex items-center gap-1"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="https://www.instagram.com/securinets.insat/" target="_blank" rel="noopener noreferrer" className="story-link flex items-center gap-1"><Instagram className="h-4 w-4" /> Instagram</a>
          </div>
        </div>
      </footer>

      {/* Back to top - now circular */}
      {showTop && (
        <Button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 shadow-glow rounded-full" variant="hero" size="icon">
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
