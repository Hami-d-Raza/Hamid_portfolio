import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch =
      window.matchMedia("(hover: none)").matches ||
      "ontouchstart" in window;
    if (isTouch) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-root");

    const onMove = (e: MouseEvent) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      setHover(!!t.closest('a, button, [role="button"], input, textarea, select, label'));
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("cursor-none-root");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: hover ? 32 : 8,
        height: hover ? 32 : 8,
        borderRadius: "9999px",
        backgroundColor: hover ? "transparent" : "#C8503A",
        border: hover ? "1.5px solid #C8503A" : "0 solid transparent",
        pointerEvents: "none",
        zIndex: 99999,
        transition:
          "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border 0.2s ease, transform 0.1s ease",
        willChange: "transform, width, height",
      }}
    />
  );
}
