import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const dark = !pastHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] transition-[backdrop-filter,border-color,background-color,color] duration-300 ${
        dark
          ? "border-b border-transparent bg-[#111111] text-white"
          : "border-b border-[#E0E0E0] bg-[#F7F3ED]/70 text-[#111] backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-[22px] leading-none">
          HMR
        </a>

        <div className="flex items-center gap-2 md:ml-auto md:mr-8">
          <span
            aria-hidden
            className="blink-dot inline-block h-1.5 w-1.5 rounded-full bg-[#C8503A]"
          />
          <span className="hidden text-[11px] uppercase tracking-[0.25em] text-[#888888] md:inline">
            Available
          </span>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm link-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Open menu"
          className="md:hidden flex h-9 w-9 items-center justify-center"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-px w-6 ${dark ? "bg-white" : "bg-[#111]"}`} />
            <span className={`block h-px w-6 ${dark ? "bg-white" : "bg-[#111]"}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="fixed left-0 top-0 z-[9998] flex h-screen w-screen flex-col overflow-hidden bg-[#F7F3ED] md:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-serif text-[22px]">HMR</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest"
            >
              Close
            </button>
          </div>
          <ul className="flex flex-1 flex-col items-start justify-center gap-6 px-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-5xl text-[#111]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
