"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

// Initial data
const initialMonthlyData = [
  { month: "JAN", participants: 450 },
  { month: "FEB", participants: 780 },
  { month: "MAR", participants: 620 },
  { month: "APR", participants: 590 },
  { month: "MAY", participants: 520 },
  { month: "JUN", participants: 850 },
  { month: "JUL", participants: 920 },
  { month: "AUG", participants: 480 },
  { month: "SEP", participants: 780 },
  { month: "OCT", participants: 680 },
  { month: "NOV", participants: 950 },
  { month: "DEC", participants: 1020 },
]

const initialWorkshopData = [
  { name: "Workshop 1", percentage: 50, color: "#7C4DFF" },
  { name: "Workshop 2", percentage: 30, color: "#9C27B0" },
  { name: "Workshop 3", percentage: 20, color: "#E1BEE7" },
]

export default function Dashboard() {
  const [monthlyData, setMonthlyData] = useState(initialMonthlyData)
  const [workshopData, setWorkshopData] = useState(initialWorkshopData)
  const [workshopsData, setWorkshopsData] = useState([
    {
      id: 1,
      title: "Basics of Graphic Design",
      date: "2025-04-22",
      participants: 35,
      rating: 4.2,
      earning: 17500,
      status: "Completed",
    },
    {
      id: 2,
      title: "Basics of Graphic Design",
      date: "2025-04-22",
      participants: 35,
      rating: 4.2,
      earning: null,
      status: "On-going",
    },
    {
      id: 3,
      title: "Basics of Graphic Design",
      date: "2025-04-22",
      participants: 35,
      rating: 4.2,
      earning: 0,
      status: "Cancelled",
    },
    {
      id: 4,
      title: "Basics of Graphic Design",
      date: "2025-04-22",
      participants: 35,
      rating: 4.2,
      earning: 17500,
      status: "Completed",
    },
    {
      id: 5,
      title: "Basics of Graphic Design",
      date: "2025-04-22",
      participants: 35,
      rating: 4.2,
      earning: null,
      status: "On-going",
    },
    {
      id: 6,
      title: "Basics of Graphic Design",
      date: "2025-04-22",
      participants: 35,
      rating: 4.2,
      earning: 0,
      status: "Cancelled",
    },
  ])
  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard")
  const [avatarSrc, setAvatarSrc] = useState("/avatar-placeholder.png")

  // Calculate totals from data
  const totalWorkshops = 25
  const totalParticipants = monthlyData.reduce((sum, item) => sum + item.participants, 0)
  const averageRating = 4.6

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMonthlyData((prev) =>
        prev.map((item) => ({
          ...item,
          participants: Math.max(200, item.participants + Math.floor(Math.random() * 100 - 50)),
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatarSrc(e.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#4CAF50"
      case "On-going":
        return "#FF9800"
      case "Cancelled":
        return "#F44336"
      default:
        return "#666"
    }
  }

  const formatEarning = (earning) => {
    if (earning === null) return "-"
    if (earning === 0) return "0"
    return earning.toLocaleString()
  }

  const menuItems = ["Dashboard", "Workshop", "Transactions"]

  return (
    <Box sx={{ display: "flex", minHeight: "92vh", bgcolor: "#f5f5f5" }}>
      {/* Left Sidebar */}
      <Paper
        sx={{
          width: 280,
          bgcolor: "#FFD54F",
          borderRadius: 3,
          m: 2,
          p: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Profile Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="avatar-upload"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="avatar-upload">
            <Avatar
              src={avatarSrc}
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                mb: 2,
                cursor: "pointer",
                "&:hover": { opacity: 0.8 },
              }}
            />
          </label>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333", mb: 1 }}>
            Aditi
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Edit Your Profile
          </Typography>
        </Box>

        <Divider sx={{ bgcolor: "#333", mb: 3 }} />

        {/* Navigation Menu */}
        <Box sx={{ flexGrow: 1 }}>
          {menuItems.map((item) => (
            <Button
              key={item}
              fullWidth
              variant={activeMenuItem === item ? "contained" : "text"}
              sx={{
                mb: 1,
                py: 1.5,
                justifyContent: "flex-start",
                bgcolor: activeMenuItem === item ? "#7C4DFF" : "transparent",
                color: activeMenuItem === item ? "white" : "#333",
                borderRadius: 2,
                "&:hover": {
                  bgcolor: activeMenuItem === item ? "#7C4DFF" : "rgba(0,0,0,0.1)",
                },
              }}
              onClick={() => setActiveMenuItem(item)}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Paper>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {activeMenuItem === "Dashboard" ? (
          <>
            {/* Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
              <Box>
                <Typography className="font-bold text-black" variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                  Hi Aditi  <span className="text-4xl wave">👋</span>
                </Typography>
                <Typography variant="h6" sx={{ color: "#666" }}>
                  Welcome to <span style={{ color: "#FFD54F", fontWeight: "bold" }}>CoCirql</span> !
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#7C4DFF",
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "16px",
                }}
                href="/coach-form"
              >
                Request a new workshop
              </Button>
            </Box>

            {/* Stats Cards */}
            <Grid  className="justify-center w-full" container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} md={4}>
                <Card sx={{ borderRadius: 3, p: 2 }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Total Workshops
                    </Typography>
                    <Typography variant="h3" sx={{ color: "#7C4DFF", fontWeight: "bold" }}>
                      {totalWorkshops}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ borderRadius: 3, p: 2 }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Total Participants
                    </Typography>
                    <Typography variant="h3" sx={{ color: "#7C4DFF", fontWeight: "bold" }}>
                      {totalParticipants}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ borderRadius: 3, p: 2 }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Average Rating
                    </Typography>
                    <Typography variant="h3" sx={{ color: "#7C4DFF", fontWeight: "bold" }}>
                      {averageRating}/5
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Charts Section */}
            <Grid container spacing={3} className="justify-center">
              {/* Bar Chart */}
              <Grid item xs={12} md={9} className="w-3/5">
                <Card sx={{ borderRadius: 3, p: 3, height: 400 }}>
                  <Typography variant="h6" sx={{ mb: 2, color: "#666", fontSize: "12px", fontWeight: "bold" }}>
                    PARTICIPANTS PER MONTH
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: "#999", fontSize: "10px" }}>
                    ■ NUMBER OF PARTICIPANTS
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#999" }} />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#999" }}
                        domain={[0, 1200]}
                        ticks={[200, 400, 600, 800, 1000]}
                      />
                      <Bar dataKey="participants" fill="#7C4DFF" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </Grid>

              {/* Pie Chart */}
              <Grid item xs={12} md={3} className="w-1/5">
                <Card sx={{ borderRadius: 3, p: 3, height: 400 }}>
                  <Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
                    Participants
                  </Typography>

                  {/* Circular Progress Visualization */}
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                    <Box sx={{ position: "relative", width: 120, height: 120 }}>
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: "50%",
                          background: `conic-gradient(
                            #7C4DFF 0deg ${workshopData[0].percentage * 3.6}deg,
                            #9C27B0 ${workshopData[0].percentage * 3.6}deg ${(workshopData[0].percentage + workshopData[1].percentage) * 3.6}deg,
                            #E1BEE7 ${(workshopData[0].percentage + workshopData[1].percentage) * 3.6}deg ${(workshopData[0].percentage + workshopData[1].percentage + workshopData[2].percentage) * 3.6}deg,
                            #f0f0f0 ${(workshopData[0].percentage + workshopData[1].percentage + workshopData[2].percentage) * 3.6}deg 360deg
                          )`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            bgcolor: "white",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* Workshop List */}
                  <List sx={{ p: 0 }}>
                    {workshopData.map((workshop, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            bgcolor: workshop.color,
                            borderRadius: 1,
                            mr: 2,
                          }}
                        />
                        <ListItemText
                          primary={
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <Typography variant="body2" sx={{ color: "#666" }}>
                                {workshop.name}
                              </Typography>
                              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                {workshop.percentage}%
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid>
            </Grid>
          </>
        ) : activeMenuItem === "Workshop" ? (
          <>
            {/* Workshops Header */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
                Workshops
              </Typography>
            </Box>

            {/* Workshops Table */}
            <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#f8f9fa" }}>
                    <TableCell sx={{ fontWeight: "bold", color: "#333", py: 2 }}>Workshop Title</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "#333", py: 2 }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "#333", py: 2 }}>Participants</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "#333", py: 2 }}>Average Rating</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "#333", py: 2 }}>Earning</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "#333", py: 2 }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {workshopsData.map((workshop) => (
                    <TableRow key={workshop.id} sx={{ "&:hover": { bgcolor: "#f8f9fa" } }}>
                      <TableCell sx={{ py: 2 }}>
                        <Typography variant="body2" sx={{ color: "#333" }}>
                          {workshop.title}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ py: 2 }}>
                        <Typography variant="body2" sx={{ color: "#666" }}>
                          {workshop.date}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ py: 2 }}>
                        <Typography variant="body2" sx={{ color: "#666" }}>
                          {workshop.participants}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ py: 2 }}>
                        <Typography variant="body2" sx={{ color: "#666" }}>
                          {workshop.rating}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ py: 2 }}>
                        <Typography variant="body2" sx={{ color: "#666" }}>
                          {formatEarning(workshop.earning)}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ py: 2 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: getStatusColor(workshop.status),
                            fontWeight: "bold",
                          }}
                        >
                          {workshop.status}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </>
        ) : (
          <Box sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#666" }}>
              {activeMenuItem} page coming soon...
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

