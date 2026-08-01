import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#1E5BFF]/20 bg-[#1E5BFF]/5 px-4 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E5BFF]">
      <Sparkles size={13} />
      {children}
    </div>
  );
}

export function PrimaryButton({ children, to, href, className = "", ...props }) {
  const classes = "inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E5BFF] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_-8px_rgba(30,91,255,0.55)] transition-all hover:shadow-[0_16px_36px_-8px_rgba(30,91,255,0.65)] hover:-translate-y-0.5 " + className;
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <a href={href || "#contact"} className={classes} {...props}>
      {children}
    </a>
  );
}

export function SecondaryButton({ children, to, href, className = "", ...props }) {
  const classes = "inline-flex items-center justify-center gap-2 rounded-xl border border-[#0F172A]/15 bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0F172A] transition-all hover:border-[#0F172A]/30 hover:-translate-y-0.5 " + className;
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <a href={href || "#portfolio"} className={classes} {...props}>
      {children}
    </a>
  );
}
