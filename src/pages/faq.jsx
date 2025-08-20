"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExpandMore, ExpandLess } from "@mui/icons-material"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const faqData = [
    {
      question: "What is CoCirql?",
      answer:
        "CoCirql is an interactive platform for live, hobby-focused workshops led by experts - from yoga and writing to baking and creative skills. It combines expert-led sessions with peer support through a buddy system and community-driven learning experiences.",
      category: "About CoCirql",
    },
    {
      question: "How do I join a workshop?",
      answer:
        "Select a workshop, choose a time slot, and register using your account. Some sessions may be pay-per-class, while others are part of a subscription package. Once registered, you'll receive a confirmation email with the session link and any materials or preparation tips.",
      category: "Getting Started",
    },
    {
      question: "What kind of workshops are offered?",
      answer:
        "Workshops cover a wide range of topics such as Creative Journalling, Storytelling, Urban Gardening, Candle Making, and more. We aim for diversity in topics and levels - from beginner to intermediate and advanced.",
      category: "Workshops",
    },
    {
      question: "What is the Buddy Program?",
      answer:
        "The Buddy Program pairs you with a peer learner for ongoing support. It encourages accountability, shared growth, and continued learning beyond individual sessions. Buddies can collaborate on practice, give feedback, and celebrate progress together.",
      category: "Community",
    },
    {
      question: "Do I need any equipment or supplies?",
      answer:
        "Some workshops list materials or tools needed in the session description (e.g. a notebook, materials, or art supplies). Prep lists are provided in advance so you can get ready, but many sessions do not require you to bring anything else but yourself.",
      category: "Preparation",
    },
    {
      question: "What if I miss a live session?",
      answer: "We are not recording any live sessions as of now. We request you to attend all sessions positively.",
      category: "Sessions",
    },
    {
      question: "Can I switch or cancel a workshop?",
      answer:
        "Yes, typically you can cancel or reschedule up to a specified time before the session begins (5 days prior to the first session of the workshop) by contacting us via email.",
      category: "Policies",
    },
    {
      question: "How is CoCirql different from YouTube tutorials or Udemy?",
      answer:
        "CoCirql is very different from YouTube tutorials or Udemy courses. While those platforms offer pre-recorded videos where you learn alone at your own pace, CoCirql is all about live, interactive sessions with real coaches and a small group of learners. You can ask questions, get instant feedback, and actually connect with others who share your interest - something that's missing in one-way video learning.\n\nWe focus not just on teaching a skill but on creating a personal, emotional, and fun experience. Whether it's art, music, gardening, storytelling, or something offbeat - CoCirql helps you learn with real people, in real time, in a way that feels warm and human.",
      category: "About CoCirql",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-12 max-w-4xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <div className="w-20 h-1 bg-[#FECE18] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about CoCirql, our workshops, and how to
            get started.
          </p>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="flex flex-wrap gap-2">
              {[...new Set(faqData.map((item) => item.category))].map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#FECE18] bg-opacity-20 text-gray-700 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div variants={itemVariants} className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2 py-1 bg-[#FECE18] bg-opacity-20 text-xs font-medium text-gray-700 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                </div>
                <div className="flex-shrink-0">
                  {openItems.has(index) ? (
                    <ExpandLess className="text-[#FECE18]" />
                  ) : (
                    <ExpandMore className="text-gray-400" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openItems.has(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-100 pt-4">
                        <div className="prose prose-gray max-w-none">
                          {item.answer.split("\n\n").map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="bg-gradient-to-r from-[#FECE18] to-[#FFD700] rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Still Have Questions?</h2>
            <p className="text-lg text-black mb-6 opacity-90">
              Can't find what you're looking for? Our friendly team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@cocirql.com"
                className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg"
              >
                Email Support
              </a>
              <a
                href="/contact"
                className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Popular Topics */}
        <motion.div variants={itemVariants} className="mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FECE18] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Creative Workshops</h3>
                <p className="text-sm text-gray-600">Art, journaling, storytelling</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FECE18] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧘</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Wellness</h3>
                <p className="text-sm text-gray-600">Yoga, meditation, mindfulness</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FECE18] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Lifestyle</h3>
                <p className="text-sm text-gray-600">Gardening, cooking, crafts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FECE18] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-sm text-gray-600">Buddy program, peer support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
