import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SignupHero from './components/sign';
import Footer from './components/Footer';
import TypeformHero from './components/TypeformHero';
import ChoiceQS from './components/choices';


const App = () => {
  // Banner data
  const bannerData = {
    title: "Featured Learning Programs",
    description: "Explore our curated selection of professional development opportunities and skill-building workshops",
    dates: [
      { name: "WEBINAR", date: "11 April", image: "https://picsum.photos/seed/webinar-1/400/400" },
      { name: "BOOTCAMP", date: "02 April", image: "https://picsum.photos/seed/bootcamp-2/400/400" },
      { name: "WORKSHOP", date: "03 April", image: "https://picsum.photos/seed/workshop-3/400/400" },
      { name: "SEMINAR", date: "05 April", image: "https://picsum.photos/seed/seminar-4/400/400" },
      { name: "MASTERCLASS", date: "10 April", image: "https://picsum.photos/seed/masterclass-5/400/400" },
      { name: "CONFERENCE", date: "01-19 April", image: "https://picsum.photos/seed/conference-6/400/400" }
    ]
  };

  return (
    <>

      <div className="fixed left-0 w-full h-auto z-[-10] bottom-0">
        <Footer />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-amber-100 to-amber-100 ">
        {/* Animated background elements */}

        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-200/20"
              initial={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                opacity: 0.2
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, 360]
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>

        <Navbar />
        <div className=''>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-[10]"
          >
            <div className="container mx-auto py-8 ">
              {/* Banner Component */}
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Banner data={bannerData} />
              </motion.div>


            </div>
          </motion.div>
        </div>


        <TypeformHero />
        <SignupHero />
        <ChoiceQS />

        {/* CTA Section */}
        <div className='bg-white'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className=" text-center py-10 "
          >
            <h2 className="text-2xl font-bold text-amber-900">
              Ready to take the next step?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
              >
                Browse All Programs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-amber-800 border border-amber-300 rounded-lg hover:bg-amber-50 transition-all shadow hover:shadow-md"
              >
                Get Personalized Recommendations
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-black opacity-0 h-[80vh] lg:h-[40vh]" />

    </>
  );
};

export default App;