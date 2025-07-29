"use client"
import React, { useEffect } from "react"
import { useState } from "react"
import { Search, Clock, Calendar, User, Users } from "lucide-react"
import { motion } from "framer-motion"
import { Button, Checkbox, FormControlLabel } from "@mui/material"

const App = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    fetch("/workshops_data.json")
      .then((res) => res.json())
      .then((data) => setWorkshops(data))
      .catch((err) => console.error("Failed to load workshops:", err));
  }, []);

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
    <div className="min-h-screen bg-gray-50 mt-2">
      <div className="mx-auto px-4 ">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 max-w-7xl py-2  mx-auto justify-center flex flex-col md:flex-row gap-2 h-[10vh]"
        >
          {/* <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 text-left mb-2">
              Discover Your Next <span className="text-yellow-400">Adventure</span>
            </h1>
            <p className="text-md text-gray-600 max-w-2xl mx-auto text-left">
              Explore our premium workshops designed to boost your skills and career
            </p>
          </div> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center w-full md:w-auto "
          >

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              className=" flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm"
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
            <div className="bg-white rounded-lg p-6 shadow-sm top-[10vh] sticky h-[75vh]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CATEGORIES</h3>
              <hr style={{ borderColor: "black", height: '2px', backgroundColor: "black" }} />
              <div className="flex flex-col mt-2 overflow-y-auto max-h-[66vh]">
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