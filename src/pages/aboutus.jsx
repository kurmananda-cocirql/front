"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
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

  const categories = [
    {
      icon: "🧘‍♀️",
      title: "Meditation & Breathwork",
      desc: "Find calm in the chaos. Learn to pause, breathe, and center your mind through guided stillness.",
    },
    {
      icon: "📓",
      title: "Creative Journaling",
      desc: "Turn your thoughts into art. Discover the joy of writing, reflecting, and expressing through pages that feel like you.",
    },
    {
      icon: "✒️",
      title: "Calligraphy",
      desc: "Write like art. Explore beautiful scripts and brush strokes that slow you down and draw you in.",
    },
    {
      icon: "🦢",
      title: "Origami",
      desc: "Fold. Focus. Flow. Create wonder from paper as you dive into this calming, mindful craft.",
    },
    {
      icon: "🏡",
      title: "DIY Home Decor",
      desc: "Make your space your own. Learn hands-on hacks and create pieces that bring joy to your surroundings.",
    },
    {
      icon: "🎙",
      title: "Storytelling",
      desc: "Your voice, your story. Discover the power of narrative — from personal tales to powerful performances.",
    },
    {
      icon: "🧘",
      title: "Yoga",
      desc: "Move with intention. Find balance, stretch your limits, and reconnect with your body through guided yoga flows.",
    },
    {
      icon: "🌿",
      title: "Gardening",
      desc: "Grow something real. Get your hands in the soil, connect with nature, and nurture life from the ground up.",
    },
    {
      icon: "🎨",
      title: "Doodling",
      desc: "Draw without rules. Embrace playful creativity as you let lines, shapes, and patterns flow freely.",
    },
    {
      icon: "🕯",
      title: "Candle Making",
      desc: "Melt, pour, create. Blend scents, wax, and design into something cozy, personal, and handmade.",
    },
    {
      icon: "🧠",
      title: "Healing Through Art",
      desc: "Let creativity heal. Use colors, textures, and self-expression as a gentle form of emotional release and connection.",
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
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            About <span className="text-[#FECE18]">CoCirql</span>
          </h1>
          <div className="w-24 h-1 bg-[#FECE18] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Where Passions Meet People
          </p>
        </motion.div>

        {/* Main About Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At CoCirql, we're reimagining how people connect, learn, and grow—through shared passions and everyday
              hobbies. We're bringing connection back—through hobbies that spark curiosity and communities that feel
              like home.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Whether it's exploring yoga, learning the art of storytelling, doodling for joy, or baking for the soul —
              we bring together passionate coaches and curious learners in one vibrant space. No pressure, no
              perfection— just the joy of learning something new, at your own pace, with a community that gets it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We're building a platform where workshops aren't just classes— they're circles. Circles of shared
              experiences, ideas, laughs, and lightbulb moments. CoCirql is your invitation to reconnect - with
              yourself, your passions, and people like you.
            </p>

            <div className="bg-gradient-to-r from-[#FECE18] to-[#FFD700] text-black p-6 rounded-xl text-center">
              <p className="text-xl font-semibold">"Build Real Circles Through What You Love."</p>
            </div>
          </div>
        </motion.div>

        {/* What You'll Find Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">What Awaits You at CoCirql</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Move. Breathe. Flow.</h3>
              <p className="text-gray-600">
                Yoga mats, deep breaths, healing sounds — find your calm and connect with your body and mind.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Make. Mess. Magic.</h3>
              <p className="text-gray-600">
                Paint, doodle, scribble — express without limits. Here, creativity has no rules.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Grow. Craft. Bloom.</h3>
              <p className="text-gray-600">
                Get your hands dirty — journaling, DIY, gardening, and everything that sparks slow joy.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Talk. Meet. Click.</h3>
              <p className="text-gray-600">
                Interest-led circles designed to connect you with people who share your mindset.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Categories Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Explore Our Categories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">How It Works</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            New here? Let's get you started. It's simple. You show up. We do the rest.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#FECE18] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Browse Interest-Based Workshops</h3>
              <p className="text-gray-600">Discover sessions that match your passions and curiosity.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#FECE18] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Save Your Spot</h3>
              <p className="text-gray-600">Quick and easy booking to secure your place in the circle.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#FECE18] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Join In. Connect. Repeat.</h3>
              <p className="text-gray-600">Show up, learn, connect, and watch your circle grow.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Because when you connect over shared interests, the conversations flow — and the circle grows.
            </p>
            <button className="bg-[#FECE18] hover:bg-[#E6B800] text-black font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Start Exploring
            </button>
          </div>
        </motion.div>

        {/* Host With Us Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold mb-6">Got a skill, passion, or story to share?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            At CoCirql, we believe everyone has something worth circling around. Whether you're a yoga instructor,
            journaling enthusiast, design thinker, or someone with a great idea for a community hangout — this is your
            space to host meaningful, interest-led gatherings.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FECE18]">Why Host with CoCirql?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3">✓</span>A built-in audience that loves to explore and connect
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3">✓</span>
                  Hassle-free logistics and marketing support
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3">✓</span>A vibrant, curated platform that celebrates your
                  expertise
                </li>
                <li className="flex items-start">
                  <span className="text-[#FECE18] mr-3">✓</span>
                  The joy of building a circle around something you care about
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FECE18]">Some Ideas We Love:</h3>
              <ul className="space-y-2">
                <li>• Art-filled birthday circles</li>
                <li>• Corporate journaling or storytelling sessions</li>
                <li>• Garden therapy workshops for team bonding</li>
                <li>• Candle-making as a mindfulness break</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">
              💡 Got an idea? We're always looking for fresh formats, fun topics, and passionate voices. Let's co-create
              something beautiful.
            </p>
            <button className="bg-[#FECE18] hover:bg-[#E6B800] text-black font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Host With Us
            </button>
          </div>
        </motion.div>
      </motion.div>

    </main>
  )
}
