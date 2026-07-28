import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionEyebrow } from "./ui/Shared";
import { TESTIMONIALS, FLOATING_IMAGES } from "../data/content";

export default function TestimonialAndGallery() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left: testimonial */}
        <div>
          <SectionEyebrow>Client Voices</SectionEyebrow>
          <h2 className="mt-5 text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[38px]">
            Trusted by teams who needed
            <br className="hidden md:block" /> more than promises.
          </h2>

          <div className="relative mt-9 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-8 md:p-10">
            <Quote className="text-[#1E5BFF]/25" size={40} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mt-4 text-[16.5px] leading-relaxed text-[#334155] md:text-[18px]">
                  {t.quote}
                </p>
                <div className="mt-7 flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow"
                  />
                  <div>
                    <div className="text-[14.5px] font-bold text-[#0F172A]">{t.name}</div>
                    <div className="text-[13px] text-[#64748B]">{t.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="#1E5BFF" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0F172A] transition-colors hover:bg-[#1E5BFF] hover:text-white hover:border-[#1E5BFF]"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0F172A] transition-colors hover:bg-[#1E5BFF] hover:text-white hover:border-[#1E5BFF]"
              >
                <ChevronRight size={16} />
              </button>
              <div className="ml-2 flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-5 bg-[#1E5BFF]" : "w-1.5 bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: floating images */}
        <div className="relative mx-auto h-[420px] w-full max-w-md md:h-[480px]">
          {FLOATING_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              className={`absolute overflow-hidden rounded-2xl shadow-[0_20px_45px_-15px_rgba(15,23,42,0.35)] ${img.className}`}
              style={{ aspectRatio: "4/5" }}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: img.delay,
              }}
            >
              <img src={img.src} alt="" className="h-full w-full object-cover" />
            </motion.div>
          ))}
          <div className="pointer-events-none absolute -z-10 top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E5BFF]/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
