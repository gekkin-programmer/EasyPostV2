// src/components/AnalyzeSection.tsx

import React from 'react';
import { 
  FaInstagram, 
  FaRegHeart, 
  FaRegComment, 
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';
import { 
  BsGraphUp, 
  BsFillCaretUpFill,
  BsCalendarDate,
  BsFileText,
  BsClock
} from 'react-icons/bs';
import { IoBarChartOutline } from 'react-icons/io5';
import { FiUsers, FiTag } from 'react-icons/fi';


// --- TYPE DEFINITIONS for Local Components ---

interface FeatureItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

interface RecommendationCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}


// --- LOCAL COMPONENTS (for use within AnalyzeSection only) ---

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, children }) => (
  <li className="flex items-start gap-4">
    <div className="text-[#3C48F6] mt-1">{icon}</div>
    <span className="text-[#232323]">{children}</span>
  </li>
);

const SvgArrow = () => (
  <svg 
    className="absolute top-[155px] left-[590px]" 
    width="100" 
    height="100" 
    viewBox="0 0 100 100"
    aria-hidden="true"
  >
    <defs>
      <marker id="arrowhead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#a0aec0" />
      </marker>
    </defs>
    <path 
      d="M 80 5 C 80 50, 20 50, 20 90" 
      fill="none" 
      stroke="#a0aec0" 
      strokeWidth="1.5" 
      markerEnd="url(#arrowhead)" 
    />
  </svg>
);

const RecommendationCard: React.FC<RecommendationCardProps> = ({ icon, title, value }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-200/80 p-3 flex items-center gap-4 w-[240px]">
    <div className="bg-gray-100 p-2 rounded-lg">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500">{title}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const EngagementRateWidget = () => {
  const barData = [15, 25, 45, 65, 50, 35, 30];
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 p-4 w-[260px]">
      <p className="text-gray-500 text-sm">Engagement rate</p>
      <div className="flex items-baseline gap-1.5 mt-1">
        <p className="text-3xl font-bold text-gray-800">5.0%</p>
        <BsFillCaretUpFill className="text-green-500" size={12} />
      </div>
      <div className="flex items-end justify-between h-[60px] mt-3 gap-2 px-1">
        {barData.map((height, i) => (
          <div 
            key={i} 
            className={`w-3 rounded-sm ${i === 3 ? 'bg-green-300' : 'bg-gray-200'}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
};

const FollowersWidget = () => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 p-4 w-[240px]">
    <p className="text-gray-500 text-sm">Followers</p>
    <div className="flex items-baseline gap-1.5 mt-1">
      <p className="text-3xl font-bold text-gray-800">344</p>
      <BsFillCaretUpFill className="text-green-500" size={12} />
    </div>
    <div className="mt-2">
      <svg width="100%" height="50" viewBox="0 0 200 50" preserveAspectRatio="none">
        <path d="M0 50 L0 35 C 40 10, 80 10, 120 25 C 160 40, 180 30, 200 25 L200 50 Z" fill="#dcfce7" />
        <path d="M0 35 C 40 10, 80 10, 120 25 C 160 40, 180 30, 200 25" fill="none" stroke="#4ade80" strokeWidth="2" />
      </svg>
    </div>
  </div>
);

const InstagramPostCard = () => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 w-full max-w-[360px]">
    <div className="flex items-center gap-3 p-4">
      <div className="relative">
        <img src="/Automn.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover"/>
        <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
              <FaInstagram size={10} className="text-white"/>
            </div>
        </div>
      </div>
      <p className="font-semibold text-gray-800">yoyo_ceramics</p>
    </div>
    <img src="/Automn.jpg" alt="Ceramic vases" className="w-full h-[320px] object-cover"/>
    <div className="flex items-center justify-between p-4 text-gray-600">
      <div className="flex items-center gap-2">
        <FaRegHeart className="text-lime-200 fill-current" size={22} />
        <span>1,203</span>
      </div>
      <div className="flex items-center gap-2">
        <FaRegComment className="text-lime-200 fill-current" size={22}/>
        <span>30</span>
      </div>
      <div className="flex items-center gap-2">
        <BsGraphUp size={22} />
        <span>856</span>
      </div>
    </div>
  </div>
);


// --- MAIN MERGED COMPONENT ---

const AnalyzeSection = () => {
  return (
    <section className="bg-[#D6EFFF] mt-8 mx-7 py-20 px-4 rounded-3xl sm:px-8 lg:px-16 relative font-sans">

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center max-w-7xl">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 text-gray-800 max-w-lg">
          <span className="font-semibold tracking-widest text-sm text-[#D6EFFF]-700">ANALYZE</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#232323] leading-tight">
            Answers, not just analytics
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Whether it's basic analytics or in-depth reporting, Buffer will help you learn what works and how to improve.
          </p>
          <a href="#" className="bg-[#3C48F6] text-white font-semibold py-3 px-6 rounded-3xl flex items-center justify-center gap-2 w-fit hover:bg-[#3C48F6] transition-colors duration-300">
            Learn more <FaArrowRight />
          </a>
          <ul className="space-y-4 mt-6 text-base">
            <FeatureItem icon={<IoBarChartOutline size={22} />}>See the best times, formats, and frequencies to post</FeatureItem>
            <FeatureItem icon={<FiUsers size={22} />}>Get demographic data about your audience</FeatureItem>
            <FeatureItem icon={<FiTag size={22} />}>Tag and recycle your best-performing content</FeatureItem>
          </ul>
        </div>
        
        {/* Right Column: Visual Graphic */}
        <div className="relative flex justify-center lg:justify-start overflow-hidden">
            <div className="relative w-full min-h-[580px] lg:h-[620px] scale-90 lg:scale-100">
              <div className="absolute top-0 left-0 w-[850px] h-[580px] bg-white/40 border border-gray-300/50 rounded-2xl backdrop-blur-sm"></div>
              

            </div>
        </div>

      </div>
    </section>
  );
};

export default AnalyzeSection;