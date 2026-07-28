import { Sparkles } from "lucide-react";

export function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#1E5BFF]/20 bg-[#1E5BFF]/5 px-4 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E5BFF]">
      <Sparkles size={13} />
      {children}
    </div>
  );
}

export function PrimaryButton({ children, href = "#contact", className = "" }) {
  return (
    <a
      href={href}
      className={
        "inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E5BFF] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_-8px_rgba(30,91,255,0.55)] transition-all hover:shadow-[0_16px_36px_-8px_rgba(30,91,255,0.65)] hover:-translate-y-0.5 " +
        className
      }
    >
      {children}
    </a>
  );
}

export function SecondaryButton({ children, href = "#portfolio", className = "" }) {
  return (
    <a
      href={href}
      className={
        "inline-flex items-center justify-center gap-2 rounded-xl border border-[#0F172A]/15 bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0F172A] transition-all hover:border-[#0F172A]/30 hover:-translate-y-0.5 " +
        className
      }
    >
      {children}
    </a>
  );
}
