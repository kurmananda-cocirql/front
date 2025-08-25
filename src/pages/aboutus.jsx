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
            Where Passion Meets People
          </p>
        </motion.div>

        {/* Main About Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At CoCirql, we’re bringing connection back - through hobbies that feel like home.

            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Whether it’s exploring yoga, learning the art of storytelling, doodling for joy, or baking for the soul-  we bring together passionate coaches and curious learners in one vibrant space. No pressure, no perfection-  just the joy of learning something new, at your own pace, with a community that gets it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We’re building a platform where workshops aren’t just classes-  they’re circles. Circles of shared experiences, ideas, laughs, and lightbulb moments. <br />CoCirql is your invitation to reconnect - with yourself, your passions, and people like you.
            </p>

            <div className="bg-gradient-to-r from-[#FECE18] to-[#FFD700] text-black p-6 rounded-xl text-center">
              <p className="text-xl font-semibold">"A Creative Circle just built for you."</p>
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

        
      </motion.div>

    </main>
  )
}
