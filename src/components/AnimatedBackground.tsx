import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Hero gradient wash */}
      <div className="absolute -inset-8 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_20%,hsl(var(--primary)/.18),transparent),radial-gradient(500px_300px_at_80%_10%,hsl(var(--accent)/.16),transparent)]" />
      </div>

      {/* Animated blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-float" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-float [animation-delay:1200ms]" />
      <div className="absolute top-1/4 right-1/3 h-56 w-56 rounded-full bg-primary/15 blur-2xl animate-float [animation-duration:10s]" />

      {/* Light sweep */}
      <div
        className="absolute inset-0 opacity-[0.10] animate-pan-slow"
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 0%, hsla(0,72%,51%,.22) 35%, transparent 65%)",
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
