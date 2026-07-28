import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionEyebrow } from "./ui/Shared";

export default function ServiceBenefits({ heading, benefits, image }) {
  return (
    <section className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative order-2 mx-auto w-full max-w-lg lg:order-1"
        >
          <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(15,23,42,0.3)]">
            <img
              src={image}
              alt={heading}
              className="h-[320px] w-full object-cover md:h-[380px]"
            />
          </div>
          <div className="pointer-events-none absolute -z-10 -top-8 -left-8 h-40 w-40 rounded-full bg-[#D90429]/10 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <SectionEyebrow>Benefits</SectionEyebrow>
          <h2 className="mt-5 text-[28px] font-extrabold tracking-tight text-[#0F172A] md:text-[36px]">
            {heading}
          </h2>

          <ul className="mt-7 space-y-4">
            {benefits.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF]">
                  <CheckCircle2 size={15} />
                </span>
                <span className="text-[14.5px] leading-relaxed text-[#334155] md:text-[15.5px]">
                  {b}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
