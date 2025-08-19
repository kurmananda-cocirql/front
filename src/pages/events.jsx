"use client"

import { motion } from "framer-motion"

export default function HostPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-8 py-16 max-w-7xl"
      >
        {/* Main Hero Section */}
        <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-black leading-tight">
              Host Lovely
              <br />
              Events
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg">
              CoCirql makes your event effortless we curate, consult, and call in everything you need
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FECE18] hover:bg-[#E6B800] text-black font-bold text-xl px-12 py-4 rounded-2xl transition-colors duration-300 shadow-lg"
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Right Image with Overlaid Second Image */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main celebration image */}
              <img
                src="banners/Your paragraph text.png"
                alt="People celebrating at an event with hands raised and confetti"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />

              {/* Overlaid circular image in bottom left corner */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white"
              >
                <img
                  src="banners/Team_Friends.png"
                  alt="Team party with friends smiling together"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div variants={itemVariants} className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left - Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Ready to plan your event?</h2>
            <p className="text-lg text-gray-700">
              Email us at : <span className="font-semibold">events@cocirql.com</span>
            </p>
          </div>

          {/* Center - Team Party Label */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black">Team Party</h3>
          </div>

          {/* Right - Description */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              We help plan engaging corporate events with a fresh twist, perfect for team bonding and memorable
              experiences.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
