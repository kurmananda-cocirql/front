import React, { useEffect, useState } from 'react';
import ImageSlider from './components/ImgSlider';
import SignupHero from './components/sign';
import TypeformHero from './components/TypeformHero';
import Footer from './components/Footer';
import CouponSystem from './components/couponSystem';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute fade and blur
  const opacity = 1 - Math.min(scrollY / 500, 1); // fades out over 500px
  const blur = Math.min(scrollY / 100, 10); // max blur of 10px

  return (
    <div className="relative">
      {/* Fixed Image Slider with scroll-based fading */}
      <div
        className="fixed w-full h-screen z-0 transition-all duration-300 ease-out"
        style={{
          opacity: opacity,
          filter: `blur(${blur}px)`,
          transition: 'opacity 0.2s ease-out, filter 0.2s ease-out',
        }}
      >
        <ImageSlider />
      </div>

      {/* Spacer to reveal next section */}
      <div className="h-[70vh]" />

      {/* Main content over it */}
      <div className="relative z-10 pt-screen bg-white">
        <SignupHero />
        <TypeformHero />
        <Footer />
      </div>

      <CouponSystem />
    </div>
  );
};

export default App;
