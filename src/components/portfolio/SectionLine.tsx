import { useEffect, useRef, useState } from "react";

export function SectionLine() {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 block h-px bg-[#C8503A]"
      style={{
        width: active ? "100%" : "0%",
        transition: "width 0.6s ease-out",
      }}
    />
  );
}
