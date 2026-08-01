import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, Timer, PhoneCall, LineChart } from "lucide-react";
import { SectionEyebrow, PrimaryButton } from "../ui/Shared";
import * as LucideIcons from "lucide-react";

const FALLBACK_PILLARS = [
  {
    icon: "Boxes",
    label: "One accountable partner",
    detail: "Instead of five disconnected vendors",
  },
  {
    icon: "Timer",
    label: "AI-powered speed-to-lead",
    detail: "Instant response, day or night",
  },
  {
    icon: "PhoneCall",
    label: "CRM built to convert",
    detail: "Every call tracked to a booked job",
  },
  {
    icon: "LineChart",
    label: "Ad spend that reports back",
    detail: "Tied to real booked revenue",
  },
];

const FALLBACK_CONTENT = {
  hero_eyebrow: "Who We Are",
  hero_title: "A Growth Systems Company, Not a <br/><span class=\"bg-gradient-to-r from-[#1E5BFF] to-[#0B3FA0] bg-clip-text text-transparent\">Marketing Agency</span>",
  hero_description: "MJD AI Automation is built for home service businesses. We design and install the complete infrastructure a home service company needs to generate leads, respond instantly, and convert more calls into booked jobs — combining AI automation, CRM architecture, and paid advertising expertise into one accountable partner for CEOs and founders.",
  hero_button_text: "Get Your Growth System",
  hero_image_url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80",
};

export default function AboutIntro({ content }) {
  const data = content || FALLBACK_CONTENT;
  const pillars = content?.pillars || FALLBACK_PILLARS;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 pt-16 pb-24 md:pt-24 md:pb-32">
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
            <SectionEyebrow>{data.hero_eyebrow}</SectionEyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-[34px] leading-[1.15] font-extrabold tracking-tight text-[#0F172A] md:text-[48px]"
            dangerouslySetInnerHTML={{ __html: data.hero_title }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-[#475569] md:text-[17px]"
          >
            {data.hero_description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <PrimaryButton href="#contact">
              {data.hero_button_text}
              <ArrowUpRight size={17} />
            </PrimaryButton>
          </motion.div>

          {/* Pillars grid — encodes the four disciplines named in the copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {pillars.map(({ icon, label, detail }) => {
              const Icon = LucideIcons[icon] || LucideIcons.Boxes;
              return (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF]">
                    <Icon size={16} />
                  </span>
                  <div>
                    <div className="text-[13.5px] font-semibold text-[#0F172A]">{label}</div>
                    <div className="text-[12.5px] text-[#64748B]">{detail}</div>
                  </div>
                </div>
              );
            })}
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
              src={data.hero_image_url}
              alt="Team reviewing a client's dashboard"
              className="h-[420px] w-full object-cover md:h-[480px]"
            />
          </div>

          <div className="pointer-events-none absolute -z-10 top-8 -right-8 h-40 w-40 rounded-full bg-[#1E5BFF]/15 blur-2xl" />
          <div className="pointer-events-none absolute -z-10 bottom-4 -left-8 h-32 w-32 rounded-full bg-[#D90429]/10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}