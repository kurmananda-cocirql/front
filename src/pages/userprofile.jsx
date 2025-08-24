"use client"

import { useState } from "react"
import { Person, School, ExitToApp } from "@mui/icons-material"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")

  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 9876543210",
    joinDate: "March 2024",
  }

  const workshops = [
    {
      id: 1,
      name: "Creative Journaling",
      description: "Learn creative journaling techniques and express yourself through writing.",
      joinLink: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 2,
      name: "Urban Gardening",
      description: "Discover how to grow plants in small urban spaces.",
      joinLink: "https://meet.google.com/xyz-uvwx-yz",
    },
    {
      id: 3,
      name: "Storytelling Workshop",
      description: "Master the art of storytelling with practical exercises.",
      joinLink: "https://meet.google.com/story-tell-123",
    },
    {
      id: 4,
      name: "Candle Making",
      description: "Create beautiful handmade candles with natural materials.",
      joinLink: "https://meet.google.com/candle-make-456",
    },
  ]

  const handleSignOut = () => {
    console.log("Signing out...")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Fixed Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-[87vh]">
        {/* Profile Header */}
        <div className="p-6 border-b bg-[#FECE18]">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
              <Person className="text-[#FECE18] text-2xl" />
            </div>
            <h3 className="font-bold text-black">{user.name}</h3>
            <p className="text-sm text-black">{user.email}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "profile" ? "bg-[#FECE18] text-black font-bold" : "text-black hover:bg-gray-100"
              }`}
            >
              <Person />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveTab("workshops")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "workshops" ? "bg-[#FECE18] text-black font-bold" : "text-black hover:bg-gray-100"
              }`}
            >
              <School />
              <span>Workshops</span>
            </button>
          </div>
        </nav>

        {/* Sign Out */}
        <div className="absolute bottom-4 left-4 right-4 ">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg"
          >
            <ExitToApp />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8 text-center mx-auto">
        {activeTab === "profile" && (
          <div className="mx-auto">
            <h1 className="text-3xl font-bold text-black mb-8">Profile</h1>
            <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Name</label>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <span className="text-black">{user.name}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Email</label>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <span className="text-black">{user.email}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Phone</label>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <span className="text-black">{user.phone}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Member Since</label>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <span className="text-black">{user.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "workshops" && (
          <div>
            <h1 className="text-3xl font-bold text-black mb-8">Workshops</h1>
            <div className="space-y-6">
              {workshops.map((workshop) => (
                <div key={workshop.id} className="bg-white rounded-lg shadow p-6 flex text-center justify-between">
                  <div className="mb-4 flex  flex-col mx-auto items-center">
                    <School className="text-[#FECE18] mr-2" />
                    <h3 className="text-xl font-bold text-black">{workshop.name}</h3>
                  <p className="text-black mb-4">{workshop.description}</p>
                  </div>
                  <a
                    href={workshop.joinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-[#FECE18] hover:bg-orange-300 text-black font-bold px-6 py-3 rounded-lg h-1/2 my-auto"
                  >
                    Join
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
