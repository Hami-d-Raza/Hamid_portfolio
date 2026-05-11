import { FadeUp } from "./FadeUp";
import { TerminalBlock } from "./TerminalBlock";
import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section id="top" className="relative bg-[#111111] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-28 pb-20">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto]">
          <FadeUp>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#888888]">
              Full-Stack &amp; ML Developer
            </p>
            <h1 className="mt-6 font-serif text-[56px] leading-[1.02] text-white sm:text-[72px] lg:text-[88px]">
              Muhammad
              <br />
              <span className="italic">Hamid <span style={{ color: "#C8503A" }}>Raza.</span></span>
            </h1>
            <p className="mt-8 max-w-xl text-base text-[#AAAAAA] sm:text-lg">
              Building intelligent web systems — from model training to
              production deployment.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm text-[#111] transition-colors hover:bg-[#C8503A] hover:text-white"
              >
                View Work <span aria-hidden>→</span>
              </a>
              <a
                href="/hamid_cv.pdf"
                download
                className="inline-flex items-center gap-2 border border-[#444444] bg-transparent px-6 py-3 text-sm text-white transition-colors hover:border-[#C8503A] hover:text-[#C8503A]"
              >
                Download CV
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <TerminalBlock />
          </FadeUp>
        </div>
      </div>
      <Marquee />
    </section>
  );
}
