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
  { Icon: FaYoutube, pos: "top-24 left-12", color: "#f00" },
  { Icon: FaTwitter, pos: "top-24 right-12", color: "#000" },
  { Icon: FaInstagram, pos: "bottom-24 left-12", color: "#e1306c" },
  { Icon: SiTiktok, pos: "bottom-24 right-12", color: "#000" },
  { Icon: FaLinkedinIn, pos: "top-40 left-32", color: "#0a66c2" },
  { Icon: FaPinterestP, pos: "bottom-40 left-40", color: "#e60023" },
];

// MOBILE: Color Icons BELOW CTA
const mobileIcons = [
  { Icon: FaYoutube, color: "#f00" },
  { Icon: FaTwitter, color: "#000" },
  { Icon: FaInstagram, color: "#e1306c" },
  { Icon: SiTiktok, color: "#000" },
  { Icon: FaLinkedinIn, color: "#0a66c2" },
  { Icon: FaPinterestP, color: "#e60023" },
  { Icon: FaFacebookF, color: "#1877f2" },
];

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden  min-h-[100vh] py-20 sm:pt-20 px-4 sm:px-6 flex flex-col justify-center">
      {/*  Background en grille*/}
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

      {/* DESKTOP: icone animer */}
      <div className="hidden lg:block">
        {desktopIcons.map((item, idx) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={idx}
              className={`absolute ${item.pos} bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md hover:scale-110 transition-transform`}
              initial={{ y: 0, rotate: 0 }}
              animate={{ y: [-12, 0, -12], rotate: [0, 3, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.25,
              }}
            >
              <Icon className="w-8 h-8" style={{ color: item.color }} />
            </motion.div>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center max-w-2xl mx-auto py-8 sm:py-12 lg:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
          Your social media
          <br className="sm:hidden" />
          <span className="block mt-1">workspace</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Share consistently without the chaos
        </p>

        {/* FORM */}
        <form className="mt-6 w-full max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email..."
            required
            className="flex-1 px-5 py-3 text-base rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white font-medium text-base rounded-full hover:bg-green-600 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Get started now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          By entering your email, you agree to receive emails from AsyPost.
        </p>

        {/* MOBILE: COLOR ICONS BELOW */}
        <div className="mt-8 flex justify-center items-center gap-5 flex-wrap lg:hidden">
          {mobileIcons.map(({ Icon, color }, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm"
            >
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;