import React from 'react';
import { motion } from 'framer-motion';

const TypeformHero = () => {
  const programs = [
    { name: "WEBINAR", date: "11 April" },
    { name: "BOOTCAMP", date: "02 April" },
    { name: "WORKSHOP", date: "03 April" }
  ];

  // Handle right-click prevention
  const preventRightClick = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <section className="w-full py-12 bg-gradient-to-br from-amber-100 via-amber-100 to-amber-100">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Video Container */}
        <div className="w-full lg:w-1/2 aspect-video relative">
          {/* Overlay to catch right-clicks */}
          <div 
            className="absolute inset-0 z-10"
            onContextMenu={preventRightClick}
          />
          
          {/* YouTube iframe with all controls disabled */}
          <iframe
            src="https://www.youtube.com/embed/TRxf5hLZih4?autoplay=1&mute=1&loop=1&playlist=TRxf5hLZih4&controls=0&modestbranding=1&disablekb=1&fs=0"
            className="w-full h-full rounded-xl shadow-lg pointer-events-none"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            title="Abstract Animation"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Skill Up With CoCirql
            </h1>
            
            <p className="text-amber-800 mb-4">
              Join our professional programs:
            </p>

            <ul className="space-y-2 mb-6">
              {programs.map((program, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                  <span className="text-amber-900">{program.name} - {program.date}</span>
                </li>
              ))}
            </ul>

            <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
              Explore Programs
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TypeformHero;