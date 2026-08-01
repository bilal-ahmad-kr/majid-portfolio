// // import { motion } from "framer-motion";
// // import { ArrowUpRight } from "lucide-react";
// // import { SectionEyebrow, PrimaryButton, SecondaryButton } from "../ui/Shared";

// // export default function Hero() {
// //   return (
// //     <section
// //       id="home"
// //       className="relative overflow-hidden bg-[#F8FAFC] px-5 pt-20 pb-24 md:pt-28 md:pb-32"
// //     >
// //       {/* ambient gradient blobs */}
// //       <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#1E5BFF]/10 blur-3xl" />
// //       <div className="pointer-events-none absolute top-40 -left-24 h-[320px] w-[320px] rounded-full bg-[#D90429]/5 blur-3xl" />
// //       <div
// //         className="pointer-events-none absolute inset-0 opacity-[0.35]"
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(#0F172A08 1px, transparent 1px), linear-gradient(90deg, #0F172A08 1px, transparent 1px)",
// //           backgroundSize: "56px 56px",
// //         }}
// //       />

// //       <div className="relative max-w-4xl mx-auto text-center">
// //         <motion.div
// //           initial={{ opacity: 0, y: 12 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="flex justify-center"
// //         >
// //           <SectionEyebrow>AI Automation · Web Development · Growth</SectionEyebrow>
// //         </motion.div>

// //         <motion.h1
// //           initial={{ opacity: 0, y: 16 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.1 }}
// //           className="mt-6 text-[38px] leading-[1.12] font-extrabold tracking-tight text-[#0F172A] md:text-[58px]"
// //         >
// //           Automate Smarter.
// //           <br />
// //           Build Faster.{" "}
// //           <span className="bg-gradient-to-r from-[#1E5BFF] to-[#0B3FA0] bg-clip-text text-transparent">
// //             Grow Without Limits.
// //           </span>
// //         </motion.h1>

// //         <motion.p
// //           initial={{ opacity: 0, y: 16 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.2 }}
// //           className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed text-[#475569] md:text-[18px]"
// //         >
// //           MJD AI Automation helps growing businesses replace manual work with
// //           intelligent systems, launch high-converting websites, and scale with
// //           a transparent, client-first process.
// //         </motion.p>

// //         <motion.div
// //           initial={{ opacity: 0, y: 16 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.3 }}
// //           className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
// //         >
// //           <SecondaryButton href="#portfolio">
// //             See Our Work
// //             <ArrowUpRight size={17} />
// //           </SecondaryButton>
// //           <PrimaryButton href="#contact">
// //             Start Your Project
// //             <ArrowUpRight size={17} />
// //           </PrimaryButton>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { SectionEyebrow, PrimaryButton, SecondaryButton } from "../ui/Shared";

// const heroImages = [
//   "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
//   "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
//   "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80",
//   "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
//   "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1920&q=80",
// ];

// export default function Hero() {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % heroImages.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden px-5 pt-20 pb-24 md:pt-28 md:pb-32"
//     >
//       {/* Background Image Slider */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentImage}
//           initial={{ opacity: 0, scale: 1 }}
//           animate={{ opacity: 1, scale: 1.08 }}
//           exit={{ opacity: 0 }}
//           transition={{
//             duration: 1.5,
//             ease: "easeInOut",
//           }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${heroImages[currentImage]})`,
//           }}
//         />
//       </AnimatePresence>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-[#0F172A]/75" />

//       {/* Gradient Blobs */}
//       <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#1E5BFF]/15 blur-3xl" />
//       <div className="pointer-events-none absolute top-40 -left-24 h-[320px] w-[320px] rounded-full bg-[#D90429]/10 blur-3xl" />

//       {/* Grid */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.08]"
//         style={{
//           backgroundImage:
//             "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
//           backgroundSize: "56px 56px",
//         }}
//       />

//       <div className="relative max-w-4xl mx-auto text-center z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex justify-center"
//         >
//           <SectionEyebrow>
//             AI Automation · Web Development · Growth
//           </SectionEyebrow>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mt-6 text-[38px] leading-[1.12] font-extrabold tracking-tight text-white md:text-[58px]"
//         >
//           Automate Smarter.
//           <br />
//           Build Faster.{" "}
//           <span className="bg-gradient-to-r from-[#4EA1FF] to-[#82B8FF] bg-clip-text text-transparent">
//             Grow Without Limits.
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed text-slate-200 md:text-[18px]"
//         >
//           MJD AI Automation helps growing businesses replace manual work with
//           intelligent systems, launch high-converting websites, and scale with
//           a transparent, client-first process.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
//         >
//           <SecondaryButton href="#portfolio">
//             See Our Work
//             <ArrowUpRight size={17} />
//           </SecondaryButton>

//           <PrimaryButton href="#contact">
//             Start Your Project
//             <ArrowUpRight size={17} />
//           </PrimaryButton>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow, PrimaryButton, SecondaryButton } from "../ui/Shared";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-20 pb-24 md:pt-28 md:pb-32"
    >
      <img
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        alt="AI Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0F172A]/75" />

      {/* Ambient Gradient Blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#1E5BFF]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-24 h-[320px] w-[320px] rounded-full bg-[#D90429]/10 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <SectionEyebrow>
            The Growth System Behind America's Fastest-Growing Home Service Companies
          </SectionEyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-[38px] leading-[1.12] font-extrabold tracking-tight text-white md:text-[58px]"
        >
          AI Automation,  
          <br />
          CRM & Paid Advertising —{" "}
          <span className="bg-gradient-to-r from-[#4EA1FF] to-[#82B8FF] bg-clip-text text-transparent">
            Engineered to Fill Your Calendar with Qualified Jobs
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed text-slate-200 md:text-[18px]"
        >
          MJD AI Automation helps home service businesses — from roofing to HVAC, plumbing to solar — capture every lead, respond in seconds, and convert more calls into booked jobs. We combine AI automation, CRM systems, and performance advertising into a single growth system built for CEOs who want measurable results, not marketing reports.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <SecondaryButton href="#portfolio">
            View Case Studies
            <ArrowUpRight size={17} />
          </SecondaryButton>

          <PrimaryButton href="#contact">
            Book Free Strategy Call
            <ArrowUpRight size={17} />
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
