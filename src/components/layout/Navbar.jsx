// // import { useState, useRef, useEffect } from "react";
// // import { Link, NavLink } from "react-router-dom";
// // import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

// // // MJD AI Automation brand colors: primary #1E5BFF | navy #0F172A | red #D90429

// // const SERVICES = [
// //   {
// //     name: "AI Automation",
// //     desc: "Workflow & process automation",
// //     path: "/services/ai-automation",
// //   },
// //   {
// //     name: "Digital Marketing",
// //     desc: "Growth-driven campaigns",
// //     path: "/services/digital-marketing",
// //   },
// //   {
// //     name: "AI Integration",
// //     desc: "Embed AI into your stack",
// //     path: "/services/ai-integration",
// //   },
// //   {
// //     name: "Web Development",
// //     desc: "Modern, scalable builds",
// //     path: "/services/web-development",
// //   },
// // ];

// // function Logomark({ size = 34 }) {
// //   return (
// //     <svg
// //       width={size}
// //       height={size}
// //       viewBox="0 0 64 64"
// //       fill="none"
// //       xmlns="http://www.w3.org/2000/svg"
// //     >
// //       <defs>
// //         <linearGradient
// //           id="mjd-blue"
// //           x1="0"
// //           y1="0"
// //           x2="64"
// //           y2="64"
// //           gradientUnits="userSpaceOnUse"
// //         >
// //           <stop offset="0" stopColor="#1E5BFF" />
// //           <stop offset="1" stopColor="#0B3FA0" />
// //         </linearGradient>
// //       </defs>
// //       <path d="M6 50V16l14 12 14-12v34h-7V30.5l-7 6-7-6V50H6z" fill="#0F172A" />
// //       <path
// //         d="M40 14h6v20a8 8 0 0 1-16 0h6a2 2 0 0 0 4 0V14z"
// //         fill="url(#mjd-blue)"
// //       />
// //       <circle cx="52" cy="12" r="2.4" fill="url(#mjd-blue)" />
// //       <circle cx="46" cy="20" r="2.4" fill="url(#mjd-blue)" />
// //     </svg>
// //   );
// // }

// // export default function Navbar() {
// //   const [servicesOpen, setServicesOpen] = useState(false);
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
// //   const dropdownRef = useRef(null);

// //   useEffect(() => {
// //     function handleClick(e) {
// //       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// //         setServicesOpen(false);
// //       }
// //     }
// //     document.addEventListener("mousedown", handleClick);
// //     return () => document.removeEventListener("mousedown", handleClick);
// //   }, []);

// //   const navLinkClass =
// //     "px-4 py-2 text-[14.5px] font-medium rounded-md text-[#0F172A] transition-colors hover:bg-[#F3F5F9]";

// //   return (
// //     <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#E7E9EE]">
// //       <div className="max-w-7xl mx-auto px-5 md:px-8">
// //         <div className="flex items-center justify-between h-[72px]">
// //           {/* Logo */}
// //           <Link to="/" className="flex items-center gap-2.5 shrink-0">
// //             <Logomark />
// //             <div className="leading-tight">
// //               <div className="text-[17px] font-extrabold tracking-tight text-[#0F172A]">
// //                 MJD{" "}
// //                 <span className="bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] bg-clip-text text-transparent">
// //                   AI
// //                 </span>{" "}
// //                 <span className="text-[#D90429]">Automation</span>
// //               </div>
// //               <div className="text-[9px] font-semibold tracking-[0.18em] uppercase text-[#6B7280]">
// //                 Automate · Innovate · Grow
// //               </div>
// //             </div>
// //           </Link>

// //           {/* Desktop links */}
// //           <div className="hidden lg:flex items-center gap-1">
// //             <NavLink
// //               to="/"
// //               end
// //               className={({ isActive }) =>
// //                 navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
// //               }
// //             >
// //               Home
// //             </NavLink>
// //             <NavLink
// //               to="/about"
// //               className={({ isActive }) =>
// //                 navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
// //               }
// //             >
// //               About
// //             </NavLink>

// //             {/* Services dropdown */}
// //             <div className="relative" ref={dropdownRef}>
// //               <button
// //                 onClick={() => setServicesOpen((v) => !v)}
// //                 className="flex items-center gap-1 px-4 py-2 text-[14.5px] font-medium rounded-md text-[#0F172A] transition-colors hover:bg-[#F3F5F9]"
// //                 aria-expanded={servicesOpen}
// //                 aria-haspopup="true"
// //               >
// //                 Services
// //                 <ChevronDown
// //                   size={15}
// //                   className={`text-[#6B7280] transition-transform duration-200 ${
// //                     servicesOpen ? "rotate-180" : "rotate-0"
// //                   }`}
// //                 />
// //               </button>

// //               {servicesOpen && (
// //                 <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[300px] rounded-xl overflow-hidden bg-white border border-[#E7E9EE] shadow-[0_16px_40px_-12px_rgba(15,23,42,0.18)]">
// //                   <div className="px-4 pt-3 pb-2 text-[10px] font-bold tracking-[0.14em] uppercase text-[#6B7280] border-b border-[#E7E9EE]">
// //                     What we do
// //                   </div>
// //                   <div className="py-1.5">
// //                     {SERVICES.map((s) => (
// //                       <Link
// //                         key={s.name}
// //                         to={s.path}
// //                         className="flex items-start gap-3 px-4 py-2.5 transition-colors hover:bg-[#F3F5F9]"
// //                         onClick={() => setServicesOpen(false)}
// //                       >
// //                         <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0]" />
// //                         <span>
// //                           <span className="block text-[14px] font-semibold text-[#0F172A]">
// //                             {s.name}
// //                           </span>
// //                           <span className="block text-[12px] text-[#6B7280]">
// //                             {s.desc}
// //                           </span>
// //                         </span>
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             <NavLink
// //               to="/projects"
// //               className={({ isActive }) =>
// //                 navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
// //               }
// //             >
// //               Projects
// //             </NavLink>
// //             <NavLink
// //               to="/blog"
// //               className={({ isActive }) =>
// //                 navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
// //               }
// //             >
// //               Blogs
// //             </NavLink>
// //           </div>

// //           {/* CTA — plain anchor: every page (Home/About/Projects) has its own #contact section */}
// //           <div className="hidden lg:block">
// //             <a
// //               href="#contact"
// //               className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-[14px] font-semibold text-white bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] shadow-[0_8px_20px_-6px_rgba(30,91,255,0.55)] transition-transform hover:scale-[1.03]"
// //             >
// //               Get In Touch
// //               <ArrowUpRight size={16} />
// //             </a>
// //           </div>

// //           {/* Mobile toggle */}
// //           <button
// //             className="lg:hidden p-2 rounded-md text-[#0F172A]"
// //             onClick={() => setMobileOpen((v) => !v)}
// //             aria-label="Toggle menu"
// //           >
// //             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile menu */}
// //       {mobileOpen && (
// //         <div className="lg:hidden px-5 pb-5 bg-white border-t border-[#E7E9EE]">
// //           <div className="flex flex-col pt-2">
// //             <Link
// //               to="/"
// //               className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
// //               onClick={() => setMobileOpen(false)}
// //             >
// //               Home
// //             </Link>
// //             <Link
// //               to="/about"
// //               className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
// //               onClick={() => setMobileOpen(false)}
// //             >
// //               About
// //             </Link>

// //             <button
// //               className="flex items-center justify-between py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
// //               onClick={() => setMobileServicesOpen((v) => !v)}
// //             >
// //               Services
// //               <ChevronDown
// //                 size={16}
// //                 className={`transition-transform duration-200 ${
// //                   mobileServicesOpen ? "rotate-180" : "rotate-0"
// //                 }`}
// //               />
// //             </button>
// //             {mobileServicesOpen && (
// //               <div className="pl-3 flex flex-col border-b border-[#E7E9EE]">
// //                 {SERVICES.map((s) => (
// //                   <Link
// //                     key={s.name}
// //                     to={s.path}
// //                     className="py-2.5 text-[14px] text-[#6B7280]"
// //                     onClick={() => {
// //                       setMobileServicesOpen(false);
// //                       setMobileOpen(false);
// //                     }}
// //                   >
// //                     {s.name}
// //                   </Link>
// //                 ))}
// //               </div>
// //             )}
// //             <Link
// //               to="/projects"
// //               className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
// //               onClick={() => setMobileOpen(false)}
// //             >
// //               Projects
// //             </Link>
// //             <Link
// //               to="/blog"
// //               className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
// //               onClick={() => setMobileOpen(false)}
// //             >
// //               Blogs
// //             </Link>

// //             <a
// //               href="#contact"
// //               className="mt-4 inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg text-[14px] font-semibold text-white bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0]"
// //               onClick={() => setMobileOpen(false)}
// //             >
// //               Get In Touch
// //               <ArrowUpRight size={16} />
// //             </a>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }
// import { useState, useRef, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   ArrowUpRight,
//   Bot,
//   Database,
//   Megaphone,
//   Search,
//   Users,
//   Filter,
//   RefreshCw,
//   PhoneCall,
// } from "lucide-react";

// // MJD AI Automation brand colors: primary #1E5BFF | navy #0F172A | red #D90429

// const SERVICES = [
//   {
//     icon: Bot,
//     name: "AI Automation & Workflow",
//     desc: "Instant lead response, 24/7",
//     path: "/services/ai-automation-workflow",
//   },
//   {
//     icon: Database,
//     name: "GoHighLevel CRM Setup",
//     desc: "Pipelines, automations, reporting",
//     path: "/services/gohighlevel-crm",
//   },
//   {
//     icon: Megaphone,
//     name: "Facebook Ads Management",
//     desc: "Meta campaigns that book jobs",
//     path: "/services/facebook-ads",
//   },
//   {
//     icon: Search,
//     name: "Google Ads Management",
//     desc: "High-intent search campaigns",
//     path: "/services/google-ads",
//   },
//   {
//     icon: Users,
//     name: "Lead Generation Systems",
//     desc: "Ads, landing pages & follow-up",
//     path: "/services/lead-generation",
//   },
//   {
//     icon: Filter,
//     name: "Sales Funnel Design & Build",
//     desc: "Click to booked estimate",
//     path: "/services/sales-funnels",
//   },
//   {
//     icon: RefreshCw,
//     name: "CRM Setup & Migration",
//     desc: "Move off spreadsheets, cleanly",
//     path: "/services/crm-migration",
//   },
//   {
//     icon: PhoneCall,
//     name: "AI Voice & Appointment Booking",
//     desc: "AI agents that book calendars",
//     path: "/services/ai-voice-booking",
//   },
// ];

// function Logomark({ size = 34 }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 64 64"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         <linearGradient
//           id="mjd-blue"
//           x1="0"
//           y1="0"
//           x2="64"
//           y2="64"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop offset="0" stopColor="#1E5BFF" />
//           <stop offset="1" stopColor="#0B3FA0" />
//         </linearGradient>
//       </defs>
//       <path d="M6 50V16l14 12 14-12v34h-7V30.5l-7 6-7-6V50H6z" fill="#0F172A" />
//       <path
//         d="M40 14h6v20a8 8 0 0 1-16 0h6a2 2 0 0 0 4 0V14z"
//         fill="url(#mjd-blue)"
//       />
//       <circle cx="52" cy="12" r="2.4" fill="url(#mjd-blue)" />
//       <circle cx="46" cy="20" r="2.4" fill="url(#mjd-blue)" />
//     </svg>
//   );
// }

// export default function Navbar() {
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     function handleClick(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setServicesOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   const navLinkClass =
//     "px-4 py-2 text-[14.5px] font-medium rounded-md text-[#0F172A] transition-colors hover:bg-[#F3F5F9]";

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#E7E9EE]">
//       <div className="max-w-7xl mx-auto px-5 md:px-8">
//         <div className="flex items-center justify-between h-[72px]">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2.5 shrink-0">
//             <Logomark />
//             <div className="leading-tight">
//               <div className="text-[17px] font-extrabold tracking-tight text-[#0F172A]">
//                 MJD{" "}
//                 <span className="bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] bg-clip-text text-transparent">
//                   AI
//                 </span>{" "}
//                 <span className="text-[#D90429]">Automation</span>
//               </div>
//               <div className="text-[9px] font-semibold tracking-[0.18em] uppercase text-[#6B7280]">
//                 Automate · Innovate · Grow
//               </div>
//             </div>
//           </Link>

//           {/* Desktop links */}
//           <div className="hidden lg:flex items-center gap-1">
//             <NavLink
//               to="/"
//               end
//               className={({ isActive }) =>
//                 navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
//               }
//             >
//               About
//             </NavLink>

//             {/* Services dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setServicesOpen((v) => !v)}
//                 className="flex items-center gap-1 px-4 py-2 text-[14.5px] font-medium rounded-md text-[#0F172A] transition-colors hover:bg-[#F3F5F9]"
//                 aria-expanded={servicesOpen}
//                 aria-haspopup="true"
//               >
//                 Services
//                 <ChevronDown
//                   size={15}
//                   className={`text-[#6B7280] transition-transform duration-200 ${
//                     servicesOpen ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </button>

//               {servicesOpen && (
//                 <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[560px] rounded-xl overflow-hidden bg-white border border-[#E7E9EE] shadow-[0_16px_40px_-12px_rgba(15,23,42,0.18)]">
//                   <div className="px-4 pt-3 pb-2 text-[10px] font-bold tracking-[0.14em] uppercase text-[#6B7280] border-b border-[#E7E9EE]">
//                     What we do
//                   </div>
//                   <div className="grid grid-cols-2 gap-0.5 p-1.5">
//                     {SERVICES.map((s) => {
//                       const Icon = s.icon;
//                       return (
//                         <Link
//                           key={s.name}
//                           to={s.path}
//                           className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#F3F5F9]"
//                           onClick={() => setServicesOpen(false)}
//                         >
//                           <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1E5BFF]/10 text-[#1E5BFF]">
//                             <Icon size={15} />
//                           </span>
//                           <span>
//                             <span className="block text-[13.5px] font-semibold leading-tight text-[#0F172A]">
//                               {s.name}
//                             </span>
//                             <span className="block mt-0.5 text-[11.5px] text-[#6B7280]">
//                               {s.desc}
//                             </span>
//                           </span>
//                         </Link>
//                       );
//                     })}
//                   </div>
//                   <Link
//                     to="/services"
//                     className="flex items-center justify-between px-4 py-3 text-[13px] font-semibold text-[#1E5BFF] border-t border-[#E7E9EE] transition-colors hover:bg-[#F3F5F9]"
//                     onClick={() => setServicesOpen(false)}
//                   >
//                     View all services
//                     <ArrowUpRight size={14} />
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <NavLink
//               to="/projects"
//               className={({ isActive }) =>
//                 navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
//               }
//             >
//               Projects
//             </NavLink>
//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
//               }
//             >
//               Blogs
//             </NavLink>
//           </div>

//           {/* CTA — plain anchor: every page (Home/About/Projects) has its own #contact section */}
//           <div className="hidden lg:block">
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-[14px] font-semibold text-white bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] shadow-[0_8px_20px_-6px_rgba(30,91,255,0.55)] transition-transform hover:scale-[1.03]"
//             >
//               Get In Touch
//               <ArrowUpRight size={16} />
//             </a>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             className="lg:hidden p-2 rounded-md text-[#0F172A]"
//             onClick={() => setMobileOpen((v) => !v)}
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div className="lg:hidden px-5 pb-5 bg-white border-t border-[#E7E9EE] max-h-[calc(100vh-72px)] overflow-y-auto">
//           <div className="flex flex-col pt-2">
//             <Link
//               to="/"
//               className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
//               onClick={() => setMobileOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
//               onClick={() => setMobileOpen(false)}
//             >
//               About
//             </Link>

//             <button
//               className="flex items-center justify-between py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
//               onClick={() => setMobileServicesOpen((v) => !v)}
//             >
//               Services
//               <ChevronDown
//                 size={16}
//                 className={`transition-transform duration-200 ${
//                   mobileServicesOpen ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </button>
//             {mobileServicesOpen && (
//               <div className="pl-3 flex flex-col border-b border-[#E7E9EE]">
//                 {SERVICES.map((s) => {
//                   const Icon = s.icon;
//                   return (
//                     <Link
//                       key={s.name}
//                       to={s.path}
//                       className="flex items-center gap-2.5 py-2.5 text-[14px] text-[#374151]"
//                       onClick={() => {
//                         setMobileServicesOpen(false);
//                         setMobileOpen(false);
//                       }}
//                     >
//                       <Icon size={15} className="shrink-0 text-[#1E5BFF]" />
//                       {s.name}
//                     </Link>
//                   );
//                 })}
//                 <Link
//                   to="/services"
//                   className="py-2.5 text-[13.5px] font-semibold text-[#1E5BFF]"
//                   onClick={() => {
//                     setMobileServicesOpen(false);
//                     setMobileOpen(false);
//                   }}
//                 >
//                   View all services →
//                 </Link>
//               </div>
//             )}
//             <Link
//               to="/projects"
//               className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
//               onClick={() => setMobileOpen(false)}
//             >
//               Projects
//             </Link>
//             <Link
//               to="/blog"
//               className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
//               onClick={() => setMobileOpen(false)}
//             >
//               Blogs
//             </Link>

//             <a
//               href="#contact"
//               className="mt-4 inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg text-[14px] font-semibold text-white bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0]"
//               onClick={() => setMobileOpen(false)}
//             >
//               Get In Touch
//               <ArrowUpRight size={16} />
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Bot,
  Database,
  Megaphone,
  Search,
  Users,
  Filter,
  RefreshCw,
  PhoneCall,
  Code2,
} from "lucide-react";

import { usePublishedServices } from "../../hooks/usePublicData";
import * as LucideIcons from "lucide-react";

// MJD AI Automation brand colors: primary #1E5BFF | navy #0F172A | red #D90429

const FALLBACK_SERVICES = [
  { icon: "Bot", name: "AI Automation & Workflow", desc: "Instant lead response, 24/7", slug: "ai-automation-workflow" },
  { icon: "Database", name: "GoHighLevel CRM Setup", desc: "Pipelines, automations, reporting", slug: "gohighlevel-crm" },
];

function Logomark({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="mjd-blue"
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1E5BFF" />
          <stop offset="1" stopColor="#0B3FA0" />
        </linearGradient>
      </defs>
      <path d="M6 50V16l14 12 14-12v34h-7V30.5l-7 6-7-6V50H6z" fill="#0F172A" />
      <path
        d="M40 14h6v20a8 8 0 0 1-16 0h6a2 2 0 0 0 4 0V14z"
        fill="url(#mjd-blue)"
      />
      <circle cx="52" cy="12" r="2.4" fill="url(#mjd-blue)" />
      <circle cx="46" cy="20" r="2.4" fill="url(#mjd-blue)" />
    </svg>
  );
}

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { services: fetchedServices, loading } = usePublishedServices();
  const services = !loading && fetchedServices.length > 0 ? fetchedServices : FALLBACK_SERVICES;

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navLinkClass =
    "px-4 py-2 text-[14.5px] font-medium rounded-md text-[#0F172A] transition-colors hover:bg-[#F3F5F9]";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#E7E9EE]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <Logomark />
            <div className="leading-tight">
              <div className="text-[17px] font-extrabold tracking-tight text-[#0F172A]">
                MJD{" "}
                <span className="bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] bg-clip-text text-transparent">
                  AI
                </span>{" "}
                <span className="text-[#D90429]">Automation</span>
              </div>
              <div className="text-[9px] font-semibold tracking-[0.18em] uppercase text-[#6B7280]">
                Automate · Innovate · Grow
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
              }
            >
              About
            </NavLink>

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 px-4 py-2 text-[14.5px] font-medium rounded-md text-[#0F172A] transition-colors hover:bg-[#F3F5F9]"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  size={15}
                  className={`text-[#6B7280] transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[560px] rounded-xl overflow-hidden bg-white border border-[#E7E9EE] shadow-[0_16px_40px_-12px_rgba(15,23,42,0.18)]">
                  <div className="px-4 pt-3 pb-2 text-[10px] font-bold tracking-[0.14em] uppercase text-[#6B7280] border-b border-[#E7E9EE]">
                    What we do
                  </div>
                  <div className="grid grid-cols-2 gap-0.5 p-1.5">
                    {services.map((s) => {
                      const IconName = s.icon || "Code2";
                      const Icon = LucideIcons[IconName] || LucideIcons.Code2;
                      return (
                        <Link
                          key={s.slug || s.title}
                          to={`/services/${s.slug}`}
                          className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#F3F5F9]"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1E5BFF]/10 text-[#1E5BFF]">
                            <Icon size={15} />
                          </span>
                          <span>
                            <span className="block text-[13.5px] font-semibold leading-tight text-[#0F172A]">
                              {s.title || s.name}
                            </span>
                            <span className="block mt-0.5 text-[11.5px] text-[#6B7280]">
                              {s.short_description || s.desc}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    to="/services"
                    className="flex items-center justify-between px-4 py-3 text-[13px] font-semibold text-[#1E5BFF] border-t border-[#E7E9EE] transition-colors hover:bg-[#F3F5F9]"
                    onClick={() => setServicesOpen(false)}
                  >
                    View all services
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                navLinkClass + (isActive ? " bg-[#F3F5F9] text-[#1E5BFF]" : "")
              }
            >
              Blogs
            </NavLink>
          </div>

          {/* CTA — plain anchor: every page (Home/About/Projects) has its own #contact section */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-[14px] font-semibold text-white bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] shadow-[0_8px_20px_-6px_rgba(30,91,255,0.55)] transition-transform hover:scale-[1.03]"
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-[#0F172A]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden px-5 pb-5 bg-white border-t border-[#E7E9EE] max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="flex flex-col pt-2">
            <Link
              to="/"
              className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <button
              className="flex items-center justify-between py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 flex flex-col border-b border-[#E7E9EE]">
                {services.map((s) => {
                  const IconName = s.icon || "Code2";
                  const Icon = LucideIcons[IconName] || LucideIcons.Code2;
                  return (
                    <Link
                      key={s.slug || s.title}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-2.5 py-2.5 text-[14px] text-[#374151]"
                      onClick={() => {
                        setMobileServicesOpen(false);
                        setMobileOpen(false);
                      }}
                    >
                      <Icon size={15} className="shrink-0 text-[#1E5BFF]" />
                      {s.title || s.name}
                    </Link>
                  );
                })}
                <Link
                  to="/services"
                  className="py-2.5 text-[13.5px] font-semibold text-[#1E5BFF]"
                  onClick={() => {
                    setMobileServicesOpen(false);
                    setMobileOpen(false);
                  }}
                >
                  View all services →
                </Link>
              </div>
            )}
            <Link
              to="/projects"
              className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="py-3 text-[15px] font-medium text-[#0F172A] border-b border-[#E7E9EE]"
              onClick={() => setMobileOpen(false)}
            >
              Blogs
            </Link>

            <a
              href="#contact"
              className="mt-4 inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg text-[14px] font-semibold text-white bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0]"
              onClick={() => setMobileOpen(false)}
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}