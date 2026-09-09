import { FadeUp } from "./FadeUp";
import { SectionLine } from "./SectionLine";

export function Experience() {
  return (
    <section className="relative border-t border-[#E0E0E0]">
      <SectionLine />
      <div className="mx-auto max-w-6xl px-6 py-28">
        <FadeUp>
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#6B6B6B]">
            Experience
          </p>
        <h2 className="mt-4 font-serif text-[#111] leading-[1.05] text-[clamp(36px,8vw,52px)] md:text-[clamp(52px,7vw,88px)]">
          Where I&apos;ve worked.
        </h2>
        </FadeUp>

        <FadeUp>
          <div className="mt-14 border-l border-[#E0E0E0] pl-8 space-y-14">
            {/* Upwork – Mikel Saez de Vicuña */}
            <div className="relative">
              <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-[#111]" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#6B6B6B]">
                Apr – May 2026 · Remote, Basque Country, Spain
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#111] sm:text-3xl">
                Freelance Full-Stack Developer
              </h3>
              <p className="mt-1 text-[15px] text-[#333]">
                Upwork Client (Mikel Saez de Vicuña) ·{" "}
                <a
                  href="https://saezdevicuna.eus"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[#111] transition-colors"
                >
                  saezdevicuna.eus
                </a>
              </p>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[#333]">
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-[#111]" />
                  Built full-stack portfolio for a Spain-based Upwork client
                  using React 19 + Vite; deployed to production on Netlify
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-[#111]" />
                  Implemented multilingual support (English, Spanish, Basque)
                  via Google Translate API, GSAP scroll animations, and custom
                  cursor trail effects
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-[#111]" />
                  Integrated interactive world map (Leaflet + GeoJSON) with
                  dynamic pins fetched live from Google Sheets via PapaParse
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-[#111]" />
                  Developed custom CMS with email-based authentication, enabling
                  the client to update website content without touching code
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {["React 19", "Vite", "Netlify", "GSAP", "Leaflet", "GeoJSON", "Google Translate API"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#E0E0E0] px-3 py-0.5 text-[11px] tracking-wide text-[#6B6B6B]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* DevelopersHub Corporation */}
            <div className="relative">
              <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-[#111]" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#6B6B6B]">
                Jul – Sep 2025 · Remote
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#111] sm:text-3xl">
                Data Scientist Intern
              </h3>
              <p className="mt-1 text-[15px] text-[#333]">
                DevelopersHub Corporation
              </p>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[#333]">
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-[#111]" />
                  Built and compared 5 classification models across Iris,
                  Credit Risk, and Customer Churn datasets.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-[#111]" />
                  Developed bank term deposit prediction model with SHAP
                  explainability and ROC/F1 evaluation.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-[#111]" />
                  Built K-Means segmentation pipeline with PCA/t-SNE and an
                  interactive Streamlit business dashboard.
                </li>
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
