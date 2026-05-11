import { FadeUp } from "./FadeUp";
import { SectionLine } from "./SectionLine";

const LINKS = [
  { label: "hamidraza9182@gmail.com", href: "mailto:hamidraza9182@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-[#111111]">
      <SectionLine />
      <div className="mx-auto max-w-6xl px-6 py-32">
        <FadeUp>
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#555555]">
            Contact
          </p>
          <h2 className="mt-6 font-serif text-white leading-[1.05] text-[clamp(36px,8vw,52px)] md:text-[clamp(52px,7vw,88px)]">
            Let&apos;s work
            <br />
            <span className="italic">together.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-[#888888]">
            Open to freelance projects, full-time roles, and interesting
            problems.
          </p>
        </FadeUp>

        <FadeUp>
          <ul className="mt-14 space-y-5">
            {LINKS.map((l) => (
              <li key={l.label} className="border-t border-[#2A2A2A] pt-5">
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-baseline gap-4 font-serif text-[1.25rem] text-white transition-colors duration-300 hover:text-[#C8503A] sm:text-5xl"
                >
                  <span className={l.href.startsWith("mailto:") ? "break-all" : ""}>{l.label}</span>
                  <span
                    aria-hidden
                    className="text-2xl text-[#C8503A] transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
