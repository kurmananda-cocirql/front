"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import Navbar from "../components/Navbar"

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("Dashboard")

    // Chart data
    const chartData = [
        { month: "Jan", lastWeek: 80, lastMonth: 20 },
        { month: "Feb", lastWeek: 95, lastMonth: 15 },
        { month: "Mar", lastWeek: 65, lastMonth: 25 },
        { month: "Apr", lastWeek: 85, lastMonth: 20 },
        { month: "May", lastWeek: 65, lastMonth: 25 },
        { month: "Jun", lastWeek: 90, lastMonth: 15 },
        { month: "Jul", lastWeek: 80, lastMonth: 20 },
        { month: "Aug", lastWeek: 85, lastMonth: 15 },
        { month: "Sep", lastWeek: 80, lastMonth: 20 },
        { month: "Oct", lastWeek: 90, lastMonth: 10 },
        { month: "Nov", lastWeek: 95, lastMonth: 5 },
        { month: "Dec", lastWeek: 80, lastMonth: 20 },
    ]

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="flex mt-4 mx-0 gap-0 lg:mx-[10vw]">
                {/* Left Sidebar */}
                <div className="w-80 bg-yellow-400 rounded-l-2xl p-8">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-white rounded-full px-8 py-2 mb-6">
                            <h2 className="text-xl font-semibold text-black">Rahul</h2>
                        </div>
                        <button className="text-black font-medium underline hover:no-underline">Edit Your Profile</button>
                    </div>

                    {/* Navigation Menu */}
                    <div className="border-t border-yellow-500 pt-8">
                        <nav className="space-y-6">
                            <div>
                                <button
                                    onClick={() => setActiveTab("Dashboard")}
                                    className={`text-xl font-semibold text-black ${activeTab === "Dashboard" ? "border-b-2 border-black pb-1" : ""
                                        }`}
                                >
                                    Dashboard
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => setActiveTab("My Workshops")}
                                    className={`text-xl font-medium text-black ${activeTab === "My Workshops" ? "border-b-2 border-black pb-1" : ""
                                        }`}
                                >
                                    My Workshops
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => setActiveTab("My Buddy")}
                                    className={`text-xl font-medium text-black ${activeTab === "My Buddy" ? "border-b-2 border-black pb-1" : ""
                                        }`}
                                >
                                    My Buddy
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white rounded-r-2xl p-8">
                    {/* Header Section */}
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-black mb-2">
                                Hi Rahul <span className="text-4xl wave">👋</span>
                            </h1>
                            <p className="text-xl text-gray-700">
                                Welcome to <span className="text-yellow-500 font-semibold">CoCircl</span> !
                            </p>
                        </div>
                        <div className="text-xl font-semibold text-black">31 May, 2025</div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="border border-gray-200 rounded-2xl p-6 text-center">
                            <h3 className="text-lg font-medium text-black mb-4">Total Workshops</h3>
                            <p className="text-5xl font-bold text-yellow-400">18</p>
                        </div>
                        <div className="border border-gray-200 rounded-2xl p-6 text-center">
                            <h3 className="text-lg font-medium text-black mb-4">In Progress</h3>
                            <p className="text-5xl font-bold text-yellow-400">12</p>
                        </div>
                        <div className="border border-gray-200 rounded-2xl p-6 text-center">
                            <h3 className="text-lg font-medium text-black mb-4">Completed</h3>
                            <p className="text-5xl font-bold text-yellow-400">6</p>
                        </div>
                    </div>

                    {/* Activity and Progress Section */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* My Activity with Recharts */}
                        <div className="border border-gray-200 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-black mb-6">My Activity</h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                                        <Legend
                                            verticalAlign="top"
                                            height={36}
                                            iconType="circle"
                                            wrapperStyle={{ fontSize: "12px", color: "#6B7280" }}
                                        />
                                        <Bar dataKey="lastMonth" stackId="a" fill="#93C5FD" name="Last Month" radius={[0, 0, 4, 4]} />
                                        <Bar dataKey="lastWeek" stackId="a" fill="#3B82F6" name="Last Week" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* My Progress */}
                        <div className="border border-gray-200 rounded-2xl p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-black">My Progress</h3>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-4">
                                {/* Workshop 2 - 70% */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium text-black">Workshop 2</span>
                                            <span className="text-sm font-medium text-blue-600">70%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Workshop 1 - 75% */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium text-black">Workshop 1</span>
                                            <span className="text-sm font-medium text-pink-600">75%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-pink-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Workshop 2 - 70% (second one) */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium text-black">Workshop 2</span>
                                            <span className="text-sm font-medium text-blue-600">70%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Workshop 3 - 90% */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium text-black">Workshop 3</span>
                                            <span className="text-sm font-medium text-green-600">90%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
