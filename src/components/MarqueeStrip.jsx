import { MARQUEE_ITEMS } from "../data/content";

export default function MarqueeStrip() {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section className="overflow-hidden border-y border-slate-100 bg-[#0F172A] py-6">
      <style>{`
        @keyframes mjd-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mjd-marquee-track {
          animation: mjd-marquee 28s linear infinite;
        }
      `}</style>
      <div className="flex w-max mjd-marquee-track">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center px-8">
            <span className="text-[20px] md:text-[26px] font-bold tracking-tight text-white/85 whitespace-nowrap">
              {item}
            </span>
            <span className="ml-8 h-1.5 w-1.5 rounded-full bg-[#1E5BFF]" />
          </div>
        ))}
      </div>
    </section>
  );
}
