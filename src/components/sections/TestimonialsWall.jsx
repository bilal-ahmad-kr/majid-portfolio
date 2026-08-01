import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { SectionEyebrow } from "../ui/Shared";
import { testimonialsService } from "../../lib/cms";

// Fallback static testimonials (graceful degradation)
const FALLBACK = [
  {
    id: "f1", name: "Sarah Whitfield", role: "Founder, Whitfield Realty",
    quote: "MJD automated our entire lead follow-up process. What used to take our team 15 hours a week now runs itself, and our conversion rate is up significantly.",
    avatar_url: "https://i.pravatar.cc/150?img=32", rating: 5,
  },
  {
    id: "f2", name: "Daniel Cho", role: "COO, Vantage Logistics",
    quote: "They didn't just build us a chatbot, they rebuilt how our dispatch team works. Responsive, transparent, and genuinely invested in our results.",
    avatar_url: "https://i.pravatar.cc/150?img=12", rating: 5,
  },
  {
    id: "f3", name: "Amelia Torres", role: "Marketing Director, Clinic Connect",
    quote: "Every milestone was communicated clearly, pricing never moved, and support didn't disappear after launch. Rare in this industry.",
    avatar_url: "https://i.pravatar.cc/150?img=45", rating: 5,
  },
  {
    id: "f4", name: "James Okafor", role: "CEO, BrightPath Realty",
    quote: "Our new site plus their automation stack tripled our qualified leads in under two months. The ROI was obvious within weeks.",
    avatar_url: "https://i.pravatar.cc/150?img=51", rating: 5,
  },
  {
    id: "f5", name: "Priya Nair", role: "Ops Lead, StackRetail",
    quote: "Full ownership of our own systems was non-negotiable for us. MJD handed us the keys, literally, no lock-in, no hostage data.",
    avatar_url: "https://i.pravatar.cc/150?img=25", rating: 5,
  },
  {
    id: "f6", name: "Marcus Reid", role: "Founder, Reid & Co.",
    quote: "Fixed pricing, fixed scope, zero surprises. That alone made them worth choosing over three other agencies we interviewed.",
    avatar_url: "https://i.pravatar.cc/150?img=8", rating: 5,
  },
];

function TestimonialCard({ t }) {
  const avatar = t.avatar_url || t.avatar;
  const role = t.role || t.designation;
  return (
    <div className="mb-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)]">
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating || 5 }).map((_, i) => (
          <Star key={i} size={13} fill="#1E5BFF" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-3 text-[13.5px] leading-relaxed text-[#334155]">{t.quote}</p>
      <div className="mt-4 flex items-center gap-2.5">
        {avatar && (
          <img src={avatar} alt={t.name} className="h-9 w-9 rounded-full object-cover" />
        )}
        <div>
          <div className="text-[13px] font-bold text-[#0F172A]">{t.name}</div>
          {role && <div className="text-[11.5px] text-[#64748B]">{role}</div>}
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
          <TestimonialCard t={t} key={`${t.id || t.name}-${i}`} />
        ))}
      </div>
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F8FAFC] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </div>
  );
}

export default function TestimonialsWall({ serviceId } = {}) {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    testimonialsService
      .listPublished({ serviceId })
      .then((data) => setTestimonials(data?.length ? data : FALLBACK))
      .catch(() => setTestimonials(FALLBACK))
      .finally(() => setLoading(false));
  }, [serviceId]);

  const data = loading ? FALLBACK : testimonials;
  const colA = data.slice(0, Math.ceil(data.length / 2));
  const colB = data.slice(Math.ceil(data.length / 2));

  return (
    <section className="bg-[#F8FAFC] px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto text-center">
        <SectionEyebrow>What Clients Say</SectionEyebrow>
        <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
          Loved by the businesses we've automated
        </h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6">
        <VerticalMarquee items={colA.length ? colA : FALLBACK.slice(0, 3)} direction="up" duration={24} />
        <VerticalMarquee items={colB.length ? colB : FALLBACK.slice(3)} direction="down" duration={26} />
      </div>
    </section>
  );
}
