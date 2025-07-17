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
    Divider,
} from "@mui/material"
import {
    Person as PersonIcon,
    Work as WorkIcon,
    Event as EventIcon,
    CloudUpload as CloudUploadIcon,
    Image as ImageIcon,
    Videocam as VideocamIcon,
    Payment as PaymentIcon,
    ContactMail as ContactMailIcon,
    Description as DescriptionIcon,
    Group as GroupIcon,
    Settings as SettingsIcon,
    Delete as DeleteIcon,
    VideoLibrary as VideoLibraryIcon
} from "@mui/icons-material"

const currencyOptions = ["USD", "INR", "EUR", "GBP"]
const CATEGORIES = [
    "Design", "Technology", "Business", "Marketing", 
    "Health & Wellness", "Education", "Arts & Crafts", 
    "Music", "Photography", "Cooking", "Other"
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
]

export default function WorkshopRequestForm({ onBack }) {
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

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const validatePhone = (phone) => /^\d{10,15}$/.test(phone.replace(/\s/g, ""))

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }))

        if (field === "email" && value && !validateEmail(value)) {
            setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }))
        }

        if (field === "phone" && value && !validatePhone(value)) {
            setErrors(prev => ({ ...prev, phone: "Please enter a valid phone number (10-15 digits)" }))
        }
    }

    const handleVideoUpload = (file) => {
        if (file && file.type.startsWith("video/")) {
            if (file.size > 100 * 1024 * 1024) {
                setErrors(prev => ({ ...prev, video: "Video file size should be less than 100MB" }))
                return
            }
            setUploadedVideo(file)
            setErrors(prev => ({ ...prev, video: "" }))
        } else {
            setErrors(prev => ({ ...prev, video: "Please upload a valid video file" }))
        }
    }

    const handleImageUpload = (files) => {
        const validImages = Array.from(files).filter(file => file.type.startsWith("image/"))

        if (validImages.length + uploadedImages.length > 2) {
            setErrors(prev => ({ ...prev, images: "You can only upload up to 2 images" }))
            return
        }

        const oversizedFiles = validImages.filter(file => file.size > 10 * 1024 * 1024)
        if (oversizedFiles.length > 0) {
            setErrors(prev => ({ ...prev, images: "Image files should be less than 10MB each" }))
            return
        }

        setUploadedImages(prev => [...prev, ...validImages].slice(0, 2))
        setErrors(prev => ({ ...prev, images: "" }))
    }

    const handleDrop = (e, type) => {
        e.preventDefault()
        setDragOver(prev => ({ ...prev, [type]: false }))

        const files = e.dataTransfer.files
        if (type === "video") {
            handleVideoUpload(files[0])
        } else {
            handleImageUpload(files)
        }
    }

    const handleDragOver = (e, type) => {
        e.preventDefault()
        setDragOver(prev => ({ ...prev, [type]: true }))
    }

    const handleDragLeave = (e, type) => {
        e.preventDefault()
        setDragOver(prev => ({ ...prev, [type]: false }))
    }

    const removeVideo = () => {
        setUploadedVideo(null)
    }

    const removeImage = (index) => {
        setUploadedImages(prev => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            console.log("Form submitted:", { formData, uploadedVideo, uploadedImages })
            alert("Workshop request submitted successfully!")
            onBack()
        }
    }

    const isFormValid = () => {
        const mandatoryFields = [
            "email", "phone", "coachDescription", "workshopDescription", 
            "topic", "category", "availabilityDate", "availabilityTime", 
            "totalSessions"
        ]
        
        return mandatoryFields.every(field => formData[field].trim() !== "") && 
               Object.values(errors).every(error => error === "") &&
               validateEmail(formData.email) && 
               validatePhone(formData.phone)
    }

    const SectionHeader = ({ icon: Icon, title, subtitle }) => (
        <Box sx={{ mb: 4 }}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                <Icon sx={{ color: "primary.main", fontSize: 28 }} />
                <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary" }}>
                    {title}
                </Typography>
            </Stack>
            {subtitle && (
                <Typography variant="body2" sx={{ color: "text.secondary", ml: 6 }}>
                    {subtitle}
                </Typography>
            )}
            <Divider sx={{ mt: 2 }} />
        </Box>
    )

    return (
        <Container maxWidth="md" sx={{ py: 4, fontFamily: "'Roboto', sans-serif" }}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                    Workshop Request Application
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    Please complete all required fields to submit your workshop proposal
                </Typography>
            </Box>

            <Card sx={{ p: 4, boxShadow: 2 }}>
                <form onSubmit={handleSubmit}>
                    {/* Coach ID Section */}
                    <SectionHeader 
                        icon={SettingsIcon} 
                        title="Coach Identification" 
                        subtitle="Internal coach identifier for tracking purposes" 
                    />
                    
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Coach ID"
                                value={formData.coachId}
                                onChange={(e) => handleInputChange("coachId", e.target.value)}
                                placeholder="e.g., COACH-9823"
                            />
                        </Grid>
                    </Grid>

                    {/* Contact Information */}
                    <SectionHeader 
                        icon={ContactMailIcon} 
                        title="Contact Information" 
                        subtitle="Primary contact details for communication" 
                    />
                    
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Email Address"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel>Country Code</InputLabel>
                                <Select
                                    value={formData.countryCode}
                                    onChange={(e) => handleInputChange("countryCode", e.target.value)}
                                    label="Country Code"
                                >
                                    {COUNTRY_CODES.map((item) => (
                                        <MenuItem key={item.code} value={item.code}>
                                            {item.code} ({item.country})
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                fullWidth
                                required
                                label="Phone Number"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                error={!!errors.phone}
                                helperText={errors.phone}
                            />
                        </Grid>
                    </Grid>

                    {/* Instructor Profile */}
                    <SectionHeader 
                        icon={PersonIcon} 
                        title="Instructor Profile" 
                        subtitle="Your professional background and expertise" 
                    />
                    
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                label="Professional Background & Expertise"
                                multiline
                                rows={4}
                                value={formData.coachDescription}
                                onChange={(e) => handleInputChange("coachDescription", e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Previous Teaching Experience"
                                multiline
                                rows={4}
                                value={formData.previousExperience}
                                onChange={(e) => handleInputChange("previousExperience", e.target.value)}
                            />
                        </Grid>
                    </Grid>

                    {/* Workshop Details */}
                    <SectionHeader 
                        icon={DescriptionIcon} 
                        title="Workshop Details" 
                        subtitle="Comprehensive information about your proposed workshop" 
                    />
                    
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                label="Workshop Title/Topic"
                                value={formData.topic}
                                onChange={(e) => handleInputChange("topic", e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel required>Workshop Category</InputLabel>
                                <Select
                                    value={formData.category}
                                    onChange={(e) => handleInputChange("category", e.target.value)}
                                    label="Workshop Category"
                                >
                                    {CATEGORIES.map((category) => (
                                        <MenuItem key={category} value={category}>{category}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Workshop Description"
                                multiline
                                rows={5}
                                value={formData.workshopDescription}
                                onChange={(e) => handleInputChange("workshopDescription", e.target.value)}
                            />
                        </Grid>
                    </Grid>

                    {/* Schedule Information */}
                    <SectionHeader 
                        icon={EventIcon} 
                        title="Schedule Information" 
                        subtitle="Proposed dates and session details" 
                    />
                    
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                required
                                type="date"
                                label="Preferred Start Date"
                                value={formData.availabilityDate}
                                onChange={(e) => handleInputChange("availabilityDate", e.target.value)}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                required
                                type="time"
                                label="Preferred Time"
                                value={formData.availabilityTime}
                                onChange={(e) => handleInputChange("availabilityTime", e.target.value)}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                required
                                type="number"
                                label="Total Number of Sessions"
                                value={formData.totalSessions}
                                onChange={(e) => handleInputChange("totalSessions", e.target.value)}
                                inputProps={{ min: 1 }}
                            />
                        </Grid>
                    </Grid>

                    {/* Participant Information */}
                    <SectionHeader 
                        icon={GroupIcon} 
                        title="Participant Information" 
                        subtitle="Details about your target audience" 
                    />
                    
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Target Audience"
                                value={formData.targetAudience}
                                onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                                multiline
                                rows={3}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Prerequisites"
                                value={formData.prerequisites}
                                onChange={(e) => handleInputChange("prerequisites", e.target.value)}
                                multiline
                                rows={3}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Required Materials"
                                value={formData.requiredMaterials}
                                onChange={(e) => handleInputChange("requiredMaterials", e.target.value)}
                                multiline
                                rows={2}
                            />
                        </Grid>
                    </Grid>

                    {/* Pricing & Registration */}
                    <SectionHeader 
                        icon={PaymentIcon} 
                        title="Pricing & Registration" 
                        subtitle="Workshop fee and registration details" 
                    />
                    
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <InputLabel>Currency</InputLabel>
                                <Select
                                    value={formData.currency}
                                    onChange={(e) => handleInputChange("currency", e.target.value)}
                                    label="Currency"
                                >
                                    {currencyOptions.map(currency => (
                                        <MenuItem key={currency} value={currency}>{currency}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Workshop Price"
                                value={formData.price}
                                onChange={(e) => handleInputChange("price", e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Registration Link"
                                value={formData.link}
                                onChange={(e) => handleInputChange("link", e.target.value)}
                            />
                        </Grid>
                    </Grid>

                    {/* Supporting Materials */}
                    <SectionHeader 
                        icon={CloudUploadIcon} 
                        title="Supporting Materials" 
                        subtitle="Optional files to enhance your application" 
                    />
                    
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        {/* Video Upload */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                sx={{
                                    p: 3,
                                    border: `2px dashed ${dragOver.video ? "primary.main" : "#e0e0e0"}`,
                                    backgroundColor: dragOver.video ? "action.hover" : "background.paper",
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
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
                                <label htmlFor="video-upload" style={{ width: '100%', cursor: 'pointer' }}>
                                    {uploadedVideo ? (
                                        <Box>
                                            <VideoLibraryIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                                            <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                                {uploadedVideo.name}
                                            </Typography>
                                            <Button
                                                variant="outlined"
                                                startIcon={<DeleteIcon />}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    e.stopPropagation()
                                                    removeVideo()
                                                }}
                                                sx={{ mt: 1 }}
                                            >
                                                Remove
                                            </Button>
                                        </Box>
                                    ) : (
                                        <Box>
                                            <VideocamIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                                            <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                                Upload Introduction Video
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                Drag & drop or click to browse
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Max 100MB
                                            </Typography>
                                        </Box>
                                    )}
                                </label>
                            </Paper>
                            {errors.video && (
                                <Alert severity="error" sx={{ mt: 1 }}>
                                    {errors.video}
                                </Alert>
                            )}
                        </Grid>

                        {/* Images Upload */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                sx={{
                                    p: 3,
                                    border: `2px dashed ${dragOver.images ? "primary.main" : "#e0e0e0"}`,
                                    backgroundColor: dragOver.images ? "action.hover" : "background.paper",
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
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
                                <label htmlFor="images-upload" style={{ width: '100%', cursor: 'pointer' }}>
                                    {uploadedImages.length > 0 ? (
                                        <Box>
                                            <ImageIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 2 }}>
                                                {uploadedImages.map((image, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={image.name.length > 15 ? `${image.name.substring(0, 15)}...` : image.name}
                                                        onDelete={() => removeImage(index)}
                                                        sx={{ maxWidth: 150 }}
                                                    />
                                                ))}
                                            </Box>
                                            {uploadedImages.length < 2 && (
                                                <Typography variant="body2" color="text.secondary">
                                                    You can add {2 - uploadedImages.length} more image{uploadedImages.length === 0 ? 's' : ''}
                                                </Typography>
                                            )}
                                        </Box>
                                    ) : (
                                        <Box>
                                            <ImageIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                                            <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                                Upload Workshop Images
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                Drag & drop or click to browse
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Max 2 images (10MB each)
                                            </Typography>
                                        </Box>
                                    )}
                                </label>
                            </Paper>
                            {errors.images && (
                                <Alert severity="error" sx={{ mt: 1 }}>
                                    {errors.images}
                                </Alert>
                            )}
                        </Grid>
                    </Grid>

                    {/* Submission */}
                    <Box sx={{ mt: 6, textAlign: 'center' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={!isFormValid()}
                            sx={{ 
                                px: 6, 
                                py: 2, 
                                fontSize: '1rem',
                                fontWeight: 500
                            }}
                        >
                            Submit Application
                        </Button>
                        
                        {!isFormValid() && (
                            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                                Please complete all required fields before submitting
                            </Typography>
                        )}
                    </Box>
                </form>
            </Card>
        </Container>
    )
}