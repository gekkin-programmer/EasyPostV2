import React from 'react';
import { 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa6';

// --- DATA: Unchanged ---
const footerSections = [
  {
    title: 'Tools',
    links: [
      { label: 'Publishing', href: '#' },
      { label: 'Analytics', href: '#' },
      { label: 'Engagement', href: '#' },
      { label: 'AI Assistant', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Content Library', href: '#' },
      { label: 'Browser Extension', href: '#' },
      { label: 'Free Image Editor', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Transparency', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
];

// --- DATA: UPDATED with hover colors for social icons ---
const socialLinks = [
  { name: 'Instagram', Icon: FaInstagram, href: '#', hoverColor: 'text-[#E1306C]' },
  { name: 'Facebook', Icon: FaFacebookF, href: '#', hoverColor: 'text-[#1877F2]' },
  { name: 'Twitter', Icon: FaTwitter, href: '#', hoverColor: 'text-[#1DA1F2]' },
  { name: 'LinkedIn', Icon: FaLinkedinIn, href: '#', hoverColor: 'text-[#0A66C2]' },
  { name: 'YouTube', Icon: FaYoutube, href: '#', hoverColor: 'text-[#FF0000]' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and company description section */}
          <div className="space-y-8 xl:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <img 
                className="h-8 w-auto" 
                src="/Wiggle Logo.png" 
                alt="EAsyPost Logo" 
              />
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              The simplest way to plan, create, and share content on social media.
            </p>
          </div>

          {/* Link columns section */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(0, 2).map((section) => (
                <div key={section.title}>
                  {/* --- CHANGED: Header color updated --- */}
                  <h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#3C48F6' }}>
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.href} 
                          className="text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(2, 4).map((section) => (
                <div key={section.title} className="mt-12 md:mt-0">
                  {/* --- CHANGED: Header color updated --- */}
                  <h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#3C48F6' }}>
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.href} 
                          className="text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and social links */}
        <div className="mt-12 border-t border-slate-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-base text-slate-500 dark:text-slate-400 md:order-1">
            &copy; {new Date().getFullYear()} EAsyPost, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 md:order-2 mt-4 md:mt-0">
            {/* --- CHANGED: Social icon hover effect --- */}
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                // The `group` class on the parent allows us to style the child icon
                className="text-slate-400 group transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="sr-only">{link.name}</span>
                {/* The icon now changes to its brand color on group-hover */}
                <link.Icon className={`h-6 w-6 transition-colors duration-300 group-hover:${link.hoverColor}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;