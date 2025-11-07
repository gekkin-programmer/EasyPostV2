import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext"; // <-- import your hook
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

// --- FULL FLOATING ICONS ARRAY ---
const desktopIcons = [
  { Icon: FaYoutube, pos: "top-12 left-4 md:top-16 md:left-8 lg:top-20 lg:left-12", color: "#FF0000" },
  { Icon: FaLinkedinIn, pos: "top-24 right-8 md:top-28 md:right-12 lg:top-32 lg:right-16", color: "#0A66C2" },
  { Icon: FaInstagram, pos: "top-40 left-12 md:top-44 md:left-16 lg:top-48 lg:left-20", color: "#E1306C" },
  { Icon: FaTwitter, pos: "bottom-24 left-8 md:bottom-28 md:left-12 lg:bottom-32 lg:left-16", color: "#1DA1F2" },
  { Icon: FaPinterestP, pos: "bottom-12 right-4 md:bottom-16 md:right-8 lg:bottom-20 lg:right-12", color: "#E60023" },
  { Icon: FaFacebookF, pos: "top-32 right-4 md:top-36 md:right-8 lg:top-40 lg:right-12", color: "#1877F2" },
  { Icon: SiTiktok, pos: "bottom-32 left-12 md:bottom-36 md:left-16 lg:bottom-40 lg:left-20", color: "#000000" },
  { Icon: FaThreads, pos: "top-16 left-1/2 md:top-20 md:left-1/2 lg:top-24 lg:left-1/2 -translate-x-1/2", color: "#000000" },
  { Icon: SiMedium, pos: "bottom-16 left-1/3 md:bottom-20 md:left-1/3 lg:bottom-24 lg:left-1/3", color: "#000000" },
  { Icon: SiTwitch, pos: "bottom-8 right-1/4 md:bottom-12 md:right-1/4 lg:bottom-16 lg:right-1/4", color: "#9146FF" },
];

const randomDelay = (idx: number) => idx * 0.2 + Math.random() * 0.3;

const Hero: React.FC = () => {
  const { t } = useLanguage(); // <-- use translation function here

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

      {/* FLOATING ICONS */}
      <div className="block">
        {desktopIcons.map((item, idx) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={idx}
              className={`absolute ${item.pos} bg-white dark:bg-gray-800 p-2 md:p-3 rounded-xl shadow-md hover:scale-110 transition-transform cursor-pointer`}
              initial={{ y: 0, rotate: 0, scale: 1 }}
              animate={{ y: [-12, 0, -12], rotate: [0, 3, -2, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: "easeInOut", delay: randomDelay(idx) }}
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
          {t("Your social media", "Votre espace  médias sociaux")}
          <br className="sm:hidden" />
          <span className="block mt-1 md:mt-2">{t("workspace", "")}</span>
        </h1>

        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          {t("Share consistently without the chaos", "Partagez régulièrement sans le chaos")}
        </p>

        {/* FORM */}
        <form className="mt-8 md:mt-8 w-full mx-auto flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            placeholder={t("Enter your email...", "Entrez votre email...")}
            required
            className="flex-1 px-5 py-3 md:py-4 text-base md:text-lg rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3C48F6] focus:border-transparent transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 md:py-4 bg-[#3C48F6] text-white font-medium text-base md:text-lg rounded-full hover:bg-[#3C48F6] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            {t("Get started now", "Commencer maintenant")}
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500 dark:text-gray-400">
          {t(
            "By entering your email, you agree to receive emails from EAsyPost.",
            "En entrant votre email, vous acceptez de recevoir des emails de EAsyPost."
          )}
        </p>
      </div>
    </section>
  );
};

export default Hero;
