"use client"

import { useState } from "react"
import {
    Box,
    Card,
    Typography,
    TextField,
    Button,
    Grid,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Alert,
    Chip,
    Paper,
    Container,
    Stack,
} from "@mui/material"
import { CloudUpload, Delete, VideoLibrary, Image, Person, Work, Event, CloudUploadOutlined, Group, MonetizationOn, Badge } from "@mui/icons-material"

const currencyOptions = [
        "USD",
        "INR",
        "EUR",
        "GBP",
]

// Define mandatory fields
const MANDATORY_FIELDS = [
    "email",
    "phone",
    "coachDescription",
    "workshopDescription",
    "topic",
    "category",
    "availabilityDate",
    "availabilityTime",
    "totalSessions",
]

const CATEGORIES = [
    "Design",
    "Technology",
    "Business",
    "Marketing",
    "Health & Wellness",
    "Education",
    "Arts & Crafts",
    "Music",
    "Photography",
    "Cooking",
    "Other",
]

const COUNTRY_CODES = [
    { code: "+1", country: "US/CA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "IN" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+86", country: "CN" },
    { code: "+81", country: "JP" },
    { code: "+61", country: "AU" },
    { code: "+55", country: "BR" },
    { code: "+7", country: "RU" },
]

export default function RequestWorkshopFormAdmin({ onBack }) {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        countryCode: "+1",
        coachDescription: "",
        workshopDescription: "",
        topic: "",
        category: "",
        previousExperience: "",
        availabilityDate: "",
        availabilityTime: "",
        totalSessions: "",
        targetAudience: "",
        prerequisites: "",
        requiredMaterials: "",
        currency: "USD",
        price: "",
        link: "",
        coachId: "",
    })

    const [errors, setErrors] = useState({})
    const [uploadedVideo, setUploadedVideo] = useState(null)
    const [uploadedImages, setUploadedImages] = useState([])
    const [dragOver, setDragOver] = useState({ video: false, images: false })

    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10,15}$/
        return phoneRegex.test(phone.replace(/\s/g, ""))
    }

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }))
        }

        // Real-time validation
        if (field === "email" && value && !validateEmail(value)) {
            setErrors((prev) => ({ ...prev, email: "Please enter a valid email address" }))
        }

        if (field === "phone" && value && !validatePhone(value)) {
            setErrors((prev) => ({ ...prev, phone: "Please enter a valid phone number (10-15 digits)" }))
        }
    }

    const handleVideoUpload = (file) => {
        if (file && file.type.startsWith("video/")) {
            if (file.size > 100 * 1024 * 1024) {
                setErrors((prev) => ({ ...prev, video: "Video file size should be less than 100MB" }))
                return
            }
            setUploadedVideo(file)
            setErrors((prev) => ({ ...prev, video: "" }))
        } else {
            setErrors((prev) => ({ ...prev, video: "Please upload a valid video file" }))
        }
    }

    const handleImageUpload = (files) => {
        const validImages = Array.from(files).filter((file) => file.type.startsWith("image/"))

        if (validImages.length + uploadedImages.length > 2) {
            setErrors((prev) => ({ ...prev, images: "You can only upload up to 2 images" }))
            return
        }

        const oversizedFiles = validImages.filter((file) => file.size > 10 * 1024 * 1024)
        if (oversizedFiles.length > 0) {
            setErrors((prev) => ({ ...prev, images: "Image files should be less than 10MB each" }))
            return
        }

        setUploadedImages((prev) => [...prev, ...validImages].slice(0, 2))
        setErrors((prev) => ({ ...prev, images: "" }))
    }

    const handleDrop = (e, type) => {
        e.preventDefault()
        setDragOver((prev) => ({ ...prev, [type]: false }))

        const files = e.dataTransfer.files
        if (type === "video") {
            handleVideoUpload(files[0])
        } else {
            handleImageUpload(files)
        }
    }

    const handleDragOver = (e, type) => {
        e.preventDefault()
        setDragOver((prev) => ({ ...prev, [type]: true }))
    }

    const handleDragLeave = (e, type) => {
        e.preventDefault()
        setDragOver((prev) => ({ ...prev, [type]: false }))
    }

    const removeVideo = () => {
        setUploadedVideo(null)
    }

    const removeImage = (index) => {
        setUploadedImages((prev) => prev.filter((_, i) => i !== index))
    }

    const isFormValid = () => {
        const mandatoryFilled = MANDATORY_FIELDS.every((field) => formData[field].trim() !== "")
        const noErrors = Object.values(errors).every((error) => error === "")
        const emailValid = formData.email ? validateEmail(formData.email) : false
        const phoneValid = formData.phone ? validatePhone(formData.phone) : false

        return mandatoryFilled && noErrors && emailValid && phoneValid
    }

    const handleSubmit = () => {
        if (isFormValid()) {
            console.log("Form submitted:", { formData, uploadedVideo, uploadedImages })
            alert("Workshop request submitted successfully!")
            onBack()
        }
    }

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#FFFFFF", py: 6 }}>
            <Container maxWidth="md">
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "800",
                            color: "#000000",
                            mb: 2,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Workshop Request Application by admin
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#666666",
                            fontWeight: "400",
                            maxWidth: 600,
                            mx: "auto",
                        }}
                    >
                        Complete all sections below to submit your workshop proposal for review
                    </Typography>
                </Box>

                <Stack spacing={4}>
                    {/* Coach Details Section */}
                    <Card
                        sx={{
                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            borderRadius: 4,
                            overflow: "hidden",
                            border: "1px solid #F0F0F0",
                            mt: 5,
                        }}
                    >
                        <Box sx={{ bgcolor: "#000000", p: 4 }}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Badge sx={{ fontSize: 32, color: "#FFD54F" }} />
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: "700", color: "#FFFFFF", mb: 0.5 }}>
                                        Coach Details
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#CCCCCC" }}>
                                        Internal coach identifier (used for tracking)
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ p: 5 }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Coach ID"
                                        value={formData.coachId}
                                        onChange={(e) => handleInputChange("coachId", e.target.value)}
                                        placeholder="e.g., COACH-9823"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                    {/* Section 1: Contact Information */}
                    <Card
                        sx={{
                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            borderRadius: 4,
                            overflow: "hidden",
                            border: "1px solid #F0F0F0",
                        }}
                    >
                        <Box sx={{ bgcolor: "#000000", p: 4 }}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Person sx={{ fontSize: 32, color: "#FFD54F" }} />
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: "700", color: "#FFFFFF", mb: 0.5 }}>
                                        Contact Information
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#CCCCCC" }}>
                                        Provide your contact details for communication
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ p: 5 }}>
                            <Grid container spacing={4} className="w-full justify-center">
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email Address *"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        variant="outlined"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <FormControl fullWidth>
                                        <InputLabel>Country Code</InputLabel>
                                        <Select
                                            value={formData.countryCode}
                                            onChange={(e) => handleInputChange("countryCode", e.target.value)}
                                            label="Country Code"
                                            sx={{
                                                borderRadius: 3,
                                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#FFD54F" },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FFD54F", borderWidth: 2 },
                                            }}
                                        >
                                            {COUNTRY_CODES.map((item) => (
                                                <MenuItem key={item.code} value={item.code}>
                                                    {item.code} ({item.country})
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={8}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number *"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        error={!!errors.phone}
                                        helperText={errors.phone}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>

                    {/* Section 2: Instructor Profile */}
                    <Card
                        sx={{
                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            borderRadius: 4,
                            overflow: "hidden",
                            border: "1px solid #F0F0F0",
                        }}
                    >
                        <Box sx={{ bgcolor: "#000000", p: 4 }}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Work sx={{ fontSize: 32, color: "#FFD54F" }} />
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: "700", color: "#FFFFFF", mb: 0.5 }}>
                                        Instructor Profile
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#CCCCCC" }}>
                                        Tell us about your background and expertise
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ p: 5 }}>
                            <Grid container spacing={4} className="w-full justify-center">
                                <Grid item xs={12} className="w-1/3 justify-center">
                                    <TextField
                                        fullWidth
                                        label="Professional Background & Expertise *"
                                        multiline
                                        rows={5}
                                        value={formData.coachDescription}
                                        onChange={(e) => handleInputChange("coachDescription", e.target.value)}
                                        placeholder="Describe your professional background, qualifications, skills, and what makes you qualified to teach this workshop..."
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} className="w-1/3 justify-center">
                                    <TextField
                                        fullWidth
                                        label="Previous Teaching Experience"
                                        multiline
                                        rows={5}
                                        value={formData.previousExperience}
                                        onChange={(e) => handleInputChange("previousExperience", e.target.value)}
                                        placeholder="Share any previous teaching, training, or workshop experience (optional)..."
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>

                    {/* Section 2.5: Participant Essentials */}
                    <Card
                        sx={{
                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            borderRadius: 4,
                            overflow: "hidden",
                            border: "1px solid #F0F0F0",
                            mt: 5,
                        }}
                    >
                        <Box sx={{ bgcolor: "#000000", p: 4 }}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Group sx={{ fontSize: 32, color: "#FFD54F" }} />
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: "700", color: "#FFFFFF", mb: 0.5 }}>
                                        Participant Essentials
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#CCCCCC" }}>
                                        Help participants understand if the workshop is right for them and how to prepare
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ p: 5 }}>
                            <Grid container spacing={4} className="w-full justify-center">
                                <Grid item xs={12} className="w-1/3 justify-center">
                                    <TextField
                                        fullWidth
                                        label="Target Audience"
                                        value={formData.targetAudience}
                                        onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                                        placeholder="Who is this workshop intended for? "
                                        multiline
                                        rows={4}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} className="w-1/3 justify-center">
                                    <TextField
                                        fullWidth
                                        label="Prerequisites"
                                        value={formData.prerequisites}
                                        onChange={(e) => handleInputChange("prerequisites", e.target.value)}
                                        placeholder="Are there any prior skills or knowledge needed? (optional)"
                                        multiline
                                        rows={4}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} className="w-4/5 justify-center">
                                    <TextField
                                        fullWidth
                                        label="Required Materials"
                                        value={formData.requiredMaterials}
                                        onChange={(e) => handleInputChange("requiredMaterials", e.target.value)}
                                        placeholder="Mention any tools, devices, or resources participants need to bring"
                                        multiline
                                        rows={3}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>

                    {/* Section 3: Workshop Details */}
                    <Card
                        sx={{
                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            borderRadius: 4,
                            overflow: "hidden",
                            border: "1px solid #F0F0F0",
                        }}
                    >
                        <Box sx={{ bgcolor: "#000000", p: 4 }}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Event sx={{ fontSize: 32, color: "#FFD54F" }} />
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: "700", color: "#FFFFFF", mb: 0.5 }}>
                                        Workshop Details
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#CCCCCC" }}>
                                        Provide comprehensive details about your proposed workshop
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ p: 5 }} className="w-full justify-center">
                            <Grid container spacing={4} className="w-full justify-center">
                                <Grid item xs={12} md={6} className="w-1/2 justify-center">
                                    <TextField
                                        fullWidth
                                        label="Workshop Title/Topic *"
                                        value={formData.topic}
                                        onChange={(e) => handleInputChange("topic", e.target.value)}
                                        placeholder="e.g., Introduction to Digital Marketing"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6} className="w-1/3 justify-center">
                                    <FormControl fullWidth>
                                        <InputLabel>Workshop Category *</InputLabel>
                                        <Select
                                            value={formData.category}
                                            onChange={(e) => handleInputChange("category", e.target.value)}
                                            label="Workshop Category *"
                                            sx={{
                                                borderRadius: 3,
                                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#FFD54F" },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FFD54F", borderWidth: 2 },
                                            }}
                                        >
                                            {CATEGORIES.map((category) => (
                                                <MenuItem key={category} value={category}>
                                                    {category}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={4} className="w-1/4 justify-center">
                                    <TextField
                                        fullWidth
                                        type="date"
                                        label="Preferred Start Date *"
                                        value={formData.availabilityDate}
                                        onChange={(e) => handleInputChange("availabilityDate", e.target.value)}
                                        InputLabelProps={{ shrink: true }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={4} className="w-1/5 justify-center">
                                    <TextField
                                        fullWidth
                                        type="time"
                                        label="Preferred Time *"
                                        value={formData.availabilityTime}
                                        onChange={(e) => handleInputChange("availabilityTime", e.target.value)}
                                        InputLabelProps={{ shrink: true }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={4} className="w-1/3 justify-center">
                                    <TextField
                                        fullWidth
                                        type="number"
                                        label="Total Number of Sessions *"
                                        value={formData.totalSessions}
                                        onChange={(e) => handleInputChange("totalSessions", e.target.value)}
                                        inputProps={{ min: 1, max: 50 }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} className="w-3/4 justify-center">
                                    <TextField
                                        fullWidth
                                        label="Workshop Description *"
                                        multiline
                                        rows={6}
                                        value={formData.workshopDescription}
                                        onChange={(e) => handleInputChange("workshopDescription", e.target.value)}
                                        placeholder="Provide a detailed description: What will participants learn? What topics will be covered? What are the learning objectives and outcomes?"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>

                            </Grid>
                        </Box>
                    </Card>
                    {/* Section 3.5: Pricing & Registration */}
                    <Card
                        sx={{
                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            borderRadius: 4,
                            overflow: "hidden",
                            border: "1px solid #F0F0F0",
                            mt: 5,
                        }}
                    >
                        <Box sx={{ bgcolor: "#000000", p: 4 }}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <MonetizationOn sx={{ fontSize: 32, color: "#FFD54F" }} />
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: "700", color: "#FFFFFF", mb: 0.5 }}>
                                        Pricing & Registration
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#CCCCCC" }}>
                                        Set the workshop fee and share the registration link
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ p: 5 }}>
                            <Grid container spacing={4} className="w-full justify-center">
                                <Grid item xs={12} md={6} className="w-1/5 justify-center">
                                    <FormControl fullWidth>
                                        <InputLabel>Currency</InputLabel>
                                        <Select
                                            value={formData.currency}
                                            onChange={(e) => handleInputChange("currency", e.target.value)}
                                            label="Currency"
                                            sx={{
                                                borderRadius: 3,
                                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#FFD54F" },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FFD54F", borderWidth: 2 },
                                            }}
                                        >
                                            {currencyOptions.map((currency) => (
                                                <MenuItem key={currency} value={currency}>
                                                    {currency}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6} className="w-1/3 justify-center">
                                    <TextField
                                        fullWidth
                                        label="Workshop Price"
                                        value={formData.price}
                                        onChange={(e) => handleInputChange("price", e.target.value)}
                                        placeholder="e.g., 1999"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6} className="w-1/3 justify-center">
                                    <TextField
                                        fullWidth
                                        label="Registration Link"
                                        value={formData.link}
                                        onChange={(e) => handleInputChange("link", e.target.value)}
                                        placeholder="https://your-registration-page.com"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 3,
                                                "&:hover fieldset": { borderColor: "#FFD54F" },
                                                "&.Mui-focused fieldset": { borderColor: "#FFD54F", borderWidth: 2 },
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#FFD54F" },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>

                    {/* Section 4: Supporting Materials */}
                    <Card
                        sx={{
                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            borderRadius: 4,
                            overflow: "hidden",
                            border: "1px solid #F0F0F0",
                        }}
                        className="w-full justify-center"
                    >
                        <Box sx={{ bgcolor: "#000000", p: 4 }} >
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <CloudUploadOutlined sx={{ fontSize: 32, color: "#FFD54F" }} />
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: "700", color: "#FFFFFF", mb: 0.5 }}>
                                        Supporting Materials
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#CCCCCC" }}>
                                        Upload supporting materials to enhance your application
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ p: 5 }}>
                            <Grid container spacing={4} className="w-full justify-center">
                                {/* Video Upload */}
                                <Grid item xs={12} md={6} className="w-2/5 justify-center">
                                    <Typography variant="h6" sx={{ fontWeight: "600", color: "#000000", mb: 3 }} className="text-center">
                                        Introduction Video
                                    </Typography>
                                    <Paper
                                        sx={{
                                            border: `3px dashed ${dragOver.video ? "#FFD54F" : "#E0E0E0"}`,
                                            borderRadius: 4,
                                            p: 4,
                                            textAlign: "center",
                                            bgcolor: dragOver.video ? "#FFF9C4" : "#FAFAFA",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            minHeight: 180,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            "&:hover": {
                                                borderColor: "#FFD54F",
                                                bgcolor: "#FFF9C4",
                                            },
                                        }}
                                        onDrop={(e) => handleDrop(e, "video")}
                                        onDragOver={(e) => handleDragOver(e, "video")}
                                        onDragLeave={(e) => handleDragLeave(e, "video")}
                                    >
                                        <input
                                            type="file"
                                            accept="video/*"
                                            style={{ display: "none" }}
                                            id="video-upload"
                                            onChange={(e) => handleVideoUpload(e.target.files[0])}
                                        />
                                        <label htmlFor="video-upload" style={{ cursor: "pointer", width: "100%" }}>
                                            {uploadedVideo ? (
                                                <Box>
                                                    <VideoLibrary sx={{ fontSize: 56, color: "#FFD54F", mb: 2 }} />
                                                    <Typography variant="body1" sx={{ color: "#000000", mb: 2, fontWeight: "600" }}>
                                                        {uploadedVideo.name}
                                                    </Typography>
                                                    <Button
                                                        size="medium"
                                                        startIcon={<Delete />}
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            removeVideo()
                                                        }}
                                                        sx={{
                                                            color: "#000000",
                                                            bgcolor: "#FFD54F",
                                                            borderRadius: 3,
                                                            "&:hover": { bgcolor: "#FFC107" },
                                                        }}
                                                    >
                                                        Remove Video
                                                    </Button>
                                                </Box>
                                            ) : (
                                                <Box>
                                                    <CloudUpload sx={{ fontSize: 56, color: "#CCCCCC", mb: 2 }} />
                                                    <Typography variant="h6" sx={{ color: "#000000", fontWeight: "600", mb: 1 }}>
                                                        Upload Video
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: "#666666" }}>
                                                        Drag & drop or click to browse
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: "#999999", mt: 1 }}>
                                                        Maximum file size: 100MB
                                                    </Typography>
                                                </Box>
                                            )}
                                        </label>
                                    </Paper>
                                    {errors.video && (
                                        <Alert severity="error" sx={{ mt: 2, borderRadius: 3 }}>
                                            {errors.video}
                                        </Alert>
                                    )}
                                </Grid>

                                {/* Images Upload */}
                                <Grid item xs={12} md={6} className="w-2/5 justify-center">
                                    <Typography variant="h6" sx={{ fontWeight: "600", color: "#000000", mb: 3 }} className="text-center">
                                        Workshop Images
                                    </Typography>
                                    <Paper
                                        sx={{
                                            border: `3px dashed ${dragOver.images ? "#FFD54F" : "#E0E0E0"}`,
                                            borderRadius: 4,
                                            p: 4,
                                            textAlign: "center",
                                            bgcolor: dragOver.images ? "#FFF9C4" : "#FAFAFA",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            minHeight: 180,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            "&:hover": {
                                                borderColor: "#FFD54F",
                                                bgcolor: "#FFF9C4",
                                            },
                                        }}
                                        onDrop={(e) => handleDrop(e, "images")}
                                        onDragOver={(e) => handleDragOver(e, "images")}
                                        onDragLeave={(e) => handleDragLeave(e, "images")}
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            style={{ display: "none" }}
                                            id="images-upload"
                                            onChange={(e) => handleImageUpload(e.target.files)}
                                        />
                                        <label htmlFor="images-upload" style={{ cursor: "pointer", width: "100%" }}>
                                            {uploadedImages.length > 0 ? (
                                                <Box>
                                                    <Image sx={{ fontSize: 56, color: "#FFD54F", mb: 2 }} />
                                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 2 }}>
                                                        {uploadedImages.map((image, index) => (
                                                            <Chip
                                                                key={index}
                                                                label={image.name}
                                                                onDelete={() => removeImage(index)}
                                                                sx={{
                                                                    bgcolor: "#FFD54F",
                                                                    color: "#000000",
                                                                    fontWeight: "500",
                                                                    borderRadius: 3,
                                                                    "& .MuiChip-deleteIcon": { color: "#000000" },
                                                                }}
                                                            />
                                                        ))}
                                                    </Box>
                                                    {uploadedImages.length < 2 && (
                                                        <Typography variant="body2" sx={{ color: "#666666" }}>
                                                            Add {2 - uploadedImages.length} more image{2 - uploadedImages.length > 1 ? "s" : ""}
                                                        </Typography>
                                                    )}
                                                </Box>
                                            ) : (
                                                <Box>
                                                    <CloudUpload sx={{ fontSize: 56, color: "#CCCCCC", mb: 2 }} />
                                                    <Typography variant="h6" sx={{ color: "#000000", fontWeight: "600", mb: 1 }}>
                                                        Upload Images
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: "#666666" }}>
                                                        Drag & drop or click to browse
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: "#999999", mt: 1 }}>
                                                        Maximum 2 images, 10MB each
                                                    </Typography>
                                                </Box>
                                            )}
                                        </label>
                                    </Paper>
                                    {errors.images && (
                                        <Alert severity="error" sx={{ mt: 2, borderRadius: 3 }}>
                                            {errors.images}
                                        </Alert>
                                    )}
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>

                    {/* Submit Section */}
                    <Card
                        sx={{
                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            borderRadius: 4,
                            overflow: "hidden",
                            border: "1px solid #F0F0F0",
                        }}
                    >
                        <Box sx={{ bgcolor: "#F8F9FA", p: 5, textAlign: "center" }}>
                            <Typography variant="h5" sx={{ fontWeight: "700", color: "#000000", mb: 2 }}>
                                Submit Your Application
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#666666", mb: 4, maxWidth: 500, mx: "auto" }}>
                                Please review all information carefully before submitting your workshop proposal for review
                            </Typography>

                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleSubmit}
                                disabled={!isFormValid()}
                                sx={{
                                    bgcolor: isFormValid() ? "#000000" : "#CCCCCC",
                                    color: isFormValid() ? "#FFFFFF" : "#999999",
                                    px: 8,
                                    py: 3,
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    textTransform: "none",
                                    borderRadius: 4,
                                    minWidth: 280,
                                    "&:hover": {
                                        bgcolor: isFormValid() ? "#333333" : "#CCCCCC",
                                        transform: isFormValid() ? "translateY(-2px)" : "none",
                                    },
                                    "&:disabled": {
                                        bgcolor: "#CCCCCC",
                                        color: "#999999",
                                    },
                                    transition: "all 0.3s ease",
                                    boxShadow: isFormValid() ? "0 4px 16px rgba(0,0,0,0.2)" : "none",
                                }}
                            >
                                Submit Application
                            </Button>

                            {!isFormValid() && (
                                <Typography variant="body2" sx={{ color: "#FF5722", mt: 3, fontWeight: "500" }}>
                                    Please complete all required fields (*) to submit your application
                                </Typography>
                            )}
                        </Box>
                    </Card>
                </Stack>
            </Container>
        </Box>
    )
}
