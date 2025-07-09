"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const rightNavItems = [{ name: "Join US", link: '' },
  { name: "Help", link: '' },
  { name: "Profile", link: 'auth' }];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    hover: { width: "100%" }
  };

  return (
    <div className="w-full font-sans bg-[#FECE18] sticky justify-between top-0 z-50 h-[8vh]">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-end items-center bg-[#afafaf] py-2 px-8 text-xs"
      >
        {rightNavItems.map((item, index) => (
          <div key={item} className="flex text-black items-center">
            {index > 0 && <span className="mx-2">|</span>}
            <motion.a
              href={item.link}
              className="text-black hover:text-gray-600 mx-2"
              variants={itemVariants}
              whileHover="hover"
            >
              {item.name}
            </motion.a>
          </div>
        ))}
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center text-black px-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mx-8"
        >
          <a href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-20 h-11 flex items-center justify-center"
            >
              <img
                src="logo.png"
                alt="Logo"
                className="h-full object-contain"
              />
            </motion.div>
          </a>
        </motion.div>



        <div className="flex items-center space-x-8">
          <motion.div
            className="relative"
            onHoverStart={() => setHoveredItem(0)}
            onHoverEnd={() => setHoveredItem(null)}
            variants={itemVariants}
          >
            <a
              href="/workshops"
              className="text-sm font-medium text-gray-600 hover:text-black"
            >
              WORKSHOPS
            </a>
            <motion.div
              variants={underlineVariants}
              initial="hidden"
              animate={hoveredItem === 0 ? "hover" : "hidden"}
              className="absolute bottom-0 left-0 h-0.5 bg-black origin-left"
            />
          </motion.div>
          <motion.div
            className="relative space-x-3"
            onHoverStart={() => setHoveredItem(1)}
            onHoverEnd={() => setHoveredItem(null)}
            variants={itemVariants}
          >
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black"
            >
              EVENTS
            </a>
            <motion.div
              variants={underlineVariants}
              initial="hidden"
              animate={hoveredItem === 1 ? "hover" : "hidden"}
              className="absolute bottom-0 left-0 h-0.5 bg-black origin-left"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar