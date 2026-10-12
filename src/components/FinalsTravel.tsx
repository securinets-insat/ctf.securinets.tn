import type { ReactNode } from "react";
import { FileText, Flag, Plane, Trophy, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCORD_URL, RULES_PDF_URL } from "@/lib/links";

const Em = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);

const BLOCKS: { title: string; icon: LucideIcon; body: ReactNode }[] = [
  {
    title: "Qualification",
    icon: Flag,
    body: (
      <p>
        The <Em>top 10 teams globally</Em> and the <Em>top 10 teams from the MENA region</Em> will qualify to compete in
        the <Em>Finals in Tunis, Tunisia</Em>.
      </p>
    ),
  },
  {
    title: "Travel & Accommodation",
    icon: Plane,
    body: (
      <p>
        Flights and accommodation will be <Em>fully covered for the top 2 teams globally</Em>, with the possibility of
        extending this support to additional teams in the top 10.
      </p>
    ),
  },
  {
    title: "Prizes",
    icon: Trophy,
    body: (
      <>
        <p>
          A <Em>$2,000 cash prize pool</Em> and <Em>cybersecurity certification vouchers</Em> are already confirmed!
        </p>
        <p className="mt-2">
          We're actively working with our sponsors to{" "}
          <Em>expand the prize pool and unlock even more rewards and opportunities</Em> for participating teams. Stay
          tuned for more announcements!
        </p>
      </>
    ),
  },
];

// Who qualifies for the onsite finals, travel coverage, prizes and the rules.
const FinalsTravel = () => (
  <section id="finals" className="section-tight">
    <div className="border-t border-border pt-5">
      <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Road to the finals</h2>

      <div className="mt-6 grid gap-x-10 gap-y-8 lg:grid-cols-3">
        {BLOCKS.map(({ title, icon: Icon, body }) => (
          <div key={title} className="border-t border-border pt-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold tracking-tight md:text-xl">{title}</h3>
              <Icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
            </div>
            <div className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{body}</div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button asChild variant="hero">
          <a href={RULES_PDF_URL} target="_blank" rel="noopener noreferrer">
            <FileText aria-hidden="true" />
            Read Rules
          </a>
        </Button>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          The rules are subject to change. Any change will be announced on our{" "}
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
            Discord server
          </a>
          .
        </p>
      </div>
    </div>
  </section>
);

export default FinalsTravel;
