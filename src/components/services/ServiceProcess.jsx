import { motion } from "framer-motion";
import { SectionEyebrow } from "../ui/Shared";
import * as LucideIcons from "lucide-react";

export default function ServiceProcess({ steps }) {
  return (
    <section className="bg-[#F8FAFC] px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>Our Process</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#475569] md:text-[16.5px]">
            A simple, transparent process from first conversation to long-term
            support.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-[52px] left-0 right-0 hidden h-px bg-slate-200 lg:block" />

          {steps.map((s, i) => {
            const Icon =
              s.icon && LucideIcons[s.icon]
                ? LucideIcons[s.icon]
                : LucideIcons.Circle;

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-slate-100 bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0]">
                    <Icon size={22} className="text-white" />
                  </span>

                  <span className="text-[26px] font-extrabold text-slate-200">
                    {s.step}
                  </span>
                </div>

                <h3 className="mt-5 text-[17px] font-bold">{s.title}</h3>

                <p className="mt-2.5 text-[14px]">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
