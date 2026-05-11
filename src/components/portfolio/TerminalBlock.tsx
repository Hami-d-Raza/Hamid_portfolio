import { LiveClock } from "./LiveClock";

export function TerminalBlock() {
  return (
    <div className="hidden lg:block w-[320px] border border-[#2A2A2A] bg-[#1E1E1E] font-mono text-[12px] text-[#E5E5E5]">
      <div className="flex items-center gap-1.5 border-b border-[#2A2A2A] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full border border-[#2A2A2A]" />
        <span className="h-2.5 w-2.5 rounded-full border border-[#2A2A2A]" />
        <span className="h-2.5 w-2.5 rounded-full border border-[#2A2A2A]" />
        <span className="ml-2 text-[10px] uppercase tracking-widest text-[#777777]">
          ~/portfolio
        </span>
      </div>
      <div className="p-4 leading-6">
        <p><span className="text-[#777777]">$</span> whoami</p>
        <p>muhammad-hamid-raza</p>
        <p className="mt-2"><span className="text-[#777777]">$</span> cat role.txt</p>
        <p>full-stack &amp; ml developer</p>
        <p className="mt-2"><span className="text-[#777777]">$</span> status</p>
        <p>
          <span className="text-[#C8503A]">●</span> available for work
        </p>
        <p className="mt-2"><span className="text-[#777777]">$</span> time</p>
        <p><LiveClock /></p>
        <p className="mt-2">
          <span className="text-[#777777]">$</span>{" "}
          <span className="blink-caret">▍</span>
        </p>
      </div>
    </div>
  );
}
