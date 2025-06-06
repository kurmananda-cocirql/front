
import React from 'react';

function HeroSection() {
  return (
    <div className="bg-[#FFF2B4] text-white py-20 rounded-3xl">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold pb-16 mb-4">Build a Circle outside your <br/> <span className='text-[#191406]'>Circle</span>.</h1><div className="flex justify-center space-x-4">
          <button className="bg-white text-[#66520b] font-bold py-2 px-6 rounded-full hover:bg-yellow-200 transition duration-300">
            Sign Up for free
          </button>
          <button className="bg-[#66520b] border b-white text-white font-bold py-2 px-6 rounded-full hover:bg-[#cca416] transition duration-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
