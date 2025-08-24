"use client"

import { useState, useEffect } from "react"
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  Paper,
} from "@mui/material"
import {
  Person,
  Email,
  Work,
  Group,
  MenuBook,
  AttachMoney,
  CloudUpload,
  VideoLibrary,
  Image,
  Delete,
} from "@mui/icons-material"

// ✅ import your API helpers (no UI changes)
import { fetchCategories as fetchCategoriesAPI, createWorkshop } from "../datafetch/workshopAPI"

const currencyOptions = ["USD", "INR", "EUR", "GBP"]

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

// kept for fallback if API fails; **not used** if API returns categories
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

  // ✅ categories from API (no UI changes; just replace data source)
  const [apiCategories, setApiCategories] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(false)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        setLoadingCategories(true)
        const cats = await fetchCategoriesAPI()
        if (mounted) setApiCategories(Array.isArray(cats) ? cats : [])
      } catch (e) {
        console.error("Failed to fetch categories:", e)
      } finally {
        if (mounted) setLoadingCategories(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

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

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }

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

  const removeVideo = () => setUploadedVideo(null)

  const removeImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const isFormValid = () => {
    const mandatoryFilled = MANDATORY_FIELDS.every((field) => (formData[field] ?? "").trim() !== "")
    const noErrors = Object.values(errors).every((error) => error === "")
    const emailValid = formData.email ? validateEmail(formData.email) : false
    const phoneValid = formData.phone ? validatePhone(formData.phone) : false
    return mandatoryFilled && noErrors && emailValid && phoneValid
  }

  // ✅ Submit via API (kept your button, just wired the call)
  const handleSubmit = async () => {
    if (!isFormValid()) return

    try {
      // Pack payload. You can adapt this shape if your backend expects different keys.
      const payload = {
        ...formData,
        // keep uploaded files names only; adjust if your API accepts multipart
        uploadedVideoName: uploadedVideo?.name || null,
        uploadedImagesNames: uploadedImages.map((f) => f.name),
      }

      const res = await createWorkshop(payload)
      console.log("Workshop created:", res)
      alert("Workshop request submitted successfully!")
      onBack?.()
    } catch (err) {
      console.error(err)
      alert("Failed to create workshop: " + (err?.message || "Unknown error"))
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "white",
        py: 6,
        px: 3,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "black",
              mb: 2,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Workshop Request Application
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#666666",
              maxWidth: "600px",
              mx: "auto",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            The form below is to be filled by admins to request a workshop on behalf of a coach.
          </Typography>
        </Box>

        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {/* Coach ID Section */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FECE18",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Person sx={{ fontSize: 20, color: "black" }} />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Coach Identification
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666666",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Internal coach identifier for tracking purposes
                </Typography>
              </Box>
            </Box>
            <Box sx={{ maxWidth: 300 }}>
              <TextField
                fullWidth
                label="Coach ID"
                value={formData.coachId}
                onChange={(e) => handleInputChange("coachId", e.target.value)}
                placeholder="e.g., COACH-9823"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />
            </Box>
          </Box>

          {/* Contact Information */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FECE18",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Email sx={{ fontSize: 20, color: "black" }} />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Contact Information
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666666",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Provide your contact details for communication
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
              <Box sx={{ gridColumn: { xs: "1", md: "1 / -1" } }}>
                <TextField
                  fullWidth
                  label="Email Address *"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                      "&:hover fieldset": { borderColor: "#FECE18" },
                      "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                    },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                  }}
                />
              </Box>
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Country Code</InputLabel>
                  <Select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange("countryCode", e.target.value)}
                    label="Country Code"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": { borderColor: "#cccccc", borderWidth: 2 },
                      "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#FECE18" },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FECE18", borderWidth: 2 },
                    }}
                  >
                    {COUNTRY_CODES.map((item) => (
                      <MenuItem key={item.code} value={item.code}>
                        {item.code} ({item.country})
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <TextField
                  fullWidth
                  label="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                      "&:hover fieldset": { borderColor: "#FECE18" },
                      "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                    },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Professional Background */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FECE18",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Work sx={{ fontSize: 20, color: "black" }} />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Professional Background
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666666",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Tell us about your background and expertise
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                fullWidth
                label="Professional Background & Expertise *"
                multiline
                rows={5}
                value={formData.coachDescription}
                onChange={(e) => handleInputChange("coachDescription", e.target.value)}
                placeholder="Describe your professional background, qualifications, and expertise..."
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />
              <TextField
                fullWidth
                label="Previous Teaching Experience"
                multiline
                rows={4}
                value={formData.previousExperience}
                onChange={(e) => handleInputChange("previousExperience", e.target.value)}
                placeholder="Share any previous teaching or training experience..."
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />
            </Box>
          </Box>

          {/* Workshop Details */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FECE18",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MenuBook sx={{ fontSize: 20, color: "black" }} />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Workshop Details
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666666",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Provide comprehensive details about your proposed workshop
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
              <TextField
                fullWidth
                label="Workshop Title/Topic *"
                value={formData.topic}
                onChange={(e) => handleInputChange("topic", e.target.value)}
                placeholder="e.g., Introduction to Digital Marketing"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />

              {/* ✅ Category Select now uses API categories (falls back to constants) */}
              <FormControl fullWidth>
                <InputLabel>Category *</InputLabel>
                <Select
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  label="Category *"
                  displayEmpty
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#FECE18" },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FECE18", borderWidth: 2 },
                  }}
                >
                  {/* If API returned items (id/name), show them; else show your static list */}
                  {apiCategories.length > 0
                    ? apiCategories.map((c) => (
                        <MenuItem key={c.id ?? c._id ?? c.name} value={c.id ?? c._id ?? c.name}>
                          {c.name ?? c.title ?? String(c.id ?? c._id ?? c)}
                        </MenuItem>
                      ))
                    : CATEGORIES.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                type="date"
                label="Preferred Start Date *"
                value={formData.availabilityDate}
                onChange={(e) => handleInputChange("availabilityDate", e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />
              <TextField
                fullWidth
                type="time"
                label="Preferred Time *"
                value={formData.availabilityTime}
                onChange={(e) => handleInputChange("availabilityTime", e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />
              <TextField
                fullWidth
                type="number"
                label="Total Sessions *"
                value={formData.totalSessions}
                onChange={(e) => handleInputChange("totalSessions", e.target.value)}
                inputProps={{ min: 1, max: 50 }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />
              <Box sx={{ gridColumn: { xs: "1", md: "1 / -1" } }}>
                <TextField
                  fullWidth
                  label="Workshop Description *"
                  multiline
                  rows={6}
                  value={formData.workshopDescription}
                  onChange={(e) => handleInputChange("workshopDescription", e.target.value)}
                  placeholder="Provide a detailed description of what participants will learn..."
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                      "&:hover fieldset": { borderColor: "#FECE18" },
                      "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                    },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Participant Information */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FECE18",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Group sx={{ fontSize: 20, color: "black" }} />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Participant Information
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666666",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Help participants understand if the workshop is right for them
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
              <TextField
                fullWidth
                label="Target Audience"
                multiline
                rows={4}
                value={formData.targetAudience}
                onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                placeholder="Who is this workshop intended for?"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />
              <TextField
                fullWidth
                label="Prerequisites"
                multiline
                rows={4}
                value={formData.prerequisites}
                onChange={(e) => handleInputChange("prerequisites", e.target.value)}
                placeholder="Any prior skills or knowledge needed?"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />
              <Box sx={{ gridColumn: { xs: "1", md: "1 / -1" } }}>
                <TextField
                  fullWidth
                  label="Required Materials"
                  multiline
                  rows={3}
                  value={formData.requiredMaterials}
                  onChange={(e) => handleInputChange("requiredMaterials", e.target.value)}
                  placeholder="Tools, devices, or resources participants need to bring"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                      "&:hover fieldset": { borderColor: "#FECE18" },
                      "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                    },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Pricing */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FECE18",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AttachMoney sx={{ fontSize: 20, color: "black" }} />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Pricing & Registration
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666666",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Set the workshop fee and share the registration link
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Currency</InputLabel>
                <Select
                  value={formData.currency}
                  onChange={(e) => handleInputChange("currency", e.target.value)}
                  label="Currency"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#FECE18" },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FECE18", borderWidth: 2 },
                  }}
                >
                  {currencyOptions.map((currency) => (
                    <MenuItem key={currency} value={currency}>
                      {currency}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Workshop Price"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                placeholder="e.g., 1999"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />
              <TextField
                fullWidth
                label="Registration Link"
                value={formData.link}
                onChange={(e) => handleInputChange("link", e.target.value)}
                placeholder="https://registration-page.com"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#cccccc", borderWidth: 2 },
                    "&:hover fieldset": { borderColor: "#FECE18" },
                    "&.Mui-focused fieldset": { borderColor: "#FECE18", borderWidth: 2 },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FECE18" },
                }}
              />
            </Box>
          </Box>

          {/* File Uploads */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FECE18",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CloudUpload sx={{ fontSize: 20, color: "black" }} />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Supporting Materials
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666666",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Upload supporting materials to enhance your application
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>
              {/* Video Upload */}
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "500",
                    color: "black",
                    mb: 2,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Introduction Video
                </Typography>
                <Paper
                  sx={{
                    border: `2px dashed ${dragOver.video ? "#FECE18" : "#cccccc"}`,
                    borderRadius: 2,
                    p: 3,
                    textAlign: "center",
                    backgroundColor: dragOver.video ? "#FECE18" + "10" : "#f9f9f9",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    minHeight: 180,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    "&:hover": {
                      borderColor: "#FECE18",
                      backgroundColor: "#FECE18" + "05",
                    },
                  }}
                  onDrop={(e) => handleDrop(e, "video")}
                  onDragOver={(e) => handleDragOver(e, "video")}
                  onDragLeave={(e) => handleDragLeave(e, "video")}
                >
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => e.target.files?.[0] && handleVideoUpload(e.target.files[0])}
                    style={{ display: "none" }}
                    id="video-upload"
                  />
                  <label htmlFor="video-upload" style={{ cursor: "pointer", width: "100%" }}>
                    {uploadedVideo ? (
                      <Box>
                        <VideoLibrary sx={{ fontSize: 48, color: "#FECE18", mb: 2 }} />
                        <Typography
                          variant="body1"
                          sx={{
                            color: "black",
                            mb: 2,
                            fontWeight: "500",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          }}
                        >
                          {uploadedVideo.name}
                        </Typography>
                        <Button
                          size="small"
                          startIcon={<Delete />}
                          onClick={(e) => {
                            e.preventDefault()
                            removeVideo()
                          }}
                          sx={{
                            color: "black",
                            borderColor: "black",
                            "&:hover": { backgroundColor: "black", color: "white" },
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          }}
                          variant="outlined"
                        >
                          Remove
                        </Button>
                      </Box>
                    ) : (
                      <Box>
                        <CloudUpload sx={{ fontSize: 48, color: "#999999", mb: 2 }} />
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontWeight: "500",
                            mb: 1,
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          }}
                        >
                          Upload Video
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#666666",
                            mb: 1,
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          }}
                        >
                          Drag & drop or click to browse
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#999999",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          }}
                        >
                          Maximum file size: 100MB
                        </Typography>
                      </Box>
                    )}
                  </label>
                </Paper>
                {errors.video && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {errors.video}
                  </Alert>
                )}
              </Box>

              {/* Images Upload */}
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "500",
                    color: "black",
                    mb: 2,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Workshop Images
                </Typography>
                <Paper
                  sx={{
                    border: `2px dashed ${dragOver.images ? "#FECE18" : "#cccccc"}`,
                    borderRadius: 2,
                    p: 3,
                    textAlign: "center",
                    backgroundColor: dragOver.images ? "#FECE18" + "10" : "#f9f9f9",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    minHeight: 180,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    "&:hover": {
                      borderColor: "#FECE18",
                      backgroundColor: "#FECE18" + "05",
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
                    onChange={(e) => e.target.files && handleImageUpload(e.target.files)}
                    style={{ display: "none" }}
                    id="images-upload"
                  />
                  <label htmlFor="images-upload" style={{ cursor: "pointer", width: "100%" }}>
                    {uploadedImages.length > 0 ? (
                      <Box>
                        <Image sx={{ fontSize: 48, color: "#FECE18", mb: 2 }} />
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
                          {uploadedImages.map((image, index) => (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                backgroundColor: "white",
                                p: 1,
                                borderRadius: 1,
                                border: "1px solid #ddd",
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "black",
                                  fontWeight: "500",
                                  fontFamily: "system-ui, -apple-system, sans-serif",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {image.name}
                              </Typography>
                              <Button
                                size="small"
                                onClick={() => removeImage(index)}
                                sx={{
                                  minWidth: "auto",
                                  p: 0.5,
                                  color: "#d32f2f",
                                  "&:hover": { backgroundColor: "#ffebee" },
                                }}
                              >
                                <Delete sx={{ fontSize: 16 }} />
                              </Button>
                            </Box>
                          ))}
                        </Box>
                        {uploadedImages.length < 2 && (
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#666666",
                              fontFamily: "system-ui, -apple-system, sans-serif",
                            }}
                          >
                            Add {2 - uploadedImages.length} more image{2 - uploadedImages.length > 1 ? "s" : ""}
                          </Typography>
                        )}
                      </Box>
                    ) : (
                      <Box>
                        <CloudUpload sx={{ fontSize: 48, color: "#999999", mb: 2 }} />
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontWeight: "500",
                            mb: 1,
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          }}
                        >
                          Upload Images
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#666666",
                            mb: 1,
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          }}
                        >
                          Drag & drop or click to browse
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#999999",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          }}
                        >
                          Maximum 2 images, 10MB each
                        </Typography>
                      </Box>
                    )}
                  </label>
                </Paper>
                {errors.images && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {errors.images}
                  </Alert>
                )}
              </Box>
            </Box>
          </Box>

          {/* Submit Section */}
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                color: "black",
                mb: 2,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Submit Application
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#666666",
                mb: 4,
                maxWidth: "500px",
                mx: "auto",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Please review all information carefully before submitting your workshop proposal for administrative review
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={!isFormValid()}
              sx={{
                backgroundColor: isFormValid() ? "black" : "#cccccc",
                color: isFormValid() ? "white" : "#999999",
                px: 6,
                py: 2,
                fontSize: "16px",
                fontWeight: "600",
                textTransform: "none",
                borderRadius: 2,
                minWidth: 200,
                fontFamily: "system-ui, -apple-system, sans-serif",
                "&:hover": {
                  backgroundColor: isFormValid() ? "#333333" : "#cccccc",
                },
                "&:disabled": {
                  backgroundColor: "#cccccc",
                  color: "#999999",
                },
              }}
            >
              Submit Application
            </Button>

            {/* optional: tiny status hint for categories */}
            <Typography
              variant="caption"
              sx={{ display: "block", mt: 1, color: "#777" }}
            >
              {loadingCategories
                ? "Loading categories..."
                : apiCategories.length > 0
                ? "Categories loaded from API"
                : "Using default categories"}
            </Typography>

            {!isFormValid() && (
              <Typography
                variant="body2"
                sx={{
                  color: "#d32f2f",
                  mt: 2,
                  fontWeight: "500",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                Please complete all required fields (*) to submit your application
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
