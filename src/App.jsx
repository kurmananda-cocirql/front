import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SignupHero from './components/sign';
import Footer from './components/Footer';
import TypeformHero from './components/TypeformHero';
import ChoiceQS from './components/choices';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-200 via-amber-200 to-amber-200">
      {/* Fixed Footer */}
      <div className="fixed left-0 w-full h-auto z-[-10] bottom-0">
        <Footer />
      </div>

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

      {/* Full Width Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-[10]"
      >
        <Banner />
      </motion.div>

      {/* Other Components */}
      <div className="container mx-auto px-4 py-12">
        <SignupHero />
        <TypeformHero />
        <ChoiceQS />
      </div>

      {/* CTA Section */}
      <div className='bg-white'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="container mx-auto text-center py-16 px-4"
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-8">
            Ready to take the next step?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Browse All Programs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-amber-800 border border-amber-300 rounded-lg hover:bg-amber-50 transition-all shadow hover:shadow-md text-lg"
            >
              Get Personalized Recommendations
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="bg-black opacity-0 h-[80vh] lg:h-[40vh]" />
    </div>
  );
};

export default App;