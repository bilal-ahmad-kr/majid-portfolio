import { motion } from "framer-motion";
import { SectionEyebrow } from "../ui/Shared";

export default function ServiceAbout({ heading, paragraph, image }) {
  return (
    <section className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow>About This Service</SectionEyebrow>
          <h2 className="mt-5 text-[28px] font-extrabold tracking-tight text-[#0F172A] md:text-[36px]">
            {heading}
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-[#475569] md:text-[17px]">
            {paragraph}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(15,23,42,0.3)]">
            <img
              src={image}
              alt={heading}
              className="h-[320px] w-full object-cover md:h-[380px]"
            />
          </div>
          <div className="pointer-events-none absolute -z-10 -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#1E5BFF]/15 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
