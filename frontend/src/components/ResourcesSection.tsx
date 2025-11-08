import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { useState } from 'react';
=======
import {
  FaArrowRight,
  FaBullhorn,
  FaBookOpen,
  FaGraduationCap,
  FaTools,
  FaTags,
} from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
import { useLanguage } from '../context/LanguageContext'; // adjust path if needed
>>>>>>> 45582c0486d7fdaeffa754e48a1e1fcb890cba5a

const resources = [
  {
    id: 1,
    title: "Social Media Marketing",
    description: "Master the art of social selling with our comprehensive marketing guides",
    bgGradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Marketing Resources",
    description: "Access our library of templates, guides, and best practices",
    bgGradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Best Time to Post",
    description: "Optimize your posting schedule with data-driven insights",
    bgGradient: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Marketing 101",
    description: "New to marketing? Start with our beginner-friendly guide",
    bgGradient: "from-yellow-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Social Media Glossary",
    description: "Demystify marketing jargon with our comprehensive glossary",
    bgGradient: "from-red-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Free Marketing Tools",
    description: "Powerful tools to boost your marketing efforts, completely free",
    bgGradient: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80"
  }
];

type Resource = {
  id: number;
  title: string;
  description: string;
  bgGradient: string;
  image: string;
};

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

const ResourceCard = ({ resource, index }: ResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Background */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${resource.bgGradient} opacity-60 group-hover:opacity-75 transition-opacity duration-500`}></div>
        
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800"
        >
          New
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative bg-white p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {resource.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {resource.description}
        </p>
        
        <motion.button
          className="flex items-center text-blue-600 font-semibold group/button"
          whileHover={{ x: 5 }}
        >
          <span>Learn More</span>
          <svg 
            className={`ml-2 w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </motion.button>
      </div>

<<<<<<< HEAD
      {/* Decorative Element */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${resource.bgGradient} transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'}`}></div>
    </motion.div>
  );
};

const ResourcesSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
=======
      <span className="mt-4 inline-flex items-center gap-2 font-semibold text-gray-900/80">
        Read more
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>

      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(1200px 200px at 50% 110%, rgba(147, 51, 234, .08), transparent 60%)',
        }}
      />
    </a>
  );
};

const ResourcesSection: React.FC = () => {
  const { t } = useLanguage();

  const resources: ResourceCardProps[] = [
    {
      icon: <FaBullhorn size={22} />,
      title: t("Social Media Marketing", "Marketing sur les réseaux sociaux"),
      description: t(
        "Strategy frameworks, playbooks, and examples to drive growth with EasyPost at the core of your workflow.",
        "Cadres stratégiques, guides et exemples pour stimuler la croissance avec EasyPost au cœur de votre flux de travail."
      ),
      accent: 'purple',
    },
    {
      icon: <FaBookOpen size={22} />,
      title: t("Social Media Resources", "Ressources pour les réseaux sociaux"),
      description: t(
        "A curated library of guides, templates, and case studies—updated regularly with what actually works.",
        "Une bibliothèque sélectionnée de guides, modèles et études de cas — mise à jour régulièrement avec ce qui fonctionne réellement."
      ),
      accent: 'sky',
    },
    {
      icon: <BsClockHistory size={22} />,
      title: t("Best Time to Post", "Meilleur moment pour publier"),
      description: t(
        "Use data-backed recommendations to publish when your audience is most likely to engage.",
        "Utilisez des recommandations basées sur les données pour publier lorsque votre audience est la plus susceptible d'interagir."
      ),
      accent: 'emerald',
    },
    {
      icon: <FaGraduationCap size={22} />,
      title: t("Social Media Marketing 101", "Marketing sur les réseaux sociaux 101"),
      description: t(
        "Start here. Learn the fundamentals and build a repeatable growth system around EasyPost.",
        "Commencez ici. Apprenez les bases et construisez un système de croissance reproductible autour d'EasyPost."
      ),
      accent: 'rose',
    },
    {
      icon: <FaTags size={22} />,
      title: t("Social Media Glossary", "Glossaire des réseaux sociaux"),
      description: t(
        "Cut through the jargon. Clear definitions for every term you’ll meet in modern marketing.",
        "Coupez le jargon. Définitions claires pour chaque terme que vous rencontrerez dans le marketing moderne."
      ),
      accent: 'amber',
    },
    {
      icon: <FaTools size={22} />,
      title: t("Free Marketing Tools", "Outils marketing gratuits"),
      description: t(
        "Create, optimize, and analyze—access a suite of free tools that plug neatly into your stack.",
        "Créez, optimisez et analysez — accédez à une suite d'outils gratuits qui s'intègrent parfaitement dans votre stack."
      ),
      accent: 'indigo',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-4 font-sans">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Kicker>{t("Resources", "Ressources")}</Kicker>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t(
              "The EasyPost Resource Hub",
              "Le centre de ressources EasyPost"
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            {t(
              "World‑class guides and tools to help you plan, publish, and grow. Learn from best‑in‑class playbooks and bring EasyPost into a scalable marketing workflow.",
              "Guides et outils de classe mondiale pour vous aider à planifier, publier et développer. Apprenez des meilleures pratiques et intégrez EasyPost dans un flux de travail marketing évolutif."
            )}
          </p>
        </div>
>>>>>>> 45582c0486d7fdaeffa754e48a1e1fcb890cba5a

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-700">Resource Center</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Everything You Need
            </span>
            <br />
            <span className="text-gray-900">to Succeed</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock the full potential of your marketing strategy with our comprehensive 
            <span className="font-semibold text-gray-800"> resource library</span>, curated by industry experts
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <ResourceCard key={resource.id} resource={resource} index={index} />
          ))}
        </div>

<<<<<<< HEAD
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Browse our complete resource library with 100+ guides, templates, and tools
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
            >
              Browse All Resources
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.button>
          </div>
        </motion.div>
=======
        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-[#2C4B42] px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#21352f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
          >
            {t("Explore all resources", "Explorer toutes les ressources")}
            <FaArrowRight />
          </a>
        </div>
>>>>>>> 45582c0486d7fdaeffa754e48a1e1fcb890cba5a
      </div>
    </section>
  );
};

export default ResourcesSection;
