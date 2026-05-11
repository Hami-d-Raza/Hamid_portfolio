import { FadeUp } from "./FadeUp";
import { SectionLine } from "./SectionLine";

const GROUPS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "C", "C++"] },
  { label: "Frontend", items: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3"] },
  { label: "Backend", items: ["FastAPI", "Flask", "Node.js"] },
  { label: "ML / AI", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "BioBERT"] },
  { label: "Data", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"] },
  { label: "Cloud & DevOps", items: ["Azure", "Docker", "Vercel", "Railway", "Netlify", "GitHub Actions"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "MS SQL"] },
  { label: "Tools", items: ["Git", "Jupyter", "VS Code", "Anaconda"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-[#EDEAE3]">
      <SectionLine />
      <div className="mx-auto max-w-6xl px-6 py-28">
        <FadeUp>
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#6B6B6B]">
            Skills
          </p>
          <h2 className="mt-4 font-serif text-[#111] leading-[1.05] text-[clamp(36px,8vw,52px)] md:text-[clamp(52px,7vw,88px)]">
            What I work with.
          </h2>
        </FadeUp>

        <div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{ columnGap: "32px", rowGap: "48px" }}
        >
          {GROUPS.map((g) => (
            <FadeUp key={g.label}>
              <div className="flex flex-col">
                <p
                  className="uppercase"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "#888888",
                    marginBottom: "16px",
                  }}
                >
                  {g.label}
                </p>
                <ul>
                  {g.items.map((it) => (
                    <li key={it} className="skill-item" style={{ fontSize: "15px", color: "#111111" }}>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
