import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { SectionEyebrow, PrimaryButton } from "./ui/Shared";
import { ALL_ARTICLES } from "../data/content";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#1E5BFF]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-24 h-[320px] w-[320px] rounded-full bg-[#D90429]/5 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A08 1px, transparent 1px), linear-gradient(90deg, #0F172A08 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>Our Blog</SectionEyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-[34px] leading-[1.15] font-extrabold tracking-tight text-[#0F172A] md:text-[48px]"
          >
            Ideas on Automation,{" "}
            <span className="bg-gradient-to-r from-[#1E5BFF] to-[#0B3FA0] bg-clip-text text-transparent">
              Growth & Web
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-[#475569] md:text-[17px]"
          >
            Practical write-ups on AI automation, digital marketing, and web
            development, drawn from what actually works with our clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <PrimaryButton href="#blog-grid">
              Read the Blog
              <ArrowUpRight size={17} />
            </PrimaryButton>
            <div className="text-[14px] text-[#475569]">
              <span className="text-[20px] font-extrabold text-[#0F172A]">
                {ALL_ARTICLES.length}+
              </span>{" "}
              articles published
            </div>
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
              src="https://picsum.photos/seed/mjd-blog-hero/800/900"
              alt="MJD AI Automation blog and insights"
              className="h-[420px] w-full object-cover md:h-[480px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 flex items-center gap-2 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_36px_-12px_rgba(15,23,42,0.25)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF]">
              <BookOpen size={16} />
            </span>
            <div>
              <div className="text-[16px] font-extrabold text-[#0F172A]">
                Fresh
              </div>
              <div className="text-[12px] text-[#64748B]">Insights, weekly</div>
            </div>
          </div>
          <div className="pointer-events-none absolute -z-10 top-8 -right-8 h-40 w-40 rounded-full bg-[#1E5BFF]/15 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
