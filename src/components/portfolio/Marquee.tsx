const ITEMS = [
  "React", "FastAPI", "PyTorch", "TypeScript", "Azure",
  "Docker", "Scikit-learn", "TensorFlow", "Tailwind", "PostgreSQL",
];

export function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {ITEMS.map((t) => (
        <span
          key={t}
          className="text-[13px] uppercase tracking-[0.25em] text-[#888888]"
        >
          {t} <span className="ml-10 text-[#555555]">·</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-[#2A2A2A] bg-[#1A1A1A] py-4">
      <div className="marquee-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
