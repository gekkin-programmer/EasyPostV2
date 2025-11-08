import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
      </div>
    </section>
  );
};

export default ResourcesSection;
