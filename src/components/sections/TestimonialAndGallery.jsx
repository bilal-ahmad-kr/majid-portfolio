import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionEyebrow } from "../ui/Shared";
import { testimonialsService, pagesService } from "../../lib/cms";

// Fallback static data
const FALLBACK_TESTIMONIALS = [
  {
    id: "ft1", name: "Sarah Whitfield", role: "Founder, Whitfield Realty",
    quote: "MJD automated our entire lead follow-up process. What used to take our team 15 hours a week now runs itself.",
    avatar_url: "https://i.pravatar.cc/150?img=32", rating: 5,
  },
  {
    id: "ft2", name: "Daniel Cho", role: "COO, Vantage Logistics",
    quote: "They didn\u2019t just build us a chatbot, they rebuilt how our dispatch team works. Responsive, transparent, and genuinely invested in our results.",
    avatar_url: "https://i.pravatar.cc/150?img=12", rating: 5,
  },
  {
    id: "ft3", name: "James Okafor", role: "CEO, BrightPath Realty",
    quote: "Our new site plus their automation stack tripled our qualified leads in under two months. The ROI was obvious within weeks.",
    avatar_url: "https://i.pravatar.cc/150?img=51", rating: 5,
  },
];

const FALLBACK_IMAGES = [
  { src: "https://picsum.photos/seed/mjd-float1/500/650", className: "w-[46%] top-0 left-0", delay: 0 },
  { src: "https://picsum.photos/seed/mjd-float2/500/400", className: "w-[46%] top-6 right-0", delay: 0.6 },
  { src: "https://picsum.photos/seed/mjd-float3/500/420", className: "w-[42%] bottom-0 left-6", delay: 1.1 },
  { src: "https://picsum.photos/seed/mjd-float4/500/560", className: "w-[42%] bottom-4 right-4", delay: 1.6 },
];

export default function TestimonialAndGallery() {
  const [index, setIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);
  const [floatingImages, setFloatingImages] = useState(FALLBACK_IMAGES);

  useEffect(() => {
    // Fetch testimonials
    testimonialsService
      .listPublished()
      .then((data) => { if (data?.length) setTestimonials(data); })
      .catch(() => {});

    // Fetch floating images from page content
    pagesService.get("home")
      .then((page) => {
        const imgs = page?.content?.floating_images;
        if (Array.isArray(imgs) && imgs.length) setFloatingImages(imgs);
      })
      .catch(() => {});
  }, []);

  const t = testimonials[index] || testimonials[0];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const avatar = t?.avatar_url || t?.avatar;

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
                  {t?.quote}
                </p>
                <div className="mt-7 flex items-center gap-3.5">
                  {avatar && (
                    <img
                      src={avatar}
                      alt={t?.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow"
                    />
                  )}
                  <div>
                    <div className="text-[14.5px] font-bold text-[#0F172A]">{t?.name}</div>
                    <div className="text-[13px] text-[#64748B]">{t?.role || t?.designation}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t?.rating || 5 }).map((_, i) => (
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
                {testimonials.map((_, i) => (
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
          {floatingImages.map((img, i) => (
            <motion.div
              key={i}
              className={`absolute overflow-hidden rounded-2xl shadow-[0_20px_45px_-15px_rgba(15,23,42,0.35)] ${img.className}`}
              style={{ aspectRatio: "4/5" }}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: img.delay || 0,
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
