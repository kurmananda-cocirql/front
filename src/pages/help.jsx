"use client"

import { motion } from "framer-motion"
import { Email, Chat, Help, QuestionAnswer, Support, Schedule, ContactSupport } from "@mui/icons-material"

export default function HelpSupportPage() {
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

  const supportOptions = [
    {
      icon: <Email className="text-3xl" />,
      title: "Email Support",
      description: "Get detailed help via email. We typically respond within 24 hours.",
      contact: "support@cocirql.com",
      action: "Send Email",
      link: "mailto:support@cocirql.com",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: <QuestionAnswer className="text-3xl" />,
      title: "FAQ",
      description: "Find quick answers to the most common questions about CoCirql.",
      contact: "Browse FAQ",
      action: "View FAQ",
      link: "/faqs",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
  ]

  const quickHelp = [
    {
      title: "Getting Started",
      items: [
        "How to create an account",
        "Booking your first workshop",
        "Setting up your profile",
        "Understanding the buddy system",
      ],
    },
    {
      title: "Workshop Management",
      items: [
        "Joining a live session",
        "Canceling or rescheduling",
        "Workshop materials and prep",
        "Technical requirements",
      ],
    },
    {
      title: "Account & Billing",
      items: ["Payment methods", "Subscription management", "Refund policies", "Account settings"],
    },
    {
      title: "Community & Features",
      items: ["Buddy program details", "Community guidelines", "Feedback and reviews", "Privacy and safety"],
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-12 max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Help & Support</h1>
          <div className="w-20 h-1 bg-[#FECE18] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help! Whether you need quick answers or detailed support, we've got you covered.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div variants={itemVariants} className="mb-16 mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${option.color} border-2 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300`}
              >
                <div className={`${option.iconColor} mb-4 flex justify-center`}>{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{option.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">{option.contact}</p>
                </div>
                <a
                  href={option.link}
                  className="bg-[#FECE18] hover:bg-[#E6B800] text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-300 inline-block"
                >
                  {option.action}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Help Topics */}
        <motion.div variants={itemVariants} className="mb-16 ">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Quick Help Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelp.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-[#FECE18] mr-2 mt-1">•</span>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
            <div className="text-red-600 mb-4">
              <Support className="text-4xl mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Help?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              If you're experiencing technical issues during a live workshop or need urgent assistance, contact us
              immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@cocirql.com?subject=Urgent Support Needed"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Email: support@cocirql.com
              </a>
              <a
                href="mailto:support@cocirql.com?subject=Technical Issue"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Technical Support
              </a>
            </div>
          </div>
        </motion.div>

        {/* Response Times */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Response Times</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Email className="text-green-600 text-2xl" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600">Within 24 hours</p>
                <p className="text-sm text-gray-500 mt-1">Monday - Friday</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Help className="text-orange-600 text-2xl" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Issues</h3>
                <p className="text-gray-600">Within 4 hours</p>
                <p className="text-sm text-gray-500 mt-1">During workshop hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Support className="text-red-600 text-2xl" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Urgent Support</h3>
                <p className="text-gray-600">Within 1 hour</p>
                <p className="text-sm text-gray-500 mt-1">Live session issues</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Self-Help Resources */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-gradient-to-r from-[#FECE18] to-[#FFD700] rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-black text-center mb-6">Self-Help Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                <QuestionAnswer className="text-black text-3xl mb-4 mx-auto" />
                <h3 className="font-semibold text-black mb-2">FAQ Section</h3>
                <p className="text-black opacity-90 text-sm mb-4">
                  Find answers to common questions about workshops, accounts, and more.
                </p>
                <a
                  href="/faq"
                  className="bg-white hover:bg-gray-100 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-300 inline-block"
                >
                  Browse FAQ
                </a>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                <Help className="text-black text-3xl mb-4 mx-auto" />
                <h3 className="font-semibold text-black mb-2">User Guides</h3>
                <p className="text-black opacity-90 text-sm mb-4">
                  Step-by-step guides to help you make the most of CoCirql.
                </p>
                <button className="bg-white hover:bg-gray-100 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
                  Coming Soon
                </button>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                <Chat className="text-black text-3xl mb-4 mx-auto" />
                <h3 className="font-semibold text-black mb-2">Community Forum</h3>
                <p className="text-black opacity-90 text-sm mb-4">Connect with other learners and share experiences.</p>
                <button className="bg-white hover:bg-gray-100 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Teaser */}
        <motion.div variants={itemVariants}>
          <div className="bg-white rounded-xl p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prefer to Send a Message?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              While we're working on a contact form, you can always reach us directly via email. We read every message
              and respond as quickly as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@cocirql.com?subject=General Inquiry"
                className="bg-[#FECE18] hover:bg-[#E6B800] text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Email: support@cocirql.com
              </a>
              <a
                href="mailto:support@cocirql.com?subject=Feedback"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Send Feedback
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
