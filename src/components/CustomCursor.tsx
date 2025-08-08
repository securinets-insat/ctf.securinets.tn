import React, { useEffect, useRef, useState } from "react";

// A lightweight custom cursor (dot + ring) that follows the mouse.
// Disabled on touch devices and when prefers-reduced-motion is enabled.
const CustomCursor: React.FC = () => {
    const [enabled, setEnabled] = useState(false);
    const dotRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!isFinePointer || reduced) return;
        setEnabled(true);

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let rx = x, ry = y; // ring position (lerped)
        let hovering = false;
        let down = false;

        const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
        const onDown = () => { down = true; };
        const onUp = () => { down = false; };
        const onLeave = () => {
            if (dotRef.current) dotRef.current.dataset.state = "hidden";
            if (ringRef.current) ringRef.current.dataset.state = "hidden";
        };
        const onEnter = () => {
            if (dotRef.current) dotRef.current.dataset.state = "idle";
            if (ringRef.current) ringRef.current.dataset.state = "idle";
        };

        const hoverSelectors = "a, button, [role='button'], input, textarea, select, .cursor-hover";
        const onOver = (e: Event) => { if ((e.target as Element)?.closest(hoverSelectors)) hovering = true; };
        const onOut = (e: Event) => { if ((e.target as Element)?.closest(hoverSelectors)) hovering = false; };

        const tick = () => {
            rx += (x - rx) * 0.18;
            ry += (y - ry) * 0.18;

            if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;

            const state = hovering ? (down ? "down" : "hover") : (down ? "down" : "idle");
            if (ringRef.current) ringRef.current.dataset.state = state;
            if (dotRef.current) dotRef.current.dataset.state = state;

            rafRef.current = requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        window.addEventListener("mouseleave", onLeave);
        window.addEventListener("mouseenter", onEnter);
        document.addEventListener("mouseover", onOver, true);
        document.addEventListener("mouseout", onOut, true);
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
            window.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("mouseenter", onEnter);
            document.removeEventListener("mouseover", onOver, true);
            document.removeEventListener("mouseout", onOut, true);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    if (!enabled) return null;

    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
            <div ref={ringRef} className="custom-cursor-ring"></div>
            <div ref={dotRef} className="custom-cursor-dot"></div>
        </div>
    );
};

export default CustomCursor;
