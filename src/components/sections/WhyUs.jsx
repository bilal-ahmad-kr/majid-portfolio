import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionEyebrow } from "../ui/Shared";
import { pagesService } from "../../lib/cms";

// Fallback static why cards
const FALLBACK_CARDS = [
  {
    icon_name: "UserCheck",
    title: "No Vanishing",
    fear: "\u201cThey\u2019ll disappear mid-project.\u201d",
    solution: "A dedicated point of contact, regular progress updates, and fast communication \u2014 every step of the way.",
  },
  {
    icon_name: "Unlock",
    title: "Full Ownership",
    fear: "\u201cI\u2019ll be locked into their platform.\u201d",
    solution: "You own your website, AI automation, chatbot, CRM, domain, and all business data. No exceptions.",
  },
  {
    icon_name: "Tag",
    title: "Fixed Pricing",
    fear: "\u201cThe price will keep increasing.\u201d",
    solution: "Scope, timeline, and pricing are agreed before development begins \u2014 with no hidden surprises later.",
  },
  {
    icon_name: "LifeBuoy",
    title: "Long-Term Support",
    fear: "\u201cAfter launch, I\u2019ll be on my own.\u201d",
    solution: "Ongoing support and maintenance ensure your website and AI systems keep performing at their best.",
  },
];

function CardIcon({ iconName }) {
  const [Icon, setIcon] = useState(null);
  useEffect(() => {
    if (!iconName) return;
    import("lucide-react").then((mod) => {
      const Comp = mod[iconName];
      if (Comp) setIcon(() => Comp);
    }).catch(() => {});
  }, [iconName]);
  if (!Icon) return <span className="inline-block h-5 w-5 rounded-full bg-white/40" />;
  return <Icon size={22} className="text-white" strokeWidth={2} />;
}

export default function WhyUs({ content } = {}) {
  const [cards, setCards] = useState(FALLBACK_CARDS);

  useEffect(() => {
    // If page content is passed as a prop (from HomePage), use it directly
    if (content?.why_cards?.length) {
      setCards(content.why_cards);
      return;
    }
    // Otherwise fetch from pages table
    pagesService.get("home")
      .then((page) => {
        const why = page?.content?.why_cards;
        if (Array.isArray(why) && why.length) setCards(why);
      })
      .catch(() => {});
  }, [content]);

  return (
    <section className="bg-[#F8FAFC] px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto text-center">
        <SectionEyebrow>Why MJD AI Automation?</SectionEyebrow>
        <h2 className="mx-auto mt-5 max-w-3xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[42px] md:leading-[1.15]">
          The Promises Your Last Agency Broke.
          <br /> We Keep Them.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-[#475569] md:text-[17px]">
          At MJD AI Automation, we deliver reliable AI automation, modern website development, and
          business growth solutions through a transparent, accountable, and client-first approach.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title || i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 text-left shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(30,91,255,0.35)]"
            >
              <div className="absolute inset-0 -z-0 bg-gradient-to-br from-[#1E5BFF]/0 to-[#1E5BFF]/0 transition-all duration-300 group-hover:from-[#1E5BFF]/[0.05] group-hover:to-transparent" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] shadow-[0_10px_20px_-6px_rgba(30,91,255,0.55)] transition-transform duration-300 group-hover:scale-110">
                <CardIcon iconName={card.icon_name || card.icon} />
              </div>
              <h3 className="relative mt-5 text-[17px] font-bold text-[#0F172A]">{card.title}</h3>
              <p className="relative mt-2.5 text-[13px] italic text-[#94A3B8]">{card.fear}</p>
              <p className="relative mt-3 text-[14px] leading-relaxed text-[#475569]">{card.solution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
