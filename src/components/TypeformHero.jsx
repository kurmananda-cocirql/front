import React from 'react';
import { motion } from 'framer-motion';

const TypeformHero = () => {
  const programs = [
    { name: "WEBINAR", date: "11 April" },
    { name: "BOOTCAMP", date: "02 April" },
    { name: "WORKSHOP", date: "03 April" }
  ];

  
  const preventRightClick = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        
        <div className="w-full lg:w-1/2 aspect-video relative">
        
          <div 
            className="absolute inset-0 z-10"
            onContextMenu={preventRightClick}
          />
          
          
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
        
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-4xl font-bold text-amber-900 mb-4">
              How to use
            </h1>
            
            <p className="text-amber-800 mb-4">
              have to work on it
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TypeformHero;