"use client"

import { useState } from "react"
import {
    Box,
    Typography,
    Button,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Paper
} from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
// Back arrow icon component
const BackArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-4 text-black">
                {/* Back Button and Title */}
                <div className="flex items-center mb-4">
                    <button className="flex items-center justify-center bg-white w-12 h-12 border-2 border-gray-300 rounded-lg hover:bg-[#FECE18] text-black transition-colors mr-8" onClick={() => { window.location.href = '/workshops' }}>
                        <BackArrowIcon />
                    </button>
                </div>

                {/* Workshop Detail Card */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 4,
                        alignItems: "flex-start",
                        flexWrap: "nowrap", // Prevent wrapping
                        width: "100%",
                    }}
                    className=' border border-gray-200 b-2 rounded-lg p-4 shadow-lg bg-white mb-6'
                >
                    {/* LEFT COLUMN (Title + Media Grid) */}
                    <Box sx={{ flexGrow: 1 }} className='w-full items-center'>
                        <Typography variant="h5" fontWeight="bold" gutterBottom className="text-black px-6">
                           Breathe & Release: A Journey Into Yoga ... {/* just the first 20 character after that.. */}
                        </Typography>

                        <Grid container spacing={2} className="w-full justify-center items-center p-2">
                            {/* Video */}
                            <Grid item xs={12} sm={8} className='w-11/16'>
                                <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden" }} className=' w-full'>
                                    <video
                                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                                        controls
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 8,
                                            objectFit: "cover",
                                        }}
                                    />
                                </Box>
                            </Grid>

                            {/* Images */}
                            <Grid item xs={12} sm={4} className='w-1/4'>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                    <img
                                        src="https://picsum.photos/200/140"
                                        alt="Yoga 1"
                                        style={{ width: "100%", borderRadius: 8, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://picsum.photos/200/140?grayscale"
                                        alt="Yoga 2"
                                        style={{ width: "100%", borderRadius: 8, objectFit: "cover" }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* RIGHT COLUMN (Buy Card) */}
                    <Box
                        sx={{
                            border: "1px solid #eee",
                            borderRadius: 2,
                            padding: 2,
                            display: "flex",
                            flexShrink: 0,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            boxShadow: 1,
                        }}
                    >
                        {/* Top Info */}
                        <Box>
                            <Typography variant="body2" color="text.secondary">
                                conducted by <strong>Aditi Sharma</strong>
                            </Typography>

                            <Typography variant="body2" mt={0.5} color="text.secondary">
                                1,564 participants &nbsp;&nbsp; 25 June 2025 &nbsp;&nbsp; 7:00 AM
                            </Typography>

                            <List dense sx={{ mt: 2 }}>
                                {[
                                    "No Perquisites",
                                    "Beginner friendly",
                                    "Anyone can participate",
                                ].map((text, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                            <CheckIcon color="success" />
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        {/* Bottom Actions */}
                        <Box mt={3}>
                            <Divider sx={{ mb: 2 }} />
                            <Typography variant="h5" fontWeight="bold">
                                ₹3,109 <Typography variant="caption">50% off</Typography>
                            </Typography>

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    py: 1.4,
                                    background: "linear-gradient(to left, #facc15, #fde68a)",
                                    color: "#000",
                                    fontWeight: "bold",
                                    '&:hover': {
                                        background: "linear-gradient(to left, #facc15, #fbbf24)",
                                    },
                                }}
                            >
                                Buy Now
                            </Button>

                            <Button
                                onClick={() => { window.location.href = '/shopcart' }}
                                fullWidth
                                variant="outlined"
                                sx={{ mt: 1.5, py: 1.3, fontWeight: "bold", color: "#000" }}
                            >
                                Add to cart
                            </Button>
                        </Box>
                    </Box>
                </Box>


                {/* Lessons Section */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-4">
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

