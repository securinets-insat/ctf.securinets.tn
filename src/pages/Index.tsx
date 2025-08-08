import heroImage from "@/assets/hero-securinets-ctf.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, MapPin, Trophy, Shield, Cpu, Bug, Lock, Globe, ArrowUp, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const googleCalendarLink = "https://calendar.google.com/calendar/r/eventedit?text=Securinets+Quals+CTF+2026&dates=20260101T100000Z/20260101T220000Z&details=Join+the+Securinets+Quals+CTF+2026,+organized+by+Securinets+INSAT.+Compete+in+web,+reverse,+pwn+and+more.&location=Online";
  const ctftimeLink = "https://ctftime.org/event/"; // TODO: add event id
  const discordInvite = "https://discord.gg/securinets"; // TODO: replace with the official invite
  const messengerLink = "https://m.me/YOUR_PAGE_HANDLE"; // TODO: replace with Securinets page handle

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#hero" className="flex items-center gap-3 hover-scale">
            <div className="h-8 w-8 rounded-md bg-primary/20 ring-1 ring-primary/30 shadow-glow" />
            <span className="font-display text-lg font-semibold">Securinets INSAT</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="story-link">About</a>
            <a href="#tracks" className="story-link">Categories</a>
            <a href="#schedule" className="story-link">Schedule</a>
            <a href="#location" className="story-link">Location</a>
            <a href="#sponsors" className="story-link">Sponsors</a>
            <a href="#contact" className="story-link">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="hero" className="hidden sm:inline-flex">
              <a href={discordInvite} target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
            <Button asChild variant="outline" className="">
              <a href={ctftimeLink} target="_blank" rel="noopener noreferrer">
                Register on CTFtime
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <img src={heroImage} alt="Dark red futuristic CTF background" className="w-full h-[70vh] object-cover opacity-70" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
          </div>
          <div className="container mx-auto relative z-10 px-4 py-20 md:py-28 min-h-[60vh] flex items-center">
            <div className="max-w-3xl animate-enter">
              <Badge className="mb-4 bg-primary/15 text-primary ring-1 ring-primary/30">Online • Global</Badge>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Securinets Quals CTF 2026
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
                A premium, competitive and educational cybersecurity challenge by Securinets INSAT. Solve tasks in web exploitation, reverse engineering, binary exploitation, and more.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" asChild>
                  <a href={discordInvite} target="_blank" rel="noopener noreferrer">
                    Join the Discord
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href={ctftimeLink} target="_blank" rel="noopener noreferrer">
                    Register on CTFtime
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#about">Learn more</a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-primary" /><span>Prizes & swag</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /><span>Beginner → Advanced tracks</span></div>
                <div className="flex items-center gap-2"><CalendarIcon className="h-4 w-4 text-primary" /><span>2026 • Date TBA</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <Card className="bg-card/60">
                <CardHeader>
                  <CardTitle className="font-display">About the Event</CardTitle>
                  <CardDescription>
                    Organized by Securinets INSAT, the Quals bring together students and professionals for a 12-hour online CTF focused on hands-on problem solving.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:gap-5">
                  <div className="flex items-start gap-3"><Shield className="mt-1 h-5 w-5 text-primary" /><p>Wide range of categories: web exploitation, reverse engineering, binary exploitation, cryptography, forensics, misc, and more.</p></div>
                  <div className="flex items-start gap-3"><Globe className="mt-1 h-5 w-5 text-primary" /><p>Open to global teams. Great opportunity to learn, compete and meet the community.</p></div>
                  <div className="flex items-start gap-3"><Trophy className="mt-1 h-5 w-5 text-primary" /><p>Prizes for top teams and recognition on CTFtime.</p></div>
                </CardContent>
              </Card>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Cpu className="h-5 w-5 text-primary" /> Web Exploitation</CardTitle>
                  <CardDescription>From classic injections to modern web vulns.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Lock className="h-5 w-5 text-primary" /> Reverse Engineering</CardTitle>
                  <CardDescription>Static and dynamic analysis, cracking, unpacking.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Bug className="h-5 w-5 text-primary" /> Binary Exploitation</CardTitle>
                  <CardDescription>Memory corruption, mitigations, modern pwn.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> Crypto & Forensics</CardTitle>
                  <CardDescription>Realistic crypto and DFIR challenges.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTFtime */}
        <section className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">CTFtime</div>
                <h2 className="text-2xl font-display font-semibold">Event page & weight</h2>
                <p className="text-muted-foreground mt-1">Official CTFtime page with standings. Weight: TBA.</p>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" asChild>
                  <a href={ctftimeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit CTFtime <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={discordInvite} target="_blank" rel="noopener noreferrer">Join Discord</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Schedule */}
        <section id="schedule" className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CalendarIcon className="h-5 w-5 text-primary" /> Schedule</CardTitle>
                <CardDescription>Date: 2026 • Time: TBA (12h online event)</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button variant="hero" asChild>
                  <a href={googleCalendarLink} target="_blank" rel="noopener noreferrer">Add to Google Calendar</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#tracks">Explore categories</a>
                </Button>
              </CardContent>
            </Card>

            <Card id="tracks">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5 text-primary" /> Get ready</CardTitle>
                <CardDescription>Warm up with past write‑ups and tools.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>Set up a team on CTFtime</li>
                  <li>Join Discord for announcements</li>
                  <li>Prepare tooling: Docker, debuggers, RE suites</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Location</CardTitle>
                <CardDescription>Quals are online. Organizer HQ: INSAT, Tunis.</CardDescription>
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
                <CardDescription>Discord server widget (replace server id).</CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="rounded-lg overflow-hidden ring-1 ring-border">
                  <iframe
                    title="Discord Widget"
                    src="https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark"
                    className="w-full h-64"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Tip: replace YOUR_SERVER_ID with the Discord server ID.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Sponsors */}
        <section id="sponsors" className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-semibold">Sponsors</h2>
            <p className="text-muted-foreground mt-2">Partner with us to support the next generation of security talent.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-20 rounded-md border border-border bg-card/40 flex items-center justify-center text-muted-foreground hover-scale">
                Your logo
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="hero" asChild>
              <a href="mailto:sponsorships@securinets.org?subject=Sponsorship%20Inquiry%20-%20Securinets%20Quals%202026">Become a Sponsor</a>
            </Button>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <Card>
            <CardContent className="py-8 grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Email</div>
                <a href="mailto:contact@securinets.org" className="story-link">contact@securinets.org</a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Discord</div>
                <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="story-link">Join our server</a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Messenger</div>
                <a href={messengerLink} target="_blank" rel="noopener noreferrer" className="story-link">Chat on Facebook</a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Securinets INSAT • Securinets Quals CTF 2026</div>
          <div className="flex items-center gap-4">
            <a href={ctftimeLink} target="_blank" rel="noopener noreferrer" className="story-link">CTFtime</a>
            <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="story-link">Discord</a>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <Button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 shadow-glow" variant="hero">
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}

      {/* Floating Messenger fallback */}
      <a href={messengerLink} target="_blank" rel="noopener noreferrer" aria-label="Messenger" className="fixed bottom-6 left-6">
        <div className="h-12 w-12 rounded-full bg-secondary ring-1 ring-border grid place-items-center hover-scale shadow-glow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6 fill-current text-foreground"><path d="M256.004 32C132.288 32 32 124.288 32 238.528c0 62.368 28.672 118.208 75.232 156.864V480l70.016-38.464c25.024 6.88 51.52 10.624 78.752 10.624 123.744 0 224-92.256 224-206.464C480 124.288 379.748 32 256.004 32zm23.744 269.824l-59.84-63.84-116.16 63.84 128.64-136.864 61.12 63.84 114.88-63.84-128.64 136.864z"/></svg>
        </div>
      </a>
    </div>
  );
};

export default Index;
