"use client"

import { useState } from "react"
import { Search, Star, Users } from "lucide-react"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"

const WorkshopCard = ({
  lessons,
  title,
  price,
  rating,
  date,
  time,
  participants,
  description,
  linked,
  image,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 pt-2 shadow-sm border border-gray-100 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${image || "/placeholder.svg?height=400&width=400"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between my-2 items-start">
        <span className="text-sm text-gray-600">{lessons} lessons</span>
        <div className="text-center flex-1 mx-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <span className="text-lg font-semibold text-gray-900">{price}</span>
      </div>
      <hr className="border-b border-b-black" />
      <br />
      <div className="flex items-center justify-center space-x-4 mb-6 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>{rating}</span>
        </div>
        <span>{date}</span>
        <span>{time}</span>
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4" />
          <span>{participants}</span>
        </div>
      </div>

      <div className="mt-8 mb-6">
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-lg transition-colors"
        onClick={()=>{window.location.href=linked}}
      >
        Explore
      </motion.button>
    </motion.div>
  )
}

const App = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filters = ["All", "Yoga", "Meditation", "Art"]

  const workshops = [
    {
      lessons: 16,
      title: "Yoga",
      price: "$3,109",
      rating: 4.8,
      date: "1 June 2025",
      time: "7:00 AM",
      participants: "16.1k",
      description: "A calming, beginner-friendly yoga flow to help you ground your mind, stretch your body, and reconnect with your breath.",
      linked:'/workshopDetail',
      image: "https://imgs.search.brave.com/1E0H0zb0BvcHCahPfSJ486ZVEt9o4iMryX5qps03pC8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1naGlwcG8uY29t/L19uZXh0L3N0YXRp/Yy9tZWRpYS9mYXEt/aW1nLjUxYmE3ZTg0/LndlYnA",
    },
    {
      lessons: 16,
      title: "Yoga",
      price: "$3,109",
      rating: 4.8,
      date: "1 June 2025",
      time: "7:00 AM",
      participants: "16.1k",
      description: "A calming, beginner-friendly yoga flow to help you ground your mind, stretch your body, and reconnect with your breath.",
      linked:'/workshopDetail',
      image: "https://imgs.search.brave.com/1E0H0zb0BvcHCahPfSJ486ZVEt9o4iMryX5qps03pC8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1naGlwcG8uY29t/L19uZXh0L3N0YXRp/Yy9tZWRpYS9mYXEt/aW1nLjUxYmE3ZTg0/LndlYnA",
    },
    {
      lessons: 16,
      title: "Yoga",
      price: "$3,109",
      rating: 4.8,
      date: "1 June 2025",
      time: "7:00 AM",
      participants: "16.1k",
      description: "A calming, beginner-friendly yoga flow to help you ground your mind, stretch your body, and reconnect with your breath.",
      linked:'/workshopDetail',
      image: "https://imgs.search.brave.com/1E0H0zb0BvcHCahPfSJ486ZVEt9o4iMryX5qps03pC8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1naGlwcG8uY29t/L19uZXh0L3N0YXRp/Yy9tZWRpYS9mYXEt/aW1nLjUxYmE3ZTg0/LndlYnA",
    },
    {
      lessons: 16,
      title: "Yoga",
      price: "$3,109",
      rating: 4.8,
      date: "1 June 2025",
      time: "7:00 AM",
      participants: "16.1k",
      description: "A calming, beginner-friendly yoga flow to help you ground your mind, stretch your body, and reconnect with your breath.",
      linked:'/workshopDetail',
      image: "https://imgs.search.brave.com/1E0H0zb0BvcHCahPfSJ486ZVEt9o4iMryX5qps03pC8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1naGlwcG8uY29t/L19uZXh0L3N0YXRp/Yy9tZWRpYS9mYXEt/aW1nLjUxYmE3ZTg0/LndlYnA",
    },
    {
      lessons: 16,
      title: "Yoga",
      price: "$3,109",
      rating: 4.8,
      date: "1 June 2025",
      time: "7:00 AM",
      participants: "16.1k",
      description: "A calming, beginner-friendly yoga flow to help you ground your mind, stretch your body, and reconnect with your breath.",
      linked:'/workshopDetail',
      image: "/placeholder.svg?height=128&width=300",
    },
    {
      lessons: 16,
      title: "Yoga",
      price: "$3,109",
      rating: 4.8,
      date: "1 June 2025",
      time: "7:00 AM",
      participants: "16.1k",
      description: "A calming, beginner-friendly yoga flow to help you ground your mind, stretch your body, and reconnect with your breath.",
      linked:'/workshopDetail',
      image: "/placeholder.svg?height=128&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Discover Your Next <span className="text-yellow-400">Adventure</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our premium workshops designed to boost your skills and career
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center space-x-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${activeFilter === filter
                  ? "bg-yellow-400 text-black"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                }`}
            >
              {filter}
            </motion.button>
          ))}

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-3"
            >
              <input
                type="text"
                placeholder="Search workshops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="outline-none bg-transparent text-gray-600 placeholder-gray-400 w-48"
                autoFocus
              />
              <button
                onClick={() => {
                  setSearchQuery("")
                }}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <Search></Search>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Workshops Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {workshops.map((workshop, index) => (
            <WorkshopCard key={index} {...workshop} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default App