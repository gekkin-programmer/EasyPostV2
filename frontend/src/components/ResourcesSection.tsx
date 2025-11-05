import React from 'react';
import {
  FaArrowRight,
  FaBullhorn,
  FaBookOpen,
  FaGraduationCap,
  FaTools,
  FaTags,
} from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';

// Subcomponent: badge
const Kicker = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700">
    {children}
  </span>
);

// Subcomponent: resource card
type ResourceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  accent?: string; // Tailwind color class for ring/hover
};

const ResourceCard: React.FC<ResourceCardProps> = ({
  icon,
  title,
  description,
  href = '#',
  accent = 'purple',
}) => {
  return (
    <a
      href={href}
      className={`
        group relative block rounded-2xl border border-gray-200 bg-white p-7 shadow-sm
        transition-all duration-300 ease-out focus:outline-none
        hover:-translate-y-1 hover:shadow-lg
        focus-visible:-translate-y-1 focus-visible:shadow-lg
        hover:ring-2 hover:ring-${accent}-300/60 hover:ring-offset-2
        focus-visible:ring-2 focus-visible:ring-${accent}-300/60 focus-visible:ring-offset-2
      `}
    >
      <div
        className={`
          inline-flex h-12 w-12 items-center justify-center rounded-xl
          bg-${accent}-50 text-${accent}-600 transition-colors duration-300
          group-hover:bg-${accent}-600 group-hover:text-white
        `}
      >
        {icon}
      </div>

      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>

      <span className="mt-4 inline-flex items-center gap-2 font-semibold text-gray-900/80">
        Read more
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>

      {/* subtle gradient edge on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
           style={{ background: 'radial-gradient(1200px 200px at 50% 110%, rgba(147, 51, 234, .08), transparent 60%)' }} />
    </a>
  );
};

const ResourcesSection: React.FC = () => {
  const resources: ResourceCardProps[] = [
    {
      icon: <FaBullhorn size={22} />,
      title: 'Social Media Marketing',
      description:
        'Strategy frameworks, playbooks, and examples to drive growth with EasyPost at the core of your workflow.',
      accent: 'purple',
    },
    {
      icon: <FaBookOpen size={22} />,
      title: 'Social Media Resources',
      description:
        'A curated library of guides, templates, and case studies—updated regularly with what actually works.',
      accent: 'sky',
    },
    {
      icon: <BsClockHistory size={22} />,
      title: 'Best Time to Post',
      description:
        'Use data-backed recommendations to publish when your audience is most likely to engage.',
      accent: 'emerald',
    },
    {
      icon: <FaGraduationCap size={22} />,
      title: 'Social Media Marketing 101',
      description:
        'Start here. Learn the fundamentals and build a repeatable growth system around EasyPost.',
      accent: 'rose',
    },
    {
      icon: <FaTags size={22} />,
      title: 'Social Media Glossary',
      description:
        'Cut through the jargon. Clear definitions for every term you’ll meet in modern marketing.',
      accent: 'amber',
    },
    {
      icon: <FaTools size={22} />,
      title: 'Free Marketing Tools',
      description:
        'Create, optimize, and analyze—access a suite of free tools that plug neatly into your stack.',
      accent: 'indigo',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-4 font-sans">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Kicker>Resources</Kicker>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            The EasyPost Resource Hub
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            World‑class guides and tools to help you plan, publish, and grow. Learn from best‑in‑class playbooks and
            bring EasyPost into a scalable marketing workflow.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <ResourceCard key={item.title} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-[#2C4B42] px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#21352f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
          >
            Explore all resources
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;