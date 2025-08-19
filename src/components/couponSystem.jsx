"use client"
import { motion, AnimatePresence } from "framer-motion"
import { IconButton } from "@mui/material"
import { ArrowBack, Close, ArrowForward } from "@mui/icons-material"
import { useState, useEffect } from "react"

const CouponSystem = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [copied, setCopied] = useState(false)

  const introSteps = [
    {
      title: "Welcome to The Cinnamon Kitchen!",
      content:
        "Diagnosed with PCOS as a teen, I began experimenting with healthy recipes, sharing my journey on Instagram.",
      image: "🌿",
    },
    {
      title: "Our Mission",
      content:
        "This blooming inspired me and I started The Cinnamon Kitchen, offering wholesome, vegan, gluten-free snacks.",
      image: "🍪",
    },
    {
      title: "Celebrity Approved",
      content:
        "Loved by Malaika Arora, Simran Khosla, and Namita Dubey. Join thousands who trust our PCOS-friendly products.",
      image: "⭐",
    },
  ]

  const questions = [
    {
      question: "What's your primary health goal?",
      options: ["Weight Management", "PCOS Support", "General Wellness", "Energy Boost"],
    },
    {
      question: "What's your preferred snack time?",
      options: ["Morning", "Afternoon", "Evening", "Late Night"],
    },
    {
      question: "Which dietary preference suits you?",
      options: ["Vegan", "Gluten-Free", "Sugar-Free", "All Natural"],
    },
    {
      question: "How often do you snack?",
      options: ["Daily", "Few times a week", "Occasionally", "Rarely"],
    },
  ]

  const totalSteps = introSteps.length + questions.length + 1
  const isIntroStep = currentStep < introSteps.length
  const isQuestionStep = currentStep >= introSteps.length && currentStep < introSteps.length + questions.length
  const isFinalStep = currentStep === totalSteps - 1

  useEffect(() => {
    if (!showPopup) {
      setCurrentStep(0)
      setAnswers({})
    }
  }, [showPopup])

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (stepIndex) => {
    if (stepIndex <= Math.max(currentStep, 0)) {
      setCurrentStep(stepIndex)
    }
  }

  const handleAnswerSelect = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer })
  }

  const popupVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.4 } },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  }

  return (
    <>
      {!showPopup && <CouponButton onClick={() => setShowPopup(true)} />}

      <AnimatePresence>
        {showPopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-opacity-0 z-40"
              onClick={() => setShowPopup(false)}
            />

            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-4 top-[30%] h-[60%] w-80 bg-white shadow-2xl z-50 overflow-hidden rounded-lg"
            >
              <div className="p-4 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {currentStep > 0 && (
                        <IconButton onClick={handleBack} size="small" className="bg-gray-100 hover:bg-gray-200">
                          <ArrowBack fontSize="small" />
                        </IconButton>
                      )}
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-bold text-[#5DADE2]">{currentStep + 1}</span>
                        <span className="text-sm text-gray-400">of</span>
                        <span className="text-sm font-medium text-gray-600">{totalSteps}</span>
                      </div>
                    </div>
                    <IconButton
                      onClick={() => setShowPopup(false)}
                      size="small"
                      className="text-gray-400 hover:bg-gray-100"
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  </div>

                  {/* Progress Dots */}
                  <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: totalSteps }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleStepClick(index)}
                        disabled={index > currentStep + 1}
                        className={`transition-all duration-300 cursor-pointer disabled:cursor-not-allowed ${
                          index <= currentStep
                            ? "w-3 h-3 bg-[#5DADE2] rounded-full hover:scale-110"
                            : index === currentStep + 1
                            ? "w-2 h-2 bg-[#5DADE2] bg-opacity-50 rounded-full hover:scale-110"
                            : "w-2 h-2 bg-gray-200 rounded-full"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex-1 flex flex-col"
                    >
                      {isIntroStep && (
                        <div className="text-center flex-1 flex flex-col justify-center">
                          <div className="text-6xl mb-4">{introSteps[currentStep].image}</div>
                          <h2 className="text-xl font-bold text-gray-800 mb-4">{introSteps[currentStep].title}</h2>
                          <p className="text-sm text-black leading-relaxed mb-6">{introSteps[currentStep].content}</p>
                        </div>
                      )}

                      {isQuestionStep && (
                        <div className="flex-1 flex flex-col">
                          <h2 className="text-lg font-bold text-black mb-6">
                            {questions[currentStep - introSteps.length].question}
                          </h2>
                          <div className="space-y-3 flex-1 overflow-y-auto pr-1 max-h-[200px]">
                            {questions[currentStep - introSteps.length].options.map((option, index) => (
                              <button
                                key={index}
                                onClick={() => handleAnswerSelect(currentStep - introSteps.length, option)}
                                className={`w-full p-3 text-left rounded-xl border-2 transition-all duration-200 ${
                                  answers[currentStep - introSteps.length] === option
                                    ? "border-[#5DADE2] bg-blue-50 text-[#5DADE2] shadow-md"
                                    : "border-gray-200 hover:border-gray-300 hover:shadow-sm text-black"
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {isFinalStep && (
                        <div className="text-center flex-1 flex flex-col justify-center">
                          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#5DADE2] rounded-full mb-4 mx-auto">
                            <div className="text-center">
                              <div className="text-white font-bold text-lg leading-none">11%</div>
                              <div className="text-white text-xs leading-none">OFF</div>
                            </div>
                          </div>
                          <h2 className="text-2xl font-bold text-black mb-4">Congratulations!</h2>
                          <p className="text-sm text-black mb-4">
                            You've earned 11% off all products (on orders over ₹2,000).
                          </p>
                          <div className="bg-gray-100 p-4 rounded-lg mb-4 flex items-center justify-between">
                            <div>
                              <p className="text-xs text-black mb-1">Your Coupon Code:</p>
                              <p className="text-lg font-bold text-[#5DADE2]">COCIRQL11</p>
                            </div>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText("COCIRQL11")
                                setCopied(true)
                                setTimeout(() => setCopied(false), 1500)
                              }}
                              className="bg-[#5DADE2] hover:bg-[#4A90B8] text-white px-3 py-1 rounded-lg text-sm"
                            >
                              Copy
                            </button>
                          </div>
                          {copied && <p className="text-green-500 text-xs mb-4">Copied!</p>}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  {!isFinalStep && (
                    <button
                      onClick={handleNext}
                      disabled={isQuestionStep && !answers[currentStep - introSteps.length]}
                      className="w-full bg-[#5DADE2] hover:bg-[#4A90B8] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                    >
                      Continue
                      <ArrowForward fontSize="small" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default CouponSystem


function CouponButton({ onClick }) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0.6 }} // 👈 mostly hidden to the left
      animate={{ x: -80, opacity: 0.8 }} // 👈 slight peek
      whileHover={{ x: 5, opacity: 1 }}  // 👈 slide fully into view on hover
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="fixed left-0 bottom-10 z-30"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#5DADE2] text-white px-4 py-2 rounded-r-full shadow-lg cursor-pointer flex items-center gap-2 min-h-[10vh] pointer-events-auto"
      >
        <div className="text-center">
          <div className="text-xs font-bold">COUPON</div>
          <div className="text-lg font-bold">11%</div>
          <div className="text-xs">OFF</div>
        </div>
        <div className="text-xl">🎁</div>
      </motion.button>
    </motion.div>
  )
}
