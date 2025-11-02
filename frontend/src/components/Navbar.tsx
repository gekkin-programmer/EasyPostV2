// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaChevronDown, FaBars, FaXmark, FaGlobe } from "react-icons/fa6";

const navLinks = [
  { label: "Features", hasDropdown: true },
  { label: "Channels", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Community", hasDropdown: true },
  { label: "Support", hasDropdown: true },
];

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "fr">("en");

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const t = (en: string, fr: string) => (language === "en" ? en : fr);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setActiveMobileDropdown(null);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/Wiggle Logo.png" alt="AsyPost" className="h-8 w-auto" />
          </a>

          {/* Center: Get Started (mobile & tablet) */}
          <a
            href="/signup"
            className="lg:hidden px-4 py-2 bg-[#3C48F6] text-white font-medium text-sm rounded-lg hover:bg-[#5C68F8] transition"
          >
            Get started
          </a>

          {/* Right: Hamburger menu (mobile & tablet) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300"
          >
            <FaBars className="w-6 h-6" />
          </button>

          {/* Desktop navigation (links + buttons) - Only show on large screens */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setHoveredDropdown(item.label)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <a
                  href={item.href || "#"}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#3C48F6] dark:hover:text-[#3C48F6] transition"
                >
                  {item.label}
                  {item.hasDropdown && <FaChevronDown className="w-3 h-3" />}
                </a>
                {item.hasDropdown && hoveredDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-3 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <a
                      href="#"
                      className="block px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition"
                    >
                      {t("Overview", "Aperçu")}
                    </a>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop buttons - Only show on large screens */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/login"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#3C48F6] px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 transition-all"
            >
              {t("Log in", "Connexion")}
            </a>
            <a
              href="/signup"
              className="px-5 py-2 bg-[#3C48F6] text-white font-medium text-sm rounded-full hover:bg-[#5C68F8] transition-all"
            >
              {t("Get started now", "Commencer")}
            </a>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <FaGlobe className="w-5 h-5" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400"
            >
              {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-[999]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed right-0 top-0 h-screen w-[85%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-[1000] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex-shrink-0 p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Appearance</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleLanguage}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaGlobe className="w-5 h-5" />
                    </button>
                    <button
                      onClick={toggleDarkMode}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <FaXmark className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-grow overflow-y-auto bg-white dark:bg-gray-900">
                <div className="p-6 space-y-1">
                  {navLinks.map((item) => (
                    <div key={item.label} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="block py-4 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-[#3C48F6] dark:hover:text-[#3C48F6] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <>
                          <button
                            onClick={() => setActiveMobileDropdown(activeMobileDropdown === item.label ? null : item.label)}
                            className="w-full flex justify-between items-center py-4 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-[#3C48F6] dark:hover:text-[#3C48F6] transition-colors"
                          >
                            <span>{item.label}</span>
                            <motion.div
                              animate={{ rotate: activeMobileDropdown === item.label ? 180 : 0 }}
                            >
                              <FaChevronDown className="w-4 h-4 text-gray-500" />
                            </motion.div>
                          </button>

                          {/* Dropdown Content */}
                          <AnimatePresence>
                            {item.hasDropdown && activeMobileDropdown === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-gray-50 dark:bg-gray-800 rounded-lg mt-2"
                              >
                                <div className="py-3 space-y-2">
                                  <a 
                                    href="#" 
                                    className="block px-4 py-2 text-base text-gray-700 dark:text-gray-300 hover:text-[#3C48F6] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {t("Overview", "Aperçu")}
                                  </a>
                                  <a 
                                    href="#" 
                                    className="block px-4 py-2 text-base text-gray-700 dark:text-gray-300 hover:text-[#3C48F6] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {t("Details", "Détails")}
                                  </a>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex-shrink-0 p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 space-y-3">
                <a
                  href="/login"
                  className="block w-full text-center py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("Log in", "Connexion")}
                </a>
                
                <a
                  href="/signup"
                  className="block w-full text-center py-3 bg-[#3C48F6] text-white font-medium rounded-xl hover:bg-[#5C68F6] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("Get started now", "Commencer")}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;