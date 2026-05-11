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
          <div className="mt-14 border-l border-[#E0E0E0] pl-8">
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
