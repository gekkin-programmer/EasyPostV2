// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaFacebookF,
  FaThreads,
} from "react-icons/fa6";
import { SiTiktok, SiMedium, SiTwitch } from "react-icons/si";

// =============================
// FLOATING ICONS – 12 total, balanced & responsive
// =============================
const desktopIcons = [
  // Top Row
  { Icon: FaYoutube,     pos: "top-12 left-4   md:top-16 md:left-8   lg:top-20 lg:left-12",   color: "#ff0000" },
  { Icon: FaTwitter,     pos: "top-12 right-4  md:top-16 md:right-8  lg:top-20 lg:right-12",  color: "#000000" },
  { Icon: FaThreads,     pos: "top-12 left-24  md:top-16 md:left-32  lg:top-20 lg:left-48",  color: "#000000" },

  // Middle Row (vertically centered)
  { Icon: FaLinkedinIn,  pos: "top-1/2 left-8  -translate-y-1/2 md:left-12 lg:left-24",               color: "#0a66c2" },
  { Icon: SiMedium,      pos: "top-1/2 right-8 -translate-y-1/2 md:right-12 lg:right-24",              color: "#00ab6c" },
  { Icon: FaFacebookF,   pos: "top-1/2 left-32 -translate-y-1/2 md:left-48 lg:left-64",              color: "#1877f2" },

  // Bottom Row
  { Icon: FaInstagram,   pos: "bottom-12 left-4   md:bottom-16 md:left-8   lg:bottom-20 lg:left-12", color: "#e1306c" },
  { Icon: SiTiktok,      pos: "bottom-12 right-4  md:bottom-16 md:right-8  lg:bottom-20 lg:right-12",color: "#000000" },
  { Icon: SiTwitch,      pos: "bottom-12 left-24  md:bottom-16 md:left-32  lg:bottom-20 lg:left-48",color: "#9146ff" },

  // Extra floating fillers
  { Icon: FaPinterestP,  pos: "top-32 left-48  md:top-40 md:left-64  lg:top-48 lg:left-80",   color: "#e60023" },
  { Icon: FaYoutube,     pos: "bottom-32 right-48 md:bottom-40 md:right-64 lg:bottom-48 lg:right-80", color: "#ff0000" },
  { Icon: FaThreads,     pos: "top-48 right-32 md:top-56 md:right-48 lg:top-64 lg:right-64", color: "#000000" },
];

// Random delay helper
const randomDelay = (idx: number) => idx * 0.2 + Math.random() * 0.3;

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden min-h-screen py-16 md:py-20 lg:py-0 px-4 sm:px-6 flex flex-col justify-center">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-30 lg:opacity-70 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* FLOATING ICONS – Hidden on mobile */}
      <div className="hidden md:block">
        {desktopIcons.map((item, idx) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={idx}
              className={`absolute ${item.pos} bg-white dark:bg-gray-800 p-2 md:p-3 rounded-xl shadow-md hover:scale-110 transition-transform cursor-pointer`}
              initial={{ y: 0, rotate: 0, scale: 1 }}
              animate={{
                y: [-12, 0, -12],
                rotate: [0, 3, -2, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: randomDelay(idx),
              }}
              whileHover={{ scale: 1.25, rotate: 8 }}
            >
              <Icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: item.color }} />
            </motion.div>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center max-w-2xl mx-auto py-8 md:py-12 lg:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
          Your social media
          <br className="sm:hidden" />
          <span className="block mt-1 md:mt-2">workspace</span>
        </h1>

        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Share consistently without the chaos
        </p>

        {/* FORM */}
        <form className="mt-8 md:mt-8 w-full mx-auto flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            placeholder="Enter your email..."
            required
            className="flex-1 px-5 py-3 md:py-4 text-base md:text-lg rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 md:py-4 bg-[#3C48F6] text-white font-medium text-base md:text-lg rounded-full hover:bg-green-600 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Get started now
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500 dark:text-gray-400">
          By entering your email, you agree to receive emails from EAsyPost.
        </p>
      </div>
    </section>
  );
};

export default Hero;