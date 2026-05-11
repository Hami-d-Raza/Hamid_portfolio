import { FadeUp } from "./FadeUp";
import { SectionLine } from "./SectionLine";

type Project = {
  name: string;
  domain?: string;
  year: string;
  description: string;
  tech: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: "MediScan AI",
    domain: "mediscanai.me",
    year: "2025–2026",
    description:
      "AI healthcare platform with 26-class histopathology classifier, brain MRI classifier, and biomedical NLP analyser.",
    tech: ["FastAPI", "PyTorch", "React", "Azure", "Docker"],
    href: "https://mediscanai.me",
  },
  {
    name: "UAF Result Hub",
    domain: "uafresult.live",
    year: "2025",
    description:
      "Academic analytics platform for UAF students with GPA dashboard, CGPA calculator, and smart search.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Serverless"],
    href: "https://uafresult.live",
  },
  {
    name: "Mikel Portfolio",
    domain: "saezdevicuna.eus",
    year: "2026",
    description:
      "Multilingual client portfolio with interactive world map, dynamic CMS, and email-based auth.",
    tech: ["React", "Leaflet", "GSAP", "Netlify", "Custom CMS"],
    href: "https://saezdevicuna.eus",
  },
  {
    name: "Video Downloader",
    year: "2025",
    description:
      "Multi-platform video downloader supporting YouTube, Instagram, TikTok, Facebook with MP3 extraction.",
    tech: ["FastAPI", "yt-dlp", "Railway", "React"],
  },
  {
    name: "HR Attrition Analysis",
    year: "2024",
    description:
      "ML classification pipeline on 14,999 records with Logistic Regression, Decision Tree, Random Forest.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
  },
];

export function Work() {
  return (
    <section id="work" className="relative">
      <SectionLine />
      <div className="mx-auto max-w-6xl px-6 py-28">
        <FadeUp>
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#6B6B6B]">
            Selected Work
          </p>
          <h2 className="mt-4 font-serif text-[#111] leading-[1.05] text-[clamp(36px,8vw,52px)] md:text-[clamp(52px,7vw,88px)]">
            Things I&apos;ve Built
          </h2>
        </FadeUp>

        <div className="mt-14 border-t border-[#E0E0E0]">
          {PROJECTS.map((p, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            return (
            <FadeUp key={p.name}>
              <a
                href={p.href ?? "#"}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noreferrer" : undefined}
                className="group relative block overflow-hidden border-b border-[#E0E0E0] border-l-[3px] border-l-transparent transition-colors duration-300 hover:border-l-[#C8503A] hover:bg-[#111]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 font-serif text-white opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04]"
                  style={{ fontSize: 140, lineHeight: 1 }}
                >
                  {num}
                </span>
                <div className="relative grid grid-cols-1 gap-3 px-2 py-8 transition-colors duration-300 group-hover:text-white md:grid-cols-[40px_1fr] md:items-center md:gap-6 md:py-10">
                  <span
                    aria-hidden
                    className="hidden md:block text-[#888888] group-hover:text-[#555555] transition-colors duration-300"
                    style={{ fontSize: 11, letterSpacing: "0.05em" }}
                  >
                    {num}
                  </span>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:items-baseline md:gap-6">
                    <div className="md:col-span-4">
                      <h3 className="font-serif text-2xl text-[#111] transition-colors duration-300 group-hover:text-white sm:text-3xl">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-widest text-[#6B6B6B] transition-colors duration-300 group-hover:text-white/60">
                        {p.domain ? `${p.domain} · ${p.year}` : p.year}
                      </p>
                    </div>
                    <p className="text-[15px] text-[#111] transition-colors duration-300 group-hover:text-white md:col-span-5">
                      {p.description}
                    </p>
                    <div className="flex items-start justify-between gap-4 md:col-span-3">
                      <p className="text-xs text-[#6B6B6B] transition-colors duration-300 group-hover:text-white/60">
                        {p.tech.join(", ")}
                      </p>
                      <span
                        aria-hidden
                        className="shrink-0 text-xl text-[#111] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
