import { motion } from "framer-motion";
import {
  Target,
  Compass,
  HardHat,
  Boxes,
  Zap,
  BarChart3,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { SectionEyebrow } from "../ui/Shared";
import * as LucideIcons from "lucide-react";

const FALLBACK_VALUE_PROPS = [
  {
    icon: "HardHat",
    title: "Industry Focus",
    detail: "We specialize in home service businesses — roofing, HVAC, plumbing, solar, and more — so our systems are built around how these companies actually sell.",
  },
  {
    icon: "Boxes",
    title: "One Growth System, Not Five Vendors",
    detail: "AI automation, CRM, and ads are engineered to work together instead of as disconnected tools.",
  },
  {
    icon: "Zap",
    title: "Speed-to-Lead",
    detail: "AI-powered follow-up engages new leads within seconds, 24 hours a day, so fewer opportunities slip away.",
  },
  {
    icon: "BarChart3",
    title: "Transparent, Revenue-Focused Reporting",
    detail: "We track booked calls and closed jobs, not just clicks and impressions.",
  },
  {
    icon: "TrendingUp",
    title: "Built to Scale",
    detail: "Every system we deploy is designed to support new services, new locations, and new team members as you grow.",
  },
];

const FALLBACK_CONTENT = {
  mission_title: "Our Mission",
  mission_text: "To give home service businesses the same speed, consistency, and intelligence that enterprise companies use to win customers — through AI automation, CRM systems, and performance marketing built specifically for their industry.",
  vision_title: "Our Vision",
  vision_text: "To become the leading AI-powered growth partner for home service companies across North America, known for turning marketing spend into predictable, booked revenue.",
  why_eyebrow: "Why Choose Us",
  why_title: "Systems built for how home service companies actually sell.",
  team_eyebrow: "The Team",
  team_title: "Led by a founder who's been in the field.",
  team_name: "Founder & CEO",
  team_role: "MJD AI Automation",
  team_bio: "Headshot and bio to be added.",
  team_photo: null
};

export default function Mission({ content }) {
  const data = content || FALLBACK_CONTENT;
  const valueProps = content?.valueProps || FALLBACK_VALUE_PROPS;

  return (
    <section id="about" className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 text-white md:p-10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] shadow-[0_10px_20px_-6px_rgba(30,91,255,0.55)]">
              <Target size={22} className="text-white" />
            </span>
            <h2 className="mt-6 text-[24px] font-extrabold tracking-tight md:text-[28px]">
              {data.mission_title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/75 md:text-[16.5px]">
              {data.mission_text}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 md:p-10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D90429]/10 text-[#D90429]">
              <Compass size={22} />
            </span>
            <h2 className="mt-6 text-[24px] font-extrabold tracking-tight text-[#0F172A] md:text-[28px]">
              {data.vision_title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#475569] md:text-[16.5px]">
              {data.vision_text}
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>{data.why_eyebrow}</SectionEyebrow>
            <h2 className="mt-5 max-w-2xl text-[28px] font-extrabold tracking-tight text-[#0F172A] md:text-[34px]">
              {data.why_title}
            </h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {valueProps.map((item, index) => {
              const Icon = LucideIcons[item.icon] || LucideIcons.HardHat;
              const isLast = index === valueProps.length - 1;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className={`flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white px-5 py-5 ${
                    isLast ? "md:col-span-2" : ""
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1E5BFF]/10 text-[#1E5BFF]">
                    <Icon size={20} />
                  </span>
                  <div>
                    <div className="text-[15px] font-semibold text-[#0F172A]">
                      {item.title}
                    </div>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#64748B]">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>{data.team_eyebrow}</SectionEyebrow>
            <h2 className="mt-5 text-[28px] font-extrabold tracking-tight text-[#0F172A] md:text-[34px]">
              {data.team_title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex max-w-md items-center gap-5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-6"
          >
            {data.team_photo ? (
              <img src={data.team_photo} alt={data.team_name} className="h-20 w-20 shrink-0 rounded-full object-cover" />
            ) : (
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF]">
                <UserRound size={32} />
              </span>
            )}
            <div>
              <div className="text-[16px] font-bold text-[#0F172A]">
                {data.team_name}
              </div>
              <div className="text-[13.5px] font-medium text-[#1E5BFF]">
                {data.team_role}
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#64748B]">
                {data.team_bio}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}