import { motion } from "framer-motion";
import { SectionEyebrow } from "./ui/Shared";

export default function ServiceIndustries({ industries }) {
  return (
    <section className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-5xl mx-auto text-center">
        <SectionEyebrow>Who We Work With</SectionEyebrow>
        <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
          Industries We Serve
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#475569] md:text-[16.5px]">
          Our systems adapt to most service-based businesses, with the
          deepest experience in these industries.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] px-4 py-7 transition-all hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-[0_16px_32px_-14px_rgba(30,91,255,0.3)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E5BFF]/10 text-[#1E5BFF] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <span className="text-[13px] font-semibold text-[#0F172A]">{ind.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
