"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const leftNavItems = [
    { name: "Workshops", link: "/workshops" },
    { name: "Events", link: "/events" },
  ]

  const rightNavItems = [
    { name: "Join us", link: "/join" },
    { name: "Help", link: "/help" },
    { name: "Sign in", link: "/auth" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  const underlineVariants = {
    hidden: { width: 0 },
    hover: { width: "100%" },
  }

  return (
    <div className="w-full font-sans sticky top-0 z-50 shadow-sm">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center bg-[#FECE18] py-3 px-8 text-sm"
      >
        <span className="text-black font-medium">Where Ideas, People & Progress Come Full Circle ✨</span>
      </motion.div>

      {/* Main Navigation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center bg-white/90 backdrop-blur-md text-black 
             px-8 py-4 shadow-sm"
      >
        {/* Left Navigation Items */}
        <div className="flex items-center space-x-8">
          {leftNavItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative"
              onHoverStart={() => setHoveredItem(`left-${index}`)}
              onHoverEnd={() => setHoveredItem(null)}
              variants={itemVariants}
            >
              <a
                href={item.link}
                className="text-base font-medium text-gray-700 hover:text-black transition-colors duration-200"
              >
                {item.name}
              </a>
              <motion.div
                variants={underlineVariants}
                initial="hidden"
                animate={hoveredItem === `left-${index}` ? "hover" : "hidden"}
                className="absolute bottom-0 left-0 h-0.5 bg-black origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Center Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <a href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-full h-13 flex items-center justify-center"
            >
              <img
                src="logo.png"
                alt="Logo"
                className="h-full object-contain"
              />
            </motion.div>
          </a>
        </motion.div>

        {/* Right Navigation Items */}
        <div className="flex items-center space-x-6">
          {rightNavItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative"
              onHoverStart={() => setHoveredItem(`right-${index}`)}
              onHoverEnd={() => setHoveredItem(null)}
              variants={itemVariants}
            >
              <a
                href={item.link}
                className="text-base font-medium text-gray-700 hover:text-black transition-colors duration-200"
              >
                {item.name}
              </a>
              <motion.div
                variants={underlineVariants}
                initial="hidden"
                animate={hoveredItem === `right-${index}` ? "hover" : "hidden"}
                className="absolute bottom-0 left-0 h-0.5 bg-black origin-left"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar


