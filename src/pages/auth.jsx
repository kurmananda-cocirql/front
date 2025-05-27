"use client"

import Navbar from "../components/Navbar"
import { useState } from "react"
import { motion } from "framer-motion"

const AuthApp = () => {
    const [currentPage, setCurrentPage] = useState("signin")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phone: "",
        company: "",
        jobTitle: "",
        experience: "",
        skills: [],
        bio: "",
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            alert("Sign in successful!")
        }, 2000)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setCurrentPage("details")
        }, 2000)
    }

    const handleDetailsSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            alert("Profile setup complete!")
        }, 2000)
    }

    const addSkill = (skill) => {
        if (skill && !formData.skills.includes(skill)) {
            setFormData((prev) => ({
                ...prev,
                skills: [...prev.skills, skill],
            }))
        }
    }

    const removeSkill = (skillToRemove) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter((skill) => skill !== skillToRemove),
        }))
    }

    // Background Animation Component
    const AnimatedBackground = () => (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-r from-amber-300/20 to-orange-300/20"
                    initial={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 300 + 100}px`,
                        height: `${Math.random() * 300 + 100}px`,
                        opacity: 0.3,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: Math.random() * 25 + 15,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    )

    // Sign In Page
    if (currentPage === "signin") {
        return (
            <>
                <Navbar />
                <div className=" h-[90vh] bg-gradient-to-br from-amber-400 via-orange-50 to-amber-500 flex items-center justify-center p-4">
                    <AnimatedBackground />

                    <div className="relative z-10 w-full max-w-md">
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-8"
                        >
                            <h1 className="text-4xl font-bold text-amber-900 mb-3">Welcome Back</h1>
                            <p className="text-black text-lg">Sign in to continue your journey</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8"
                        >
                            <form onSubmit={handleSignIn} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-amber-900 mb-2">Email Address</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-grey-600 rounded-xl focus:border-black focus:outline-none transition-all text-amber-900 placeholder-grey-900"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-amber-900 mb-2">Password</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-grey-600 rounded-xl focus:border-black focus:outline-none transition-all text-amber-900 placeholder-grey-900"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="w-4 h-4 text-amber-600 border-amber-300 rounded" />
                                        <span className="ml-2 text-sm text-amber-800">Remember me</span>
                                    </label>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        href="#"
                                        className="text-sm text-amber-600 hover:text-amber-800 font-semibold"
                                    >
                                        Forgot password?
                                    </motion.a>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black  py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Signing in...
                                        </div>
                                    ) : (
                                        "SIGN IN"
                                    )}
                                </motion.button>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-amber-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-amber-800 font-medium">Or continue with</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center py-3 px-4 border-2 bg-amber-200 rounded-xl  hover:bg-amber-400 hover:text-black transition-all"
                                >
                                    <span className="font-medium text-amber-800">Google</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center py-3 px-4 border-2 bg-amber-200 rounded-xl  hover:bg-amber-400 hover:text-black transition-all"
                                >
                                    <span className="font-medium text-amber-800">LinkedIn</span>
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center mt-6"
                        >
                            <p className="text-amber-800">
                                Don't have an account?{" "}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setCurrentPage("signup")}
                                    className="text-amber-900 hover:text-gray-600 font-bold underline"
                                >
                                    Sign up here
                                </motion.button>
                            </p>
                        </motion.div>
                    </div>
                </div></>
        )
    }

    if (currentPage === "signup") {
        return (
            <>
                <Navbar />
                <div className="h-[90vh] bg-gradient-to-br from-amber-400 via-orange-50 to-amber-500 flex items-center justify-center p-4">
                    <AnimatedBackground />

                    <div className="relative z-10 w-full max-w-md">
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-8"
                        >
                            <h1 className="text-4xl font-bold text-amber-900 mb-3">Join Us Today</h1>
                            <p className="text-black text-lg">Create your account and get started</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8"
                        >
                            <form onSubmit={handleSignUp} className="space-y-6">
                                {[
                                    { label: "Email Address", name: "email", type: "email", placeholder: "Enter your email" },
                                    { label: "Password", name: "password", type: "password", placeholder: "Create a password" },
                                    { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm your password" }
                                ].map(({ label, name, type, placeholder }) => (
                                    <div key={name}>
                                        <label className="block text-sm font-semibold text-amber-900 mb-2">{label}</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type={type}
                                            name={name}
                                            value={formData[name]}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-grey-600 rounded-xl focus:border-black focus:outline-none transition-all text-amber-900 placeholder-grey-900"
                                            placeholder={placeholder}
                                        />
                                    </div>
                                ))}

                                <div className="flex items-start">
                                    <input type="checkbox" required className="w-4 h-4 text-amber-600 border-amber-300 rounded mt-1" />
                                    <label className="ml-2 text-sm text-amber-800">
                                        I agree to the{" "}
                                        <a href="#" className="text-amber-600 hover:text-amber-800 font-semibold underline">
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a href="#" className="text-amber-600 hover:text-amber-800 font-semibold underline">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Creating account...
                                        </div>
                                    ) : (
                                        "Create Account"
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center mt-6"
                        >
                            <p className="text-amber-800">
                                Already have an account?{" "}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setCurrentPage("signin")}
                                    className="text-amber-900 hover:text-gray-600 font-bold underline"
                                >
                                    Sign in here
                                </motion.button>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </>
        )
    }
    if (currentPage === "details") {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gradient-to-br from-amber-400 via-orange-50 to-amber-500 py-8 px-4">
                    <AnimatedBackground />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-8"
                        >
                            <h1 className="text-4xl font-bold text-amber-900 mb-3">Complete Your Profile</h1>
                            <p className="text-black text-lg">Tell us more about yourself</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8"
                        >
                            <form onSubmit={handleDetailsSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-amber-900 mb-2">First Name</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-grey-600 rounded-xl focus:border-black focus:outline-none transition-all text-amber-900 placeholder-grey-900"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-amber-900 mb-2">Last Name</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-grey-600 rounded-xl focus:border-black focus:outline-none transition-all text-amber-900 placeholder-grey-900"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-amber-900 mb-2">Phone Number</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border-2 border-grey-600 rounded-xl focus:border-black focus:outline-none transition-all text-amber-900 placeholder-grey-900"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-amber-900 mb-2">Company</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border-2 border-grey-600 rounded-xl focus:border-black focus:outline-none transition-all text-amber-900 placeholder-grey-900"
                                            placeholder="Your company"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-amber-900 mb-2">Job Title</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border-2 border-grey-600 rounded-xl focus:border-black focus:outline-none transition-all text-amber-900 placeholder-grey-900"
                                            placeholder="Your job title"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-amber-900 mb-2">Years of Experience</label>
                                    <motion.select
                                        whileFocus={{ scale: 1.02 }}
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border-2 border-grey-600 rounded-xl focus:border-black focus:outline-none transition-all text-amber-900"
                                    >
                                        <option value="">Select experience level</option>
                                        <option value="0-1">0-1 years</option>
                                        <option value="2-3">2-3 years</option>
                                        <option value="4-5">4-5 years</option>
                                        <option value="6-10">6-10 years</option>
                                        <option value="10+">10+ years</option>
                                    </motion.select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-amber-900 mb-3">Skills</label>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {formData.skills.map((skill, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-200 text-amber-900 font-medium"
                                            >
                                                {skill}
                                                <button
                                                    type="button"
                                                    onClick={() => removeSkill(skill)}
                                                    className="ml-2 text-amber-700 hover:text-amber-900 font-bold"
                                                >
                                                    ×
                                                </button>
                                            </motion.span>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["React", "JavaScript", "Python", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"].map(
                                            (skill) => (
                                                <motion.button
                                                    key={skill}
                                                    type="button"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => addSkill(skill)}
                                                    disabled={formData.skills.includes(skill)}
                                                    className="px-3 py-1 text-sm border-2 border-amber-300 rounded-full hover:bg-amber-100 disabled:opacity-50 disabled:cursor-not-allowed text-amber-800 font-medium"
                                                >
                                                    + {skill}
                                                </motion.button>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-amber-900 mb-2">Bio</label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.02 }}
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border-2 border-grey-600 rounded-xl focus:border-black focus:outline-none transition-all text-amber-900 placeholder-grey-900"
                                        placeholder="Tell us about yourself..."
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Completing setup...
                                        </div>
                                    ) : (
                                        "Complete Setup"
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </>
        );
    }

}

export default AuthApp
