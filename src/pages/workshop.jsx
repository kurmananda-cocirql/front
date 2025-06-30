"use client"

import { useState } from "react"
import { Search, Clock, Calendar, User, Users } from "lucide-react"
import { motion } from "framer-motion"
import { Button, Checkbox, FormControlLabel } from "@mui/material"

const App = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const workshops = [
    {
      lessons: 16,
      title: "Breathe & Release: A Journey Into Restorative Yoga",
      category: "Yoga",
      price: "₹3,109",
      rating: 4.8,
      date: "25 June 2025",
      time: "7:00 AM",
      participants: "1,564",
      instructor: "Aditi Sharma",
      description:
        "Join us for a rejuvenating yoga workshop designed to help you reconnect with your body, mind, and breath.",
      linked: "/workshopDetail",
      image: "https://picsum.photos/",
    },
    {
      lessons: 12,
      title: "Mindful Meditation: Finding Inner Peace",
      category: "Meditation",
      price: "₹2,499",
      rating: 4.7,
      date: "28 June 2025",
      time: "6:00 AM",
      participants: "892",
      instructor: "Rahul Mehta",
      description:
        "Discover the power of mindfulness and learn techniques to achieve mental clarity and emotional balance.",
      linked: "/workshopDetail",
      image: "https://picsum.photos/",
    },
    {
      lessons: 8,
      title: "Creative Art Therapy: Express Your Soul",
      category: "Art",
      price: "₹1,899",
      rating: 4.9,
      date: "30 June 2025",
      time: "4:00 PM",
      participants: "456",
      instructor: "Priya Singh",
      description:
        "Unleash your creativity through therapeutic art practices. Perfect for beginners and experienced artists alike.",
      linked: "/workshopDetail",
      image: "https://picsum.photos/",
    },
    {
      lessons: 10,
      title: "Advanced Yoga Flow: Strength & Flexibility",
      category: "Yoga",
      price: "₹3,599",
      rating: 4.8,
      date: "2 July 2025",
      time: "7:30 AM",
      participants: "723",
      instructor: "Vikram Joshi",
      description: "Take your yoga practice to the next level with advanced poses and flowing sequences.",
      linked: "/workshopDetail",
      image: "https://picsum.photos/",
    },
    {
      lessons: 6,
      title: "Zen Meditation: Path to Enlightenment",
      category: "Meditation",
      price: "₹2,199",
      rating: 4.6,
      date: "5 July 2025",
      time: "5:30 AM",
      participants: "634",
      instructor: "Sunita Patel",
      description: "Explore traditional Zen meditation techniques and find your path to inner peace and clarity.",
      linked: "/workshopDetail",
      image: "https://picsum.photos/",
    },
    {
      lessons: 14,
      title: "Abstract Art Workshop: Colors & Emotions",
      category: "Art",
      price: "₹2,799",
      rating: 4.8,
      date: "8 July 2025",
      time: "2:00 PM",
      participants: "389",
      instructor: "Arjun Kumar",
      description:
        "Express your emotions through abstract art and discover the therapeutic power of creative expression.",
      linked: "/workshopDetail",
      image: "https://picsum.photos/",
    },
  ]

  const categories = ["Yoga", "Meditation", "Art", "Fitness", "Cooking", "Photography", "Music", "Dance", "Writing", "Technology", "Business", "Personal Development", "Health & Wellness", "Travel", "Language Learning", "Gardening", "Crafts", "Fashion", "Beauty", "Sports", "Finance", "Marketing", "Leadership", "Public Speaking", "Social Media", "Graphic Design", "Web Development", "Data Science", "AI & Machine Learning", "Blockchain", "Cybersecurity", "Cloud Computing", "Mobile App Development", "Game Development", "Virtual Reality", "Augmented Reality", "Robotics", "Internet of Things (IoT)", "Quantum Computing", "Sustainability", "Environmental Science", "Astronomy", "History", "Philosophy", "Psychology", "Sociology", "Anthropology", "Political Science", "Economics"]
  const [selectedCategories, setSelectedCategories] = useState(["Yoga"])

  const filteredWorkshops = workshops.filter((workshop) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(workshop.category)
    const matchesSearch =
      workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workshop.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 ">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 max-w-7xl py-2  mx-auto justify-between flex flex-col md:flex-row gap-2 h-[10vh]"
        >
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-gray-900">
              Discover Your Next <span className="text-yellow-400">Adventure</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our premium workshops designed to boost your skills and career
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-3"
            >
              <input
                type="text"
                placeholder="Search workshops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="outline-none bg-transparent text-gray-600 placeholder-gray-400 w-[30vw]"
                autoFocus
              />
              <button
                onClick={() => {
                  setSearchQuery("")
                }}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <Search />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>


        {/* Main Content with Sidebar and Grid */}
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-64 flex-shrink-0 "
          >
            <div className="bg-white rounded-lg p-6 shadow-sm top-[20vh] fixed">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Categories</h3>
              <hr style={{ borderColor: "black", height: '2px', backgroundColor: "black" }} />
              <div className="flex flex-col mt-2 overflow-y-auto max-h-[70vh]">
                {categories.map((category) => (
                  <FormControlLabel
                    key={category}
                    control={
                      <Checkbox
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        sx={{
                          color: "#6b7280",
                          "&.Mui-checked": {
                            color: "#daa520",
                          },
                        }}
                      />
                    }
                    label={
                      <span
                        className={`text-sm font-medium ${selectedCategories.includes(category) ? "text-gray-900" : "text-gray-500"
                          }`}
                      >
                        {category}
                      </span>
                    }
                  />
                ))}
              </div>
            </div>
            <div className="w-full block">a</div>
          </motion.div>


          {/* Workshops Grid */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {filteredWorkshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{workshop.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{workshop.description}</p>
                    <div className="flex items-center text-sm justify-center text-gray-500 gap-1 mx-auto my-2">
                      <Users className="w-4 h-4" />
                      <span>{workshop.participants} participants</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{workshop.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                      <User className="w-4 h-4" />
                      <span>conducted by {workshop.instructor}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">{workshop.price}</span>
                      <Button
                        variant="contained"
                        onClick={workshop.linked ? () => window.location.href = workshop.linked : null}
                        sx={{
                          background: "linear-gradient(to right,rgb(250, 233, 168), #facc15)",
                          color: "#000",
                          fontWeight: 500,
                          textTransform: "none",
                          paddingX: 5,
                          "&:hover": {
                            backgroundColor: "#eab308",
                          },
                        }}
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredWorkshops.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No workshops found matching your criteria.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App