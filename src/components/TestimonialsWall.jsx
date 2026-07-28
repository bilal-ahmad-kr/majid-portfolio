import { Star } from "lucide-react";
import { SectionEyebrow } from "./ui/Shared";
import { TESTIMONIALS } from "../data/content";

function TestimonialCard({ t }) {
  return (
    <div className="mb-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)]">
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={13} fill="#1E5BFF" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-3 text-[13.5px] leading-relaxed text-[#334155]">{t.quote}</p>
      <div className="mt-4 flex items-center gap-2.5">
        <img src={t.avatar} alt={t.name} className="h-9 w-9 rounded-full object-cover" />
        <div>
          <div className="text-[13px] font-bold text-[#0F172A]">{t.name}</div>
          <div className="text-[11.5px] text-[#64748B]">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function VerticalMarquee({ items, direction = "up", duration = 22 }) {
  const loop = [...items, ...items];
  return (
    <div className="relative h-[560px] overflow-hidden">
      <style>{`
        @keyframes mjd-scroll-up { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        @keyframes mjd-scroll-down { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
      `}</style>
      <div
        className="mjd-vscroll"
        style={{
          animation: `${direction === "up" ? "mjd-scroll-up" : "mjd-scroll-down"} ${duration}s linear infinite`,
        }}
      >
        {loop.map((t, i) => (
          <TestimonialCard t={t} key={i} />
        ))}
      </div>
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F8FAFC] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </div>
  );
}

export default function TestimonialsWall() {
  const colA = TESTIMONIALS.slice(0, 3);
  const colB = TESTIMONIALS.slice(3, 6);
  return (
    <section className="bg-[#F8FAFC] px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto text-center">
        <SectionEyebrow>What Clients Say</SectionEyebrow>
        <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
          Loved by the businesses we've automated
        </h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6">
        <VerticalMarquee items={colA} direction="up" duration={24} />
        <VerticalMarquee items={colB} direction="down" duration={26} />
      </div>
    </section>
  );
}
