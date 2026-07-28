import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceHero({ eyebrow, title, subtitle, image, ctaLabel = "Start Your Project" }) {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-5 py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/85 via-[#0F172A]/75 to-[#0F172A]/95" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E5BFF]/25 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold tracking-wide text-white backdrop-blur-sm">
            {eyebrow}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-[36px] leading-[1.12] font-extrabold tracking-tight text-white md:text-[56px]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/80 md:text-[18px]"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E5BFF] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_-8px_rgba(30,91,255,0.65)] transition-all hover:shadow-[0_16px_36px_-8px_rgba(30,91,255,0.75)] hover:-translate-y-0.5"
          >
            {ctaLabel}
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
