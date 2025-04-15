import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 for peek effect
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const intervalRef = useRef(null);

  // Banner items with random images
  const bannerItems = [
    {
      id: 0,
      image: "https://picsum.photos/seed/amber0/800/400?grayscale",
      title: "CIRCUS 70UR*25",
      description: "Experience the greatest show on earth",
      redirectUrl: "/events/event0"
    },
    {
      id: 1,
      image: "https://picsum.photos/seed/amber1/800/400?grayscale",
      title: "MUSIC FESTIVAL",
      description: "Three days of non-stop performances",
      redirectUrl: "/events/event1"
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/amber2/800/400?grayscale",
      title: "FOOD EXPO",
      description: "Taste the world's finest cuisines",
      redirectUrl: "/events/event2"
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/amber3/800/400?grayscale",
      title: "ART EXHIBITION",
      description: "Contemporary artists showcase",
      redirectUrl: "/events/event3"
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/amber4/800/400?grayscale",
      title: "SPORTS CHAMPIONSHIP",
      description: "Witness record-breaking moments",
      redirectUrl: "/events/event4"
    }
  ];

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (isAutoScrolling) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % (bannerItems.length - 2));
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [bannerItems.length, isAutoScrolling]);

  const handlePrev = () => {
    setIsAutoScrolling(false);
    clearInterval(intervalRef.current);
    setCurrentIndex(prev => (prev === 1 ? bannerItems.length - 3 : prev - 1));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    clearInterval(intervalRef.current);
    setCurrentIndex(prev => (prev + 1) % (bannerItems.length - 2));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleDotClick = (index) => {
    setIsAutoScrolling(false);
    clearInterval(intervalRef.current);
    setCurrentIndex(index + 1);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleBannerClick = (url) => {
    window.location.href = url;
  };

  // Create extended array for peek effect
  const extendedItems = [bannerItems[bannerItems.length - 1], ...bannerItems, bannerItems[0]];

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-amber-50 py-8 h-[300px] lg:h-[450px]">
      {/* Left Navigation Button */}
      <button 
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-90 text-amber-800 p-3 rounded-lg hover:bg-opacity-100 transition-all shadow-lg border border-amber-200 flex items-center justify-center w-12 h-12"
      >
        <FiChevronLeft size={24} className="font-bold" />
      </button>

      {/* Banner Container with peek */}
      <div className="relative h-full w-full max-w-6xl mx-0">
        <div 
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(-${currentIndex * 100}% + ${currentIndex * 40}px))` }}
        >
          {extendedItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className="flex-shrink-0 h-full transition-all duration-300"
              style={{ 
                width: `calc(100% - 80px)`,
                marginRight: '20px',
                marginLeft: '20px',
                opacity: index === currentIndex ? 1 : 0.7,
                transform: index === currentIndex ? 'scale(1)' : 'scale(0.9)'
              }}
            >
              <div 
                className="relative h-full rounded-xl overflow-hidden cursor-pointer shadow-xl"
                onClick={() => handleBannerClick(item.redirectUrl)}
              >
                <img 
                  src={item.image} 
                  alt="Banner"
                  className="w-full h-3/4 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-amber-800 p-4 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm lg:text-base">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Navigation Button */}
      <button 
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-90 text-amber-800 p-3 rounded-lg hover:bg-opacity-100 transition-all shadow-lg border border-amber-200 flex items-center justify-center w-12 h-12"
      >
        <FiChevronRight size={24} className="font-bold" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {bannerItems.slice(1, -1).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full transition-all ${currentIndex === index + 1 ? 'bg-amber-700' : 'bg-amber-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;