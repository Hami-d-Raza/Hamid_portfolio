import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const LINKS$1 = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [pastHero, setPastHero] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  const dark = !pastHero;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-[9999] transition-[backdrop-filter,border-color,background-color,color] duration-300 ${dark ? "border-b border-transparent bg-[#111111] text-white" : "border-b border-[#E0E0E0] bg-[#F7F3ED]/70 text-[#111] backdrop-blur-md"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "font-serif text-[22px] leading-none", children: "HMR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 md:ml-auto md:mr-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "aria-hidden": true,
                className: "blink-dot inline-block h-1.5 w-1.5 rounded-full bg-[#C8503A]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-[11px] uppercase tracking-[0.25em] text-[#888888] md:inline", children: "Available" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-8 md:flex", children: LINKS$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "text-sm link-underline", children: l.label }) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              "aria-label": "Open menu",
              className: "md:hidden flex h-9 w-9 items-center justify-center",
              onClick: () => setOpen(true),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Menu" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-px w-6 ${dark ? "bg-white" : "bg-[#111]"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-px w-6 ${dark ? "bg-white" : "bg-[#111]"}` })
                ] })
              ]
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed left-0 top-0 z-[9998] flex h-screen w-screen flex-col overflow-hidden bg-[#F7F3ED] md:hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-[22px]", children: "HMR" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                "aria-label": "Close menu",
                onClick: () => setOpen(false),
                className: "text-sm uppercase tracking-widest",
                children: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-1 flex-col items-start justify-center gap-6 px-8", children: LINKS$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "font-serif text-5xl text-[#111]",
              children: l.label
            }
          ) }, l.href)) })
        ] })
      ]
    }
  );
}
function FadeUp({ delay = 0, children, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6, ease: "easeOut", delay },
      ...rest,
      children
    }
  );
}
function getTime() {
  return (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    timeZone: "Asia/Karachi",
    hour12: false
  });
}
function LiveClock() {
  const [t, setT] = reactExports.useState(getTime());
  reactExports.useEffect(() => {
    const id = setInterval(() => setT(getTime()), 1e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    t,
    " PKT"
  ] });
}
function TerminalBlock() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:block w-[320px] border border-[#2A2A2A] bg-[#1E1E1E] font-mono text-[12px] text-[#E5E5E5]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 border-b border-[#2A2A2A] px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full border border-[#2A2A2A]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full border border-[#2A2A2A]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full border border-[#2A2A2A]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] uppercase tracking-widest text-[#777777]", children: "~/portfolio" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 leading-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#777777]", children: "$" }),
        " whoami"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "muhammad-hamid-raza" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#777777]", children: "$" }),
        " cat role.txt"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "full-stack & ml developer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#777777]", children: "$" }),
        " status"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#C8503A]", children: "●" }),
        " available for work"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#777777]", children: "$" }),
        " time"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LiveClock, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#777777]", children: "$" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink-caret", children: "▍" })
      ] })
    ] })
  ] });
}
const ITEMS$1 = [
  "React",
  "FastAPI",
  "PyTorch",
  "TypeScript",
  "Azure",
  "Docker",
  "Scikit-learn",
  "TensorFlow",
  "Tailwind",
  "PostgreSQL"
];
function Marquee() {
  const row = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 items-center gap-10 pr-10", children: ITEMS$1.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "text-[13px] uppercase tracking-[0.25em] text-[#888888]",
      children: [
        t,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-10 text-[#555555]", children: "·" })
      ]
    },
    t
  )) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden border-y border-[#2A2A2A] bg-[#1A1A1A] py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "marquee-track flex w-max", children: [
    row,
    row
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative bg-[#111111] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-28 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.28em] text-[#888888]", children: "Full-Stack & ML Developer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-serif text-[56px] leading-[1.02] text-white sm:text-[72px] lg:text-[88px]", children: [
          "Muhammad",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "italic", children: [
            "Hamid ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C8503A" }, children: "Raza." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-base text-[#AAAAAA] sm:text-lg", children: "Building intelligent web systems — from model training to production deployment." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#work",
              className: "inline-flex items-center gap-2 bg-white px-6 py-3 text-sm text-[#111] transition-colors hover:bg-[#C8503A] hover:text-white",
              children: [
                "View Work ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/hamid_cv.pdf",
              download: true,
              className: "inline-flex items-center gap-2 border border-[#444444] bg-transparent px-6 py-3 text-sm text-white transition-colors hover:border-[#C8503A] hover:text-[#C8503A]",
              children: "Download CV"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalBlock, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {})
  ] });
}
function SectionLine() {
  const ref = reactExports.useRef(null);
  const [active, setActive] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      ref,
      "aria-hidden": true,
      className: "pointer-events-none absolute left-0 top-0 block h-px bg-[#C8503A]",
      style: {
        width: active ? "100%" : "0%",
        transition: "width 0.6s ease-out"
      }
    }
  );
}
const PROJECTS = [
  {
    name: "MediScan AI",
    domain: "mediscanai.me",
    year: "2025–2026",
    description: "AI healthcare platform with 26-class histopathology classifier, brain MRI classifier, and biomedical NLP analyser.",
    tech: ["FastAPI", "PyTorch", "React", "Azure", "Docker"],
    href: "https://mediscanai.me"
  },
  {
    name: "UAF Result Hub",
    domain: "uafresult.live",
    year: "2025",
    description: "Academic analytics platform for UAF students with GPA dashboard, CGPA calculator, and smart search.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Serverless"],
    href: "https://uafresult.live"
  },
  {
    name: "Mikel Portfolio",
    domain: "saezdevicuna.eus",
    year: "2026",
    description: "Multilingual client portfolio with interactive world map, dynamic CMS, and email-based auth.",
    tech: ["React", "Leaflet", "GSAP", "Netlify", "Custom CMS"],
    href: "https://saezdevicuna.eus"
  },
  {
    name: "Video Downloader",
    domain: "video-downloader-jade.vercel.app",
    year: "2025",
    description: "Multi-platform video downloader supporting YouTube, Instagram, TikTok, Facebook with MP3 extraction.",
    tech: ["FastAPI", "yt-dlp", "Railway", "React"],
    href: "https://video-downloader-jade.vercel.app"
  },
  {
    name: "AceStream",
    domain: "acestream.vercel.app",
    year: "2026",
    description: "Full-stack anime discovery and streaming platform with advanced search, episode streaming, and personal watchlist.",
    tech: ["React", "TypeScript", "Vite", "Zustand", "HLS.js", "FastAPI"],
    href: "https://acestream.vercel.app"
  }
];
function Work() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "work", className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLine, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.28em] text-[#6B6B6B]", children: "Selected Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-[#111] leading-[1.05] text-[clamp(36px,8vw,52px)] md:text-[clamp(52px,7vw,88px)]", children: "Things I've Built" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 border-t border-[#E0E0E0]", children: PROJECTS.map((p, idx) => {
        const num = String(idx + 1).padStart(2, "0");
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: p.href ?? "#",
            target: p.href ? "_blank" : void 0,
            rel: p.href ? "noreferrer" : void 0,
            className: "group relative block overflow-hidden border-b border-[#E0E0E0] border-l-[3px] border-l-transparent transition-colors duration-300 hover:border-l-[#C8503A] hover:bg-[#111]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": true,
                  className: "pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 font-serif text-white opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04]",
                  style: { fontSize: 140, lineHeight: 1 },
                  children: num
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid grid-cols-1 gap-3 px-2 py-8 transition-colors duration-300 group-hover:text-white md:grid-cols-[40px_1fr] md:items-center md:gap-6 md:py-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    className: "hidden md:block text-[#888888] group-hover:text-[#555555] transition-colors duration-300",
                    style: { fontSize: 11, letterSpacing: "0.05em" },
                    children: num
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 md:grid-cols-12 md:items-baseline md:gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-[#111] transition-colors duration-300 group-hover:text-white sm:text-3xl", children: p.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-widest text-[#6B6B6B] transition-colors duration-300 group-hover:text-white/60", children: p.domain ? `${p.domain} · ${p.year}` : p.year })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#111] transition-colors duration-300 group-hover:text-white md:col-span-5", children: p.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 md:col-span-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6B6B6B] transition-colors duration-300 group-hover:text-white/60", children: p.tech.join(", ") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        "aria-hidden": true,
                        className: "shrink-0 text-xl text-[#111] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white",
                        children: "→"
                      }
                    )
                  ] })
                ] })
              ] })
            ]
          }
        ) }, p.name);
      }) })
    ] })
  ] });
}
const hamidPhoto = "/assets/hamid-photo-CpyzmJ15.png";
const STATS = [
  { value: "3+", label: "Years Building" },
  { value: "5+", label: "Projects Deployed" },
  { value: "2", label: "Clients Served" },
  { value: "1", label: "Internship" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "relative bg-[#EDEAE3]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLine, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "about-grid",
        style: {
          display: "grid",
          gridTemplateColumns: "55% 45%",
          gap: 64,
          alignItems: "start"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "about-photo-frame",
                style: {
                  width: "75%",
                  aspectRatio: "1 / 1",
                  maxHeight: 480,
                  overflow: "hidden",
                  borderRadius: 6,
                  position: "relative"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: hamidPhoto,
                      alt: "Muhammad Hamid Raza",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 10%",
                        display: "block",
                        filter: "grayscale(15%) contrast(1.08)"
                      },
                      className: "about-photo"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: 6,
                        background: "radial-gradient(ellipse at center, transparent 50%, #EDEAE3 100%)",
                        pointerEvents: "none"
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  marginTop: 32,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0
                },
                children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      padding: "20px 0",
                      borderTop: "1px solid #D8D4CC"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: "0.25em",
                            color: "#888888"
                          },
                          children: s.label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            display: "block",
                            marginTop: 4,
                            fontFamily: '"DM Serif Display", serif',
                            fontSize: 36,
                            color: "#111111",
                            lineHeight: 1
                          },
                          children: s.value
                        }
                      )
                    ]
                  },
                  s.label
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[420px] flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.28em] text-[#6B6B6B]", children: "About" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: "clamp(36px, 4vw, 52px)",
                  color: "#111111",
                  lineHeight: 1.1,
                  marginTop: 16,
                  marginBottom: 28
                },
                children: "A developer who cares about the craft."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "#444444",
                  marginBottom: 16
                },
                children: "Final-year CS student at University of Agriculture, Faisalabad, graduating May 2026. I build full-stack web applications and machine learning systems — from training models to shipping them to production. I've worked with clients on Upwork, completed an ML internship, and built tools used by real students across UAF."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "#444444",
                  marginBottom: 16
                },
                children: "Outside of code, I care about clean design, good documentation, and systems that actually work under pressure."
              }
            )
          ] }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
      ` })
  ] });
}
const GROUPS = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "C", "C++"] },
  { label: "Frontend", items: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3"] },
  { label: "Backend", items: ["FastAPI", "Flask", "Node.js"] },
  { label: "ML / AI", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "BioBERT"] },
  { label: "Data", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"] },
  { label: "Cloud & DevOps", items: ["Azure", "Docker", "Vercel", "Railway", "Netlify", "GitHub Actions"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "MS SQL"] },
  { label: "Tools", items: ["Git", "Jupyter", "VS Code", "Anaconda"] }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", className: "relative bg-[#EDEAE3]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLine, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.28em] text-[#6B6B6B]", children: "Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-[#111] leading-[1.05] text-[clamp(36px,8vw,52px)] md:text-[clamp(52px,7vw,88px)]", children: "What I work with." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          style: { columnGap: "32px", rowGap: "48px" },
          children: GROUPS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "uppercase",
                style: {
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "#888888",
                  marginBottom: "16px"
                },
                children: g.label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "skill-item", style: { fontSize: "15px", color: "#111111" }, children: it }, it)) })
          ] }) }, g.label))
        }
      )
    ] })
  ] });
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative border-t border-[#E0E0E0]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLine, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.28em] text-[#6B6B6B]", children: "Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-[#111] leading-[1.05] text-[clamp(36px,8vw,52px)] md:text-[clamp(52px,7vw,88px)]", children: "Where I've worked." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 border-l border-[#E0E0E0] pl-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-[#111]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.25em] text-[#6B6B6B]", children: "Jul – Sep 2025 · Remote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-serif text-2xl text-[#111] sm:text-3xl", children: "Data Scientist Intern" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[15px] text-[#333]", children: "DevelopersHub Corporation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-[15px] leading-relaxed text-[#333]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-px w-4 shrink-0 bg-[#111]" }),
            "Built and compared 5 classification models across Iris, Credit Risk, and Customer Churn datasets."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-px w-4 shrink-0 bg-[#111]" }),
            "Developed bank term deposit prediction model with SHAP explainability and ROC/F1 evaluation."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-px w-4 shrink-0 bg-[#111]" }),
            "Built K-Means segmentation pipeline with PCA/t-SNE and an interactive Streamlit business dashboard."
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
}
const ITEMS = [
  {
    icon: "🥈",
    title: "IAAC Final Round — Silver Honour",
    detail: "Top 8% globally · Score 16/20"
  },
  {
    icon: "🚀",
    title: "NASA Space Apps Challenge 2024",
    detail: "“Galactic Problem Solver”"
  },
  {
    icon: "💻",
    title: "Calico Fall '24 Hackathon",
    detail: "Participant"
  },
  {
    icon: "🎖️",
    title: "Defense Day Poster Design Competition",
    detail: "UAF Certificate"
  }
];
function Achievements() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative border-t border-[#E0E0E0]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLine, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.28em] text-[#6B6B6B]", children: "Achievements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-[#111] leading-[1.05] text-[clamp(36px,8vw,52px)] md:text-[clamp(52px,7vw,88px)]", children: "Recognition." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-12 border-t border-[#E0E0E0]", children: ITEMS.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "flex items-baseline gap-5 border-b border-[#E0E0E0] py-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", "aria-hidden": true, children: i.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-[#111]", children: i.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-[#6B6B6B]", children: i.detail })
            ] })
          ]
        },
        i.title
      )) }) })
    ] })
  ] });
}
const LINKS = [
  { label: "hamidraza9182@gmail.com", href: "mailto:hamidraza9182@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" }
];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative bg-[#111111]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLine, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.28em] text-[#555555]", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-serif text-white leading-[1.05] text-[clamp(36px,8vw,52px)] md:text-[clamp(52px,7vw,88px)]", children: [
          "Let's work",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "together." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-lg text-[#888888]", children: "Open to freelance projects, full-time roles, and interesting problems." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-14 space-y-5", children: LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "border-t border-[#2A2A2A] pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: l.href,
          target: l.href.startsWith("http") ? "_blank" : void 0,
          rel: l.href.startsWith("http") ? "noreferrer" : void 0,
          className: "group inline-flex items-baseline gap-4 font-serif text-[1.25rem] text-white transition-colors duration-300 hover:text-[#C8503A] sm:text-5xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: l.href.startsWith("mailto:") ? "break-all" : "", children: l.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "aria-hidden": true,
                className: "text-2xl text-[#C8503A] transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl",
                children: "→"
              }
            )
          ]
        }
      ) }, l.label)) }) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[#111111]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between border-t border-[#2A2A2A] px-6 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#555555]", children: "© 2026 Muhammad Hamid Raza" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-[#555555]", children: "Built with care." })
  ] }) });
}
function CustomCursor() {
  const dotRef = reactExports.useRef(null);
  const [enabled, setEnabled] = reactExports.useState(false);
  const [hover, setHover] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches || "ontouchstart" in window;
    if (isTouch) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-root");
    const onMove = (e) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };
    const onOver = (e) => {
      const t = e.target;
      if (!t) return;
      setHover(!!t.closest('a, button, [role="button"], input, textarea, select, label'));
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("cursor-none-root");
    };
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: dotRef,
      "aria-hidden": true,
      style: {
        position: "fixed",
        left: 0,
        top: 0,
        width: hover ? 32 : 8,
        height: hover ? 32 : 8,
        borderRadius: "9999px",
        backgroundColor: hover ? "transparent" : "#C8503A",
        border: hover ? "1.5px solid #C8503A" : "0 solid transparent",
        pointerEvents: "none",
        zIndex: 99999,
        transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border 0.2s ease, transform 0.1s ease",
        willChange: "transform, width, height"
      }
    }
  );
}
function ScrollProgress() {
  const [pct, setPct] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? window.scrollY / h * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: `${pct}%`,
        background: "#C8503A",
        zIndex: 1e4,
        pointerEvents: "none"
      }
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Work, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Achievements, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
