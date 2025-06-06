"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Custom icon components
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-gray-400"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
)

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-black cursor-pointer"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
)

const ShoppingBagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-black cursor-pointer"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
    <path d="M3 6h18"></path>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
)

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const rightNavItems = [{ name: "Enquire", link: '' },
  { name: "Help", link: '' },
  { name: "Buddy", link: '' },
  { name: "Sign In", link: 'auth' }];

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
    <div className="w-full font-sans sticky top-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-end items-center bg-[#D3D3D3] py-2 px-8 text-xs"
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
        className="flex justify-between bg-[#FECE18] mx-4 my-2 items-center text-black rounded-lg px-8"
      >

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

        <div className="flex items-center space-x-4">
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

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBagIcon />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar