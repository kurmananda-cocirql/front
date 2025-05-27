"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const CoachProfile = () => {
  const [activeTab, setActiveTab] = useState("about")

  const stats = [
    { icon: "★", label: "Rating", value: "4.9", color: "text-amber-600" },
    { icon: "👤", label: "Connections", value: "2.4K", color: "text-amber-700" },
    { icon: "📊", label: "Projects", value: "47", color: "text-amber-800" },
    { icon: "⏱", label: "Experience", value: "5+ Years", color: "text-amber-600" },
  ]

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "Next.js",
    "Tailwind CSS",
    "System Design",
  ]

  const recentActivity = [
    { action: "Completed project", item: "E-commerce Dashboard", time: "2 hours ago" },
    { action: "Updated profile", item: "Added new certifications", time: "1 day ago" },
    { action: "Joined team", item: "Frontend Architecture", time: "3 days ago" },
    { action: "Published article", item: "React Performance Optimization", time: "1 week ago" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-200/10 to-slate-200/10"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 150}px`,
              height: `${Math.random() * 200 + 150}px`,
              opacity: 0.1,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              rotate: [0, 180],
            }}
            transition={{
              duration: Math.random() * 40 + 30,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 pt-12"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Profile Image */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <div className="w-28 h-28 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=128&h=128&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </motion.div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">Sarah Johnson</h1>
                <p className="text-lg text-amber-700 font-medium mb-3">Senior Full Stack Developer</p>
                <p className="text-gray-600 mb-6 max-w-2xl leading-relaxed">
                  Experienced software engineer specializing in scalable web applications and modern JavaScript
                  frameworks. Passionate about clean code, system architecture, and delivering exceptional user
                  experiences.
                </p>

                {/* Contact Info */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📧</span>
                    <span>sarah.johnson@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">🔗</span>
                    <span>linkedin.com/in/sarahjohnson</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-3">
                  {[
                    { icon: "GitHub", href: "#" },
                    { icon: "LinkedIn", href: "#" },
                    { icon: "Portfolio", href: "#" },
                    { icon: "Resume", href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all shadow-sm font-medium"
                >
                  Connect
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all shadow-sm font-medium"
                >
                  Message
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-4 mb-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="text-xl text-gray-600 mb-2">{stat.icon}</div>
                <div className="text-xl font-semibold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-4 mb-8"
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-1">
            <div className="flex gap-1">
              {["about", "skills", "activity"].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-3 rounded-md font-medium transition-all text-sm ${
                    activeTab === tab
                      ? "bg-amber-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="container mx-auto px-4 mb-12"
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            {activeTab === "about" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
                <div className="text-gray-700 space-y-4 leading-relaxed">
                  <p>
                    Senior Full Stack Developer with over 5 years of experience designing and implementing scalable web
                    applications. Proven track record of leading development teams and delivering high-quality software
                    solutions that drive business growth.
                  </p>
                  <p>
                    Expertise in modern JavaScript frameworks, cloud architecture, and agile development methodologies.
                    Strong background in both frontend and backend technologies, with a focus on performance
                    optimization and user experience.
                  </p>
                  <p>
                    Committed to continuous learning and staying current with industry best practices. Experience
                    mentoring junior developers and contributing to open-source projects.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors text-center"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "activity" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
                    >
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-900 font-medium">{activity.item}</div>
                        <div className="text-sm text-gray-600 mt-1">{activity.action}</div>
                      </div>
                      <span className="text-xs text-gray-500 flex-shrink-0">{activity.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="bg-white border-t border-gray-100">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="container mx-auto text-center py-12 px-4"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to collaborate?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all shadow-sm font-medium"
              >
                View Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all shadow-sm font-medium"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CoachProfile
