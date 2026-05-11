import { FadeUp } from "./FadeUp";
import { SectionLine } from "./SectionLine";

const ITEMS = [
  {
    icon: "🥈",
    title: "IAAC Final Round — Silver Honour",
    detail: "Top 8% globally · Score 16/20",
  },
  {
    icon: "🚀",
    title: "NASA Space Apps Challenge 2024",
    detail: "“Galactic Problem Solver”",
  },
  {
    icon: "💻",
    title: "Calico Fall '24 Hackathon",
    detail: "Participant",
  },
  {
    icon: "🎖️",
    title: "Defense Day Poster Design Competition",
    detail: "UAF Certificate",
  },
];

export function Achievements() {
  return (
    <section className="relative border-t border-[#E0E0E0]">
      <SectionLine />
      <div className="mx-auto max-w-6xl px-6 py-28">
        <FadeUp>
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#6B6B6B]">
            Achievements
          </p>
          <h2 className="mt-4 font-serif text-[#111] leading-[1.05] text-[clamp(36px,8vw,52px)] md:text-[clamp(52px,7vw,88px)]">
            Recognition.
          </h2>
        </FadeUp>

        <FadeUp>
          <ul className="mt-12 border-t border-[#E0E0E0]">
            {ITEMS.map((i) => (
              <li
                key={i.title}
                className="flex items-baseline gap-5 border-b border-[#E0E0E0] py-6"
              >
                <span className="text-xl" aria-hidden>{i.icon}</span>
                <div className="flex-1">
                  <p className="text-[16px] text-[#111]">{i.title}</p>
                  <p className="mt-1 text-sm text-[#6B6B6B]">{i.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
