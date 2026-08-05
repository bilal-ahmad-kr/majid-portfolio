import { motion } from "framer-motion";
import { SectionEyebrow } from "../ui/Shared";
import * as LucideIcons from "lucide-react";

export default function ServiceFeatures({ features }) {
  return (
    <section className="bg-[#F8FAFC] px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>What's Included</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
            Service Features
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#475569] md:text-[16.5px]">
            Everything below is scoped and priced upfront, no surprises once
            we start.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = LucideIcons[f.icon] || LucideIcons.CheckCircle;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 text-left shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(30,91,255,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] shadow-[0_10px_20px_-6px_rgba(30,91,255,0.55)] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-[#0F172A]">{f.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[#475569]">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
