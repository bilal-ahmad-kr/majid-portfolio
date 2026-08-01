import { motion } from "framer-motion";
import { ArrowUpRight, PhoneMissed, Zap } from "lucide-react";
import { SectionEyebrow, PrimaryButton } from "../ui/Shared";

const FALLBACK_CONTENT = {
  story_eyebrow: "Company Story",
  story_title: "Built to close the gap between <span class=\"text-[#94A3B8] line-through decoration-[#D90429]/70 decoration-4\">a lead going quiet</span> and a job on the books.",
  story_description1: "MJD AI Automation was founded after seeing the same problem repeat across the home service industry: strong companies were losing winnable jobs simply because leads went unanswered for hours, CRMs sat half-configured, and ad spend wasn't tied to real booked revenue.",
  story_description2: "We built MJD to close that gap — pairing AI-driven response systems with CRM and advertising execution so no lead is ever left waiting.",
  story_timeline_start_label: "Where we started",
  story_timeline_start_text: "Automation work for a single roofing company, solving one team's speed-to-lead problem.",
  story_timeline_now_label: "Where we are now",
  story_timeline_now_text: "A complete growth system, built for home service brands across the United States.",
  story_button_text: "Get Your Growth System",
  story_image_url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
};

export default function CompanyStory({ content }) {
  const data = content || FALLBACK_CONTENT;

  return (
    <section className="relative overflow-hidden bg-[#0F172A] px-5 py-20 md:py-28">
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-[#1E5BFF]/20 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-[#D90429]/10 blur-[100px]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow>{data.story_eyebrow}</SectionEyebrow>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left: narrative */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[32px] leading-[1.15] font-extrabold tracking-tight text-white md:text-[44px]"
              dangerouslySetInnerHTML={{ __html: data.story_title }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-[#CBD5E1] md:text-[17px]"
            >
              {data.story_description1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-[#CBD5E1] md:text-[17px]"
            >
              {data.story_description2}
            </motion.p>

            {/* Origin -> Today timeline, since the copy is a real growth arc */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mt-10 max-w-xl border-l border-white/15 pl-6"
            >
              <div className="relative pb-8">
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-[#D90429] ring-4 ring-[#0F172A]" />
                <div className="text-xs font-semibold uppercase tracking-wider text-[#D90429]">
                  {data.story_timeline_start_label}
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-[#E2E8F0]">
                  {data.story_timeline_start_text}
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-[#1E5BFF] ring-4 ring-[#0F172A]" />
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1E5BFF]">
                  {data.story_timeline_now_label}
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-[#E2E8F0]">
                  {data.story_timeline_now_text}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <PrimaryButton href="#contact">
                {data.story_button_text}
                <ArrowUpRight size={17} />
              </PrimaryButton>
            </motion.div>
          </div>

          {/* Right: image + signature "before/after" response card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:sticky lg:top-24"
          >
            <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
              <img
                src={data.story_image_url}
                alt="On-site technician"
                className="h-[440px] w-full object-cover md:h-[500px]"
              />
            </div>

            {/* Signature element: missed-call -> instant-response contrast card */}
            <div className="absolute -bottom-10 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FEE2E2] text-[#D90429]">
                    <PhoneMissed size={16} />
                  </span>
                  <div>
                    <div className="text-[11px] font-medium text-[#94A3B8]">Before MJD</div>
                    <div className="text-sm font-bold text-[#0F172A]">Hours unanswered</div>
                  </div>
                </div>

                <div className="h-8 w-px bg-[#E2E8F0]" />

                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DBEAFE] text-[#1E5BFF]">
                    <Zap size={16} />
                  </span>
                  <div>
                    <div className="text-[11px] font-medium text-[#94A3B8]">With MJD</div>
                    <div className="text-sm font-bold text-[#0F172A]">&lt; 60 sec reply</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -z-10 top-8 -right-8 h-40 w-40 rounded-full bg-[#1E5BFF]/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}