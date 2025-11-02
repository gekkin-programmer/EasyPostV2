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
} from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

// DESKTOP: Floating Icons (Hidden on Mobile)
const desktopIcons = [
  { Icon: FaYoutube, pos: "top-24 left-4 lg:left-12", color: "#f00" },
  { Icon: FaTwitter, pos: "top-24 right-4 lg:right-12", color: "#000" },
  { Icon: FaInstagram, pos: "bottom-24 left-4 lg:left-12", color: "#e1306c" },
  { Icon: SiTiktok, pos: "bottom-24 right-4 lg:right-12", color: "#000" },
  { Icon: FaLinkedinIn, pos: "top-40 left-8 lg:left-32", color: "#0a66c2" },
  { Icon: FaPinterestP, pos: "bottom-40 left-12 lg:left-40", color: "#e60023" },
];

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden min-h-[100vh] py-16 md:py-20 lg:py-0 px-4 sm:px-6 flex flex-col justify-center">
      {/* Background en grille */}
      <div
        className="absolute inset-0 opacity-30 lg:opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* FLOATING ICONS - Adjusted for tablet */}
      <div className="block">
        {desktopIcons.map((item, idx) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={idx}
              className={`absolute ${item.pos} bg-white dark:bg-gray-800 p-2 md:p-3 rounded-xl shadow-md hover:scale-110 transition-transform`}
              initial={{ y: 0, rotate: 0 }}
              animate={{ y: [-12, 0, -12], rotate: [0, 3, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.25,
              }}
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

        {/* FORM - Better tablet sizing */}
        <form className="mt-6 md:mt-8 w-full max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email..."
            required
            className="flex-1 px-5 py-3 md:py-4 text-base md:text-lg rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 md:py-4 bg-green-500 text-white font-medium text-base md:text-lg rounded-full hover:bg-green-600 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Get started now
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500 dark:text-gray-400">
          By entering your email, you agree to receive emails from AsyPost.
        </p>
      </div>
    </section>
  );
};

export default Hero;