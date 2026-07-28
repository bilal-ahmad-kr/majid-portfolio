import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow, PrimaryButton } from "./ui/Shared";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="pointer-events-none absolute -top-32 -left-32 h-[380px] w-[380px] rounded-full bg-[#1E5BFF]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-[320px] w-[320px] rounded-full bg-[#D90429]/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>About MJD AI Automation</SectionEyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-[34px] leading-[1.15] font-extrabold tracking-tight text-[#0F172A] md:text-[48px]"
          >
            We Build Systems That{" "}
            <span className="bg-gradient-to-r from-[#1E5BFF] to-[#0B3FA0] bg-clip-text text-transparent">
              Work As Hard
            </span>{" "}
            As You Do
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-[#475569] md:text-[17px]"
          >
            We're a small, accountable team of engineers and strategists
            helping businesses replace manual work with AI automation and
            modern web platforms, without the agency runaround.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <PrimaryButton href="#contact">
              Start Your Project
              <ArrowUpRight size={17} />
            </PrimaryButton>
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)]">
            <img
              src="https://picsum.photos/seed/mjd-about-hero/800/900"
              alt="The MJD AI Automation team at work"
              className="h-[420px] w-full object-cover md:h-[480px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_36px_-12px_rgba(15,23,42,0.25)]">
            <div className="text-[22px] font-extrabold text-[#0F172A]">50+</div>
            <div className="text-[12px] text-[#64748B]">Systems shipped</div>
          </div>
          <div className="pointer-events-none absolute -z-10 top-8 -right-8 h-40 w-40 rounded-full bg-[#1E5BFF]/15 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
