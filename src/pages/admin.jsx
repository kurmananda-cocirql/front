"use client"

import { useState, useMemo, useCallback, memo } from "react"
import {
  Box,
  Card,
  Typography,
  Button,
  Grid,
  Chip,
  Avatar,
  Collapse,
  IconButton,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Divider,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
} from "@mui/material"
import {
  ExpandMore,
  ExpandLess,
  CheckCircle,
  Cancel,
  Event,
  Email,
  Phone,
  Category,
  Schedule,
  VideoLibrary,
  Image as ImageIcon,
  CalendarToday,
  Close,
  Search,
  TrendingUp,
} from "@mui/icons-material"

// Mock data for users who can be promoted to coaches
const initialUsers = [
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1-555-0123",
    dateOfBirth: "1985-03-15",
    status: "user",
    joinDate: "2024-01-15",
    expertise: "React Development, JavaScript",
    experience: "5 years",
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Chen",
    email: "michael.chen@email.com",
    phone: "+1-555-0456",
    dateOfBirth: "1988-07-22",
    status: "user",
    joinDate: "2024-02-20",
    expertise: "Business Strategy, Marketing",
    experience: "8 years",
  },
  {
    id: 3,
    firstName: "Emily",
    lastName: "Rodriguez",
    email: "emily.rodriguez@email.com",
    phone: "+1-555-0789",
    dateOfBirth: "1990-11-08",
    status: "user",
    joinDate: "2024-03-10",
    expertise: "Mindfulness, Wellness Coaching",
    experience: "6 years",
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Kim",
    email: "david.kim@email.com",
    phone: "+1-555-0321",
    dateOfBirth: "1987-05-12",
    status: "promoted",
    joinDate: "2023-12-05",
    expertise: "Full-Stack Development, DevOps",
    experience: "10 years",
  },
]

// Mock data for workshop requests
const initialWorkshopRequests = [
  {
    id: 1,
    workshopTitle: "Advanced React Development",
    coachName: "David Kim",
    category: "Technology",
    sessions: "10",
    startDate: "2025-02-10",
    time: "16:00",
    status: "pending",
    requestDate: "2025-01-04",
    description:
      "Deep dive into advanced React concepts including hooks, context, performance optimization, and testing strategies. This comprehensive course will cover state management with Redux, React Router for navigation, testing with Jest and React Testing Library, performance optimization techniques, and best practices for building scalable React applications.",
    coachEmail: "david.kim@email.com",
    coachPhone: "+1-555-0321",
    prerequisites: "Basic knowledge of JavaScript and React fundamentals",
    targetAudience: "Intermediate to advanced React developers",
    materials: "Laptop with Node.js installed, code editor, GitHub account",
    maxParticipants: 25,
    price: "$299",
    professionalBackground:
      "Senior Software Engineer with 12+ years of experience at Google, Microsoft, and Meta. Expert in React, Node.js, and full-stack development. Led development teams and architected scalable web applications serving millions of users.",
    teachingExperience:
      "5+ years teaching React and JavaScript at coding bootcamps and universities. Mentored 200+ developers and conducted workshops for companies like Netflix and Spotify. Certified instructor with excellent student feedback ratings.",
    hasVideo: true,
    hasImages: true,
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    images: ["https://picsum.photos/800/600?random=1", "https://picsum.photos/800/600?random=2"],
  },
  {
    id: 2,
    workshopTitle: "Business Strategy & Planning",
    coachName: "Lisa Thompson",
    category: "Business",
    sessions: "6",
    startDate: "2025-02-25",
    time: "11:00",
    status: "pending",
    requestDate: "2025-01-06",
    description:
      "Learn how to develop comprehensive business strategies, create business plans, and implement strategic initiatives effectively. This workshop covers market analysis, competitive positioning, financial planning, risk assessment, and strategic implementation frameworks used by successful businesses worldwide.",
    coachEmail: "lisa.thompson@email.com",
    coachPhone: "+1-555-0654",
    prerequisites: "Basic business knowledge helpful but not required",
    targetAudience: "Entrepreneurs, business owners, managers, and aspiring business leaders",
    materials: "Notebook, calculator, access to internet for research",
    maxParticipants: 20,
    price: "$199",
    professionalBackground:
      "MBA from Harvard Business School with 15+ years of strategic consulting experience at McKinsey & Company. Helped Fortune 500 companies develop and implement successful business strategies across various industries.",
    teachingExperience:
      "Guest lecturer at Wharton Business School and Stanford Graduate School of Business. Conducted 50+ executive training sessions and strategic planning workshops for C-level executives.",
    hasVideo: true,
    hasImages: true,
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    images: ["https://picsum.photos/800/600?random=3", "https://picsum.photos/800/600?random=4"],
  },
  {
    id: 3,
    workshopTitle: "Mindfulness & Meditation",
    coachName: "James Wilson",
    category: "Health & Wellness",
    sessions: "4",
    startDate: "2025-03-05",
    time: "08:00",
    status: "pending",
    requestDate: "2025-01-08",
    description:
      "Introduction to mindfulness practices and meditation techniques for stress reduction and mental well-being. This workshop provides practical tools and techniques for developing a sustainable mindfulness practice, managing stress, improving focus, and enhancing overall mental health and emotional resilience.",
    coachEmail: "james.wilson@email.com",
    coachPhone: "+1-555-0987",
    prerequisites: "No prior experience required",
    targetAudience: "Anyone interested in stress reduction and mental well-being",
    materials: "Comfortable clothing, yoga mat or cushion, quiet space",
    maxParticipants: 15,
    price: "$149",
    professionalBackground:
      "Certified mindfulness instructor with 10+ years of experience in meditation and wellness practices. Trained at the Mindfulness-Based Stress Reduction (MBSR) program at UMass Medical School.",
    teachingExperience:
      "Led mindfulness workshops at Google, Apple, and various healthcare institutions. Trained over 1000 individuals in mindfulness and meditation techniques with consistently high satisfaction ratings.",
    hasVideo: false,
    hasImages: true,
    videoUrl: null,
    images: ["https://picsum.photos/800/600?random=5"],
  },
]

// Memoized Search Component
const SearchField = memo(({ value, onChange, placeholder, id }) => (
  <Box sx={{ mb: 3 }}>
    <TextField
      id={id}
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search sx={{ color: "#666666" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 3,
          bgcolor: "#FAFAFA",
          "&:hover": {
            bgcolor: "#F5F5F5",
          },
          "&.Mui-focused": {
            bgcolor: "#FFFFFF",
          },
        },
      }}
    />
  </Box>
))

export default function AdminApprovalPage({ onBack }) {
  const [activeTab, setActiveTab] = useState(0)
  const [users, setUsers] = useState(initialUsers)
  const [workshopRequests, setWorkshopRequests] = useState(initialWorkshopRequests)
  const [expandedUser, setExpandedUser] = useState(null)
  const [expandedWorkshop, setExpandedWorkshop] = useState(null)
  const [confirmDialog, setConfirmDialog] = useState({ open: false, type: "", item: null, category: "" })
  const [mediaPopup, setMediaPopup] = useState({ open: false, type: "", content: null, title: "", workshop: null })
  const [userSearchTerm, setUserSearchTerm] = useState("")
  const [workshopSearchTerm, setWorkshopSearchTerm] = useState("")

  const handleUserSearch = useCallback((e) => {
    setUserSearchTerm(e.target.value)
  }, [])

  const handleWorkshopSearch = useCallback((e) => {
    setWorkshopSearchTerm(e.target.value)
  }, [])

  // Filter users based on search term (memoized)
  const filteredUsers = useMemo(() => {
    if (!userSearchTerm.trim()) return users
    const searchLower = userSearchTerm.toLowerCase()
    return users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(searchLower) ||
        user.lastName.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.expertise.toLowerCase().includes(searchLower)
      )
    })
  }, [users, userSearchTerm])

  // Filter workshops based on search term (memoized)
  const filteredWorkshops = useMemo(() => {
    if (!workshopSearchTerm.trim()) return workshopRequests
    const searchLower = workshopSearchTerm.toLowerCase()
    return workshopRequests.filter((workshop) => {
      return (
        workshop.workshopTitle.toLowerCase().includes(searchLower) ||
        workshop.coachName.toLowerCase().includes(searchLower) ||
        workshop.category.toLowerCase().includes(searchLower) ||
        workshop.description.toLowerCase().includes(searchLower)
      )
    })
  }, [workshopRequests, workshopSearchTerm])

  const handleMediaClick = (type, workshop) => {
    setMediaPopup({
      open: true,
      type,
      content: type === "video" ? workshop.videoUrl : workshop.images,
      title: `${workshop.workshopTitle} - ${type === "video" ? "Introduction Video" : "Workshop Images"}`,
      workshop,
    })
  }

  const MediaPopup = () => (
    <Dialog
      open={mediaPopup.open}
      onClose={() => setMediaPopup({ open: false, type: "", content: null, title: "", workshop: null })}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3, maxHeight: "90vh" },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: "700",
          color: "#000000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        {mediaPopup.title}
        <IconButton
          onClick={() => setMediaPopup({ open: false, type: "", content: null, title: "", workshop: null })}
          sx={{ color: "#666666" }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        {mediaPopup.type === "video" ? (
          <Box sx={{ textAlign: "center" }}>
            {mediaPopup.content ? (
              <video
                controls
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <source src={mediaPopup.content} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Box>
                <VideoLibrary sx={{ fontSize: 120, color: "#FFD54F", mb: 2 }} />
                <Typography variant="h6" sx={{ color: "#000000", mb: 1 }}>
                  No Video Available
                </Typography>
                <Typography variant="body2" sx={{ color: "#666666" }}>
                  This workshop does not have an introduction video
                </Typography>
              </Box>
            )}
          </Box>
        ) : (
          <Box>
            {mediaPopup.content && mediaPopup.content.length > 0 ? (
              <Grid container spacing={2}>
                {mediaPopup.content.map((imageUrl, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      }}
                    >
                      <img
                        src={imageUrl || "/placeholder.svg"}
                        alt={`Workshop image ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/800x600/FFD54F/000000?text=Workshop+Image"
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          bgcolor: "rgba(0,0,0,0.7)",
                          color: "white",
                          p: 1,
                          textAlign: "center",
                        }}
                      >
                        <Typography variant="body2">
                          Image {index + 1} of {mediaPopup.content.length}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box sx={{ textAlign: "center" }}>
                <ImageIcon sx={{ fontSize: 120, color: "#FFD54F", mb: 2 }} />
                <Typography variant="h6" sx={{ color: "#000000", mb: 1 }}>
                  No Images Available
                </Typography>
                <Typography variant="body2" sx={{ color: "#666666" }}>
                  This workshop does not have any images
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  )

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
    // Reset expanded states when switching tabs
    setExpandedUser(null)
    setExpandedWorkshop(null)
  }

  const handleUserExpand = (userId) => {
    setExpandedUser(expandedUser === userId ? null : userId)
  }

  const handleWorkshopExpand = (workshopId) => {
    setExpandedWorkshop(expandedWorkshop === workshopId ? null : workshopId)
  }

  const handleConfirmAction = (type, item, category) => {
    setConfirmDialog({ open: true, type, item, category })
  }

  const executeAction = () => {
    const { type, item, category } = confirmDialog
    if (category === "user") {
      setUsers((prev) => prev.map((user) => (user.id === item.id ? { ...user, status: type } : user)))
    } else {
      setWorkshopRequests((prev) =>
        prev.map((workshop) => (workshop.id === item.id ? { ...workshop, status: type } : workshop)),
      )
    }
    setConfirmDialog({ open: false, type: "", item: null, category: "" })
    // Show success alert
    const actionText = type === "promoted" ? "promoted to coach" : type === "approved" ? "approved" : "denied"
    const itemName = category === "user" ? `${item.firstName} ${item.lastName}` : item.workshopTitle
    alert(`${category === "user" ? "User" : "Workshop request"} "${itemName}" has been ${actionText} successfully!`)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "promoted":
      case "approved":
        return "#4CAF50"
      case "denied":
        return "#F44336"
      default:
        return "#FF9800"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "promoted":
        return "Coach"
      case "approved":
        return "Approved"
      case "denied":
        return "Denied"
      default:
        return status === "user" ? "User" : "Pending"
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FFFFFF", p: 4 }}>
      {/* Header */}
      <div className="justify-between flex items-center">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: "800", color: "#000000", mb: 2 }}>
            Admin Approval Dashboard
          </Typography>
          <Typography variant="h6" sx={{ color: "#666666" }}>
            Promote users to coaches and approve workshop requests
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#000000",
            borderRadius: 3,
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontSize: "16px",
          }}
          href="/reqByAdmin"
        >
          Request a new workshop
        </Button>
      </div>

      {/* Main Card with Tabs */}
      <Card sx={{ borderRadius: 4, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", overflow: "hidden" }}>
        {/* Tab Header */}
        <Box sx={{ bgcolor: "#000000" }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              "& .MuiTab-root": {
                color: "#CCCCCC",
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
                minHeight: 64,
                "&.Mui-selected": {
                  color: "#FFD54F",
                },
                "& .MuiSvgIcon-root": {
                  color: "#FFD54F",
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#FFD54F",
                height: 3,
              },
            }}
          >
            <Tab
              icon={<TrendingUp sx={{ mr: 1 }} />}
              iconPosition="start"
              label={`Coach Promotion (${users.filter((u) => u.status === "user").length})`}
            />
            <Tab
              icon={<Event sx={{ mr: 1 }} />}
              iconPosition="start"
              label={`Workshop Requests (${workshopRequests.filter((w) => w.status === "pending").length})`}
            />
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ p: 4 }}>
          {/* Search Field - Always rendered but conditionally visible */}
          {activeTab === 0 && (
            <SearchField
              id="user-search"
              value={userSearchTerm}
              onChange={handleUserSearch}
              placeholder="Search users by name, email, or expertise..."
            />
          )}

          {activeTab === 1 && (
            <SearchField
              id="workshop-search"
              value={workshopSearchTerm}
              onChange={handleWorkshopSearch}
              placeholder="Search workshops by title, coach name, category, or description..."
            />
          )}

          {/* Content based on active tab */}
          {activeTab === 0 && (
            <Stack spacing={3}>
              {filteredUsers.map((user) => (
                <Card
                  key={user.id}
                  sx={{
                    border: "2px solid #F0F0F0",
                    borderRadius: 3,
                    overflow: "hidden",
                    "&:hover": { borderColor: "#FFD54F" },
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* User Summary */}
                  <Box
                    sx={{
                      p: 3,
                      cursor: "pointer",
                      "&:hover": { bgcolor: "#FAFAFA" },
                    }}
                    onClick={() => handleUserExpand(user.id)}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar sx={{ bgcolor: "#FFD54F", color: "#000000", fontWeight: "bold" }}>
                        {user.firstName.charAt(0)}
                        {user.lastName.charAt(0)}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: "600", color: "#000000" }}>
                          {user.firstName} {user.lastName}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#666666" }}>
                          {user.expertise} • {user.experience} experience
                        </Typography>
                      </Box>
                      <Chip
                        label={getStatusText(user.status)}
                        sx={{
                          bgcolor: getStatusColor(user.status),
                          color: "white",
                          fontWeight: "600",
                        }}
                      />
                      <IconButton>{expandedUser === user.id ? <ExpandLess /> : <ExpandMore />}</IconButton>
                    </Stack>
                  </Box>
                  {/* Expanded User Details */}
                  <Collapse in={expandedUser === user.id}>
                    <Divider />
                    <Box sx={{ p: 3, bgcolor: "#FAFAFA" }}>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography variant="h6" sx={{ fontWeight: "600", color: "#000000", mb: 3 }}>
                            User Information
                          </Typography>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                  First Name
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666666" }}>
                                  {user.firstName}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                  Last Name
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666666" }}>
                                  {user.lastName}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                  Email Address
                                </Typography>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                  <Email sx={{ fontSize: 16, color: "#666666" }} />
                                  <Typography variant="body2">{user.email}</Typography>
                                </Stack>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                  Phone Number
                                </Typography>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                  <Phone sx={{ fontSize: 16, color: "#666666" }} />
                                  <Typography variant="body2">{user.phone}</Typography>
                                </Stack>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                  Date of Birth
                                </Typography>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                  <CalendarToday sx={{ fontSize: 16, color: "#666666" }} />
                                  <Typography variant="body2">{formatDate(user.dateOfBirth)}</Typography>
                                </Stack>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                  Join Date
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666666" }}>
                                  {formatDate(user.joinDate)}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                  Expertise
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666666" }}>
                                  {user.expertise}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                  Experience
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666666" }}>
                                  {user.experience}
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                        {user.status === "user" && (
                          <Grid item xs={12}>
                            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                              <Button
                                variant="contained"
                                startIcon={<TrendingUp />}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleConfirmAction("promoted", user, "user")
                                }}
                                sx={{
                                  bgcolor: "#4CAF50",
                                  "&:hover": { bgcolor: "#45A049" },
                                  borderRadius: 3,
                                  px: 4,
                                }}
                              >
                                Promote to Coach
                              </Button>
                            </Stack>
                          </Grid>
                        )}
                      </Grid>
                    </Box>
                  </Collapse>
                </Card>
              ))}
            </Stack>
          )}

          {activeTab === 1 && (
            <Stack spacing={3}>
              {filteredWorkshops.map((workshop) => (
                <Card
                  key={workshop.id}
                  sx={{
                    border: "2px solid #F0F0F0",
                    borderRadius: 3,
                    overflow: "hidden",
                    "&:hover": { borderColor: "#FFD54F" },
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Workshop Summary */}
                  <Box
                    sx={{
                      p: 3,
                      cursor: "pointer",
                      "&:hover": { bgcolor: "#FAFAFA" },
                    }}
                    onClick={() => handleWorkshopExpand(workshop.id)}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          bgcolor: "#FFD54F",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Event sx={{ color: "#000000" }} />
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: "600", color: "#000000" }}>
                          {workshop.workshopTitle}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#666666" }}>
                          by {workshop.coachName} • Requested: {workshop.requestDate}
                        </Typography>
                      </Box>
                      <Chip
                        label={getStatusText(workshop.status)}
                        sx={{
                          bgcolor: getStatusColor(workshop.status),
                          color: "white",
                          fontWeight: "600",
                        }}
                      />
                      <IconButton>{expandedWorkshop === workshop.id ? <ExpandLess /> : <ExpandMore />}</IconButton>
                    </Stack>
                  </Box>
                  {/* Expanded Workshop Details */}
                  <Collapse in={expandedWorkshop === workshop.id}>
                    <Divider />
                    <Box sx={{ p: 3, bgcolor: "#FAFAFA" }}>
                      <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                          <Typography variant="h6" sx={{ fontWeight: "600", color: "#000000", mb: 2 }}>
                            Workshop Information
                          </Typography>
                          <Stack spacing={2}>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Workshop Title
                              </Typography>
                              <Typography variant="body2" sx={{ color: "#666666" }}>
                                {workshop.workshopTitle}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Category
                              </Typography>
                              <Stack direction="row" alignItems="center" spacing={1}>
                                <Category sx={{ fontSize: 16, color: "#666666" }} />
                                <Typography variant="body2">{workshop.category}</Typography>
                              </Stack>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Schedule
                              </Typography>
                              <Stack direction="row" alignItems="center" spacing={1}>
                                <Schedule sx={{ fontSize: 16, color: "#666666" }} />
                                <Typography variant="body2">
                                  {workshop.sessions} sessions • {workshop.startDate} at {workshop.time}
                                </Typography>
                              </Stack>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Price
                              </Typography>
                              <Typography variant="body2" sx={{ color: "#666666", fontWeight: "600" }}>
                                {workshop.price}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Max Participants
                              </Typography>
                              <Typography variant="body2" sx={{ color: "#666666" }}>
                                {workshop.maxParticipants} participants
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Supporting Materials
                              </Typography>
                              <Stack direction="row" spacing={1}>
                                {workshop.hasVideo && (
                                  <Chip
                                    icon={<VideoLibrary />}
                                    label="Video"
                                    size="small"
                                    clickable
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleMediaClick("video", workshop)
                                    }}
                                    sx={{ bgcolor: "#E3F2FD", color: "#1976D2", "&:hover": { bgcolor: "#BBDEFB" } }}
                                  />
                                )}
                                {workshop.hasImages && (
                                  <Chip
                                    icon={<ImageIcon />}
                                    label="Images"
                                    size="small"
                                    clickable
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleMediaClick("images", workshop)
                                    }}
                                    sx={{ bgcolor: "#E8F5E8", color: "#388E3C", "&:hover": { bgcolor: "#C8E6C9" } }}
                                  />
                                )}
                              </Stack>
                            </Box>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Typography variant="h6" sx={{ fontWeight: "600", color: "#000000", mb: 2 }}>
                            Coach Information
                          </Typography>
                          <Stack spacing={2}>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Coach Name
                              </Typography>
                              <Typography variant="body2" sx={{ fontWeight: "500" }}>
                                {workshop.coachName}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Email
                              </Typography>
                              <Stack direction="row" alignItems="center" spacing={1}>
                                <Email sx={{ fontSize: 16, color: "#666666" }} />
                                <Typography variant="body2">{workshop.coachEmail}</Typography>
                              </Stack>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Phone
                              </Typography>
                              <Stack direction="row" alignItems="center" spacing={1}>
                                <Phone sx={{ fontSize: 16, color: "#666666" }} />
                                <Typography variant="body2">{workshop.coachPhone}</Typography>
                              </Stack>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Target Audience
                              </Typography>
                              <Typography variant="body2" sx={{ color: "#666666" }}>
                                {workshop.targetAudience}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Prerequisites
                              </Typography>
                              <Typography variant="body2" sx={{ color: "#666666" }}>
                                {workshop.prerequisites}
                              </Typography>
                            </Box>
                          </Stack>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                            Workshop Description
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#666666", mb: 3 }}>
                            {workshop.description}
                          </Typography>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Professional Background
                              </Typography>
                              <Typography variant="body2" sx={{ color: "#666666" }}>
                                {workshop.professionalBackground}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography variant="subtitle2" sx={{ fontWeight: "600", color: "#000000", mb: 1 }}>
                                Professional Teaching Experience
                              </Typography>
                              <Typography variant="body2" sx={{ color: "#666666" }}>
                                {workshop.teachingExperience}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        {workshop.status === "pending" && (
                          <Grid item xs={12}>
                            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                              <Button
                                variant="contained"
                                startIcon={<CheckCircle />}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleConfirmAction("approved", workshop, "workshop")
                                }}
                                sx={{
                                  bgcolor: "#4CAF50",
                                  "&:hover": { bgcolor: "#45A049" },
                                  borderRadius: 3,
                                  px: 4,
                                }}
                              >
                                Approve Workshop
                              </Button>
                              <Button
                                variant="contained"
                                startIcon={<Cancel />}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleConfirmAction("denied", workshop, "workshop")
                                }}
                                sx={{
                                  bgcolor: "#F44336",
                                  "&:hover": { bgcolor: "#E53935" },
                                  borderRadius: 3,
                                  px: 4,
                                }}
                              >
                                Deny Request
                              </Button>
                            </Stack>
                          </Grid>
                        )}
                      </Grid>
                    </Box>
                  </Collapse>
                </Card>
              ))}
            </Stack>
          )}
        </Box>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmDialog.open}
        onClose={() => setConfirmDialog({ open: false, type: "", item: null, category: "" })}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3 },
        }}
      >
        <DialogTitle sx={{ fontWeight: "700", color: "#000000" }}>
          Confirm{" "}
          {confirmDialog.type === "promoted" ? "Promotion" : confirmDialog.type === "approved" ? "Approval" : "Denial"}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ color: "#666666" }}>
            Are you sure you want to{" "}
            {confirmDialog.type === "promoted"
              ? "promote this user to coach"
              : confirmDialog.type === "approved"
                ? "approve"
                : "deny"}{" "}
            this {confirmDialog.category === "user" ? "user" : "workshop request"}?
          </Typography>
          {confirmDialog.item && (
            <Alert
              severity={confirmDialog.type === "promoted" || confirmDialog.type === "approved" ? "success" : "warning"}
              sx={{ mt: 2, borderRadius: 2 }}
            >
              <Typography variant="body2" sx={{ fontWeight: "600" }}>
                {confirmDialog.category === "user"
                  ? `${confirmDialog.item.firstName} ${confirmDialog.item.lastName}`
                  : confirmDialog.item.workshopTitle}
              </Typography>
              <Typography variant="body2">
                {confirmDialog.category === "user" ? "User Promotion" : `by ${confirmDialog.item.coachName}`}
              </Typography>
            </Alert>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={() => setConfirmDialog({ open: false, type: "", item: null, category: "" })}
            sx={{ color: "#666666", borderRadius: 2 }}
          >
            Cancel
          </Button>
          <Button
            onClick={executeAction}
            variant="contained"
            sx={{
              bgcolor: confirmDialog.type === "promoted" || confirmDialog.type === "approved" ? "#4CAF50" : "#F44336",
              "&:hover": {
                bgcolor: confirmDialog.type === "promoted" || confirmDialog.type === "approved" ? "#45A049" : "#E53935",
              },
              borderRadius: 2,
            }}
          >
            {confirmDialog.type === "promoted" ? "Promote" : confirmDialog.type === "approved" ? "Approve" : "Deny"}
          </Button>
        </DialogActions>
      </Dialog>

      <MediaPopup />
    </Box>
  )
}
