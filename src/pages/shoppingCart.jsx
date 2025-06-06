"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"


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

// Cart Item Component
const CartItem = ({ item, isLast }) => (
    <div className={`py-6 ${!isLast ? "border-b border-gray-200" : ""}`}>
        <div className="flex items-start space-x-6">
            {/* Item Image */}
            <div className="w-32 h-24 bg-gray-300 rounded-lg flex-shrink-0"></div>

            {/* Item Details */}
            <div className="flex-1">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                            <div className="flex items-center space-x-1">
                                <span className="text-sm font-medium">{item.rating}</span>
                                <StarIcon />
                            </div>
                        </div>
                        <p className="text-gray-600 mb-3">By {item.instructor}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{item.lessons} Lessons</span>
                            <span>{item.date}</span>
                            <span>{item.time}</span>
                        </div>
                    </div>
                    <div className="text-xl font-semibold text-gray-900">{item.price}</div>
                </div>
            </div>
        </div>
    </div>
)

const ShoppingCart = () => {
    const [cartItems] = useState([
        {
            id: 1,
            title: "Yoga",
            instructor: "Aditi Sharma",
            rating: 4.8,
            price: "₹3,109",
            lessons: 16,
            date: "1 June 2025",
            time: "7:00 AM",
            image: "/placeholder.svg?height=96&width=128",
        },
        {
            id: 2,
            title: "Yoga",
            instructor: "Aditi Sharma",
            rating: 4.8,
            price: "₹3,109",
            lessons: 16,
            date: "1 June 2025",
            time: "7:00 AM",
            image: "/placeholder.svg?height=96&width=128",
        },
        {
            id: 3,
            title: "Yoga",
            instructor: "Aditi Sharma",
            rating: 4.8,
            price: "₹3,109",
            lessons: 16,
            date: "1 June 2025",
            time: "7:00 AM",
            image: "/placeholder.svg?height=96&width=128",
        },
    ])

    const calculateTotal = () => {
        return "₹3,109" // In a real app, you'd calculate this from cart items
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items Section */}
                    <div className="lg:col-span-2">
                        {/* Back Button and Title */}
                        <div className="flex items-center mb-8">
                            <button className="flex items-center justify-center bg-gray-500 w-12 h-12 border-2 border-gray-300 rounded-lg hover:bg-black transition-colors mr-8" onClick={()=>{window.location.href='/workshopDetail'}}>
                                <BackArrowIcon />
                            </button>
                            <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
                        </div>

                        {/* Cart Items */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            {cartItems.map((item, index) => (
                                <CartItem key={item.id} item={item} isLast={index === cartItems.length - 1} />
                            ))}
                        </div>
                    </div>

                    {/* Order Summary Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-8">
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-lg text-gray-600">Total</span>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-6">{calculateTotal()}</div>
                            </div>

                            <div className="space-y-4">
                                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-2xl transition-colors">
                                    Proceed to checkout
                                </button>
                                <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-2xl border-2 border-gray-300 transition-colors">
                                    Apply Coupon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
