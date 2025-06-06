"use client"
import Navbar from "../components/Navbar"

import { useState } from "react"

// Star icon component
const StarIcon = () => (
    <svg className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
)

// Back arrow icon component
const BackArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
)

// Play button icon component
const PlayIcon = () => (
    <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
        />
    </svg>
)

const WorkshopDetail = () => {
    const [activeLesson, setActiveLesson] = useState(null)

    const lessons = [
        { id: 1, title: "Introduction to Yoga Basics" },
        { id: 2, title: "Breathing Techniques and Meditation" },
        { id: 3, title: "Basic Yoga Poses and Alignment" },
        { id: 4, title: "Sun Salutation Sequence" },
        { id: 5, title: "Standing Poses and Balance" },
        { id: 6, title: "Seated Poses and Twists" },
        { id: 7, title: "Backbends and Heart Opening" },
        { id: 8, title: "Forward Folds and Hip Openers" },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Back Button and Title */}
                <div className="flex items-center mb-8">
                    <button className="flex items-center justify-center bg-gray-500 w-12 h-12 border-2 border-gray-300 rounded-lg hover:bg-black transition-colors mr-8" onClick={()=>{window.location.href='/workshops'}}>
                        <BackArrowIcon />
                    </button>
                    <h1 className="text-4xl font-bold text-gray-900">
                        About <span className="text-yellow-400">Workshop</span>
                    </h1>
                </div>

                {/* Workshop Detail Card */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Video/Image Section */}
                        <div className="relative">
                            <div className="bg-gray-300 rounded-2xl aspect-video flex items-center justify-center">
                                <button className="hover:scale-110 transition-transform">
                                    <PlayIcon />
                                </button>
                            </div>
                        </div>

                        {/* Workshop Info Section */}
                        <div className="space-y-6">
                            {/* Title and Rating */}
                            <div className="flex items-center justify-between">
                                <div className="bg-yellow-400 px-6 py-3 rounded-full">
                                    <h2 className="text-2xl font-bold text-black">Yoga</h2>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="text-lg font-semibold text-black">4.8</span>
                                    <StarIcon />
                                </div>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-gray-600 font-medium">AS</span>
                                </div>
                                <span className="text-lg font-medium text-gray-900">Aditi Sharma</span>
                            </div>

                            {/* Price and Schedule */}
                            <div className="flex items-center justify-between text-lg">
                                <span className="font-bold text-gray-900">₹3,109</span>
                                <span className="text-gray-600">1 June 2025</span>
                                <span className="text-gray-600">7:00 AM</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-4 pt-4">
                                <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-2xl transition-colors">
                                    Buy Now
                                </button>
                                <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-2xl border-2 border-gray-300 transition-colors" onClick={()=>{window.location.href='/shopcart'}}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lessons Section */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons in this Workshop</h2>
                    <div className="space-y-4">
                        {lessons.map((lesson) => (
                            <div
                                key={lesson.id}
                                className="flex items-center p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer"
                                onClick={() => setActiveLesson(lesson.id)}
                            >
                                <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center mr-4">
                                    <span className="font-semibold text-gray-700">{lesson.id}</span>
                                </div>
                                <span className="text-lg text-gray-900">{lesson.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkshopDetail
