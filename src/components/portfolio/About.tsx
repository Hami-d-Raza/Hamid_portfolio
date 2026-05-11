import { FadeUp } from "./FadeUp";
import { SectionLine } from "./SectionLine";
import hamidPhoto from "@/assets/hamid-photo.png";

const STATS = [
  { value: "3+", label: "Years Building" },
  { value: "5+", label: "Projects Deployed" },
  { value: "2", label: "Clients Served" },
  { value: "1", label: "Internship" },
];

export function About() {
  return (
    <section id="about" className="relative bg-[#EDEAE3]">
      <SectionLine />
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "55% 45%",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Left: photo + stats */}
          <FadeUp>
            <div
              className="about-photo-frame"
              style={{
                width: "75%",
                aspectRatio: "1 / 1",
                maxHeight: 480,
                overflow: "hidden",
                borderRadius: 6,
                position: "relative",
              }}
            >
              <img
                src={hamidPhoto}
                alt="Muhammad Hamid Raza"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 10%",
                  display: "block",
                  filter: "grayscale(15%) contrast(1.08)",
                }}
                className="about-photo"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 6,
                  background:
                    "radial-gradient(ellipse at center, transparent 50%, #EDEAE3 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
            <div
              style={{
                marginTop: 32,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
              }}
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "20px 0",
                    borderTop: "1px solid #D8D4CC",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.25em",
                      color: "#888888",
                    }}
                  >
                    {s.label}
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: 4,
                      fontFamily: '"DM Serif Display", serif',
                      fontSize: 36,
                      color: "#111111",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: text */}
          <FadeUp delay={0.1}>
            <div className="flex min-h-[420px] flex-col justify-center">
              <p className="text-[12px] uppercase tracking-[0.28em] text-[#6B6B6B]">
                About
              </p>
              <h2
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: "clamp(36px, 4vw, 52px)",
                  color: "#111111",
                  lineHeight: 1.1,
                  marginTop: 16,
                  marginBottom: 28,
                }}
              >
                A developer who cares about the craft.
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "#444444",
                  marginBottom: 16,
                }}
              >
                Final-year CS student at University of Agriculture, Faisalabad,
                graduating May 2026. I build full-stack web applications and
                machine learning systems — from training models to shipping
                them to production. I&apos;ve worked with clients on Upwork,
                completed an ML internship, and built tools used by real
                students across UAF.
              </p>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "#444444",
                  marginBottom: 16,
                }}
              >
                Outside of code, I care about clean design, good documentation,
                and systems that actually work under pressure.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-photo-frame {
            width: 240px !important;
            height: 240px !important;
            max-height: none !important;
            aspect-ratio: auto !important;
            margin: 0 auto 40px auto !important;
            overflow: hidden !important;
            border-radius: 6px !important;
          }
          .about-photo-frame img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center 15% !important;
          }
        }
        @media (max-width: 768px) {
          .about-photo-frame {
            width: 70% !important;
            aspect-ratio: 1 / 1 !important;
            max-height: 320px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
