import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* Glowing orbs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-[-4rem] right-[-4rem] h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float [animation-delay:2000ms]" />
      <div className="absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-primary/10 blur-2xl animate-float [animation-duration:9s]" />
    </div>
  );
};

export default AnimatedBackground;
