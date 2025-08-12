"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const LivePopup = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show popup after a short delay when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1) // Show after 1 second

    return () => clearTimeout(timer)
  }, [])

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 60,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6,
      },
    },
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop with blur effect - No onClick to prevent closing */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            className="fixed inset-0 backdrop-blur-md z-[100]"
          />

          {/* Popup - Perfectly centered with 50vh and 50vw */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4">
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-2xl shadow-2xl"
              style={{ width: "50vw", height: "60vh", minWidth: "400px", minHeight: "300px" }}
            >
              <div className="h-full flex items-center justify-center p-8">
                {/* Horizontal Layout */}
                <div className="flex items-center space-x-8 w-full">
                  {/* Left Side - Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="flex-shrink-0 justify-center"
                  >
                    <div className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] rounded-full p-6">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path
                          d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Right Side - Content */}
                  <div className="flex-1 space-y-6 justify-center text-center">
                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <h1 className="text-5xl font-bold text-gray-800 mb-3 text-left">🚀 Coming Soon!</h1>
                      <div className="w-64 h-1 bg-gradient-to-r from-[#DAA520] to-[#FFD700] rounded-full mx-auto"></div>
                    </motion.div>

                    {/* Main Message */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="space-y-4"
                    >
                      <p className="text-2xl text-gray-700 font-medium">Website will be live on</p>
                      <div className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-white px-8 py-4 rounded-xl font-bold text-3xl shadow-lg inline-block">
                        15th August
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We're working hard to bring you an amazing experience! <br />
                        Stay tuned for the official launch ✨
                      </p>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="flex justify-center space-x-3"
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                            ease: "easeInOut",
                          }}
                          className="w-3 h-3 bg-gradient-to-r from-[#DAA520] to-[#FFD700] rounded-full"
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default LivePopup
