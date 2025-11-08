// src/components/SupportSection.tsx

import React from 'react';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const SupportSection = () => {
  return (
    <section className="bg-[#FDFDFC] py-8 px-4 font-sans">
      <div 
        className="
          container mx-auto flex max-w-3xl flex-col 
          items-center gap-6 text-center
        "
      >
        {/* Top Label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-[#3C48F6]">
          Customer Support
        </p>

        {/* Main Heading */}
        <h2 className="text-5xl font-bold text-[#3C48F6] leading-tight">
          Human support, worldwide
        </h2>

        {/* First Paragraph */}
        <p className="text-lg leading-relaxed text-gray-700">
          Our global Customer Advocacy team is spread across time zones to make sure help is always nearby. Whether you have a quick question, need technical support, or just want to connect, we're here for you — no bots, just real people who care.
        </p>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="
              rounded-full px-8 py-3 font-semibold 
              text-white transition-colors duration-200 
              bg-[#3C48F6] border border-[#3C48F6] hover:text-white
            "
          >
            Visit the Help Center
          </a>
          <a
            href="#"
            className="
              flex items-center justify-center gap-2 rounded-full 
              border border-gray-400 bg-white px-8 py-3 
              font-semibold text-gray-800 transition-colors 
              duration-200 hover:bg-gray-100
            "
          >
            <FaWhatsapp />
            Join Whatsapp Community
          </a>
        </div>

        {/* Second Paragraph */}
        <p className="mt-8 text-base text-gray-600">
          We prioritize customer connection as a company and you could end up speaking with a teammate in any role at EAsyPost, from Marketers to Engineers.
        </p>

        {/* Final Link */}
        <a
          href="#"
          className="
            group mt-2 inline-flex items-center gap-2 
            font-semibold text-[#3C48F6]
          "
        >
          Learn more about our global team
          <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default SupportSection;