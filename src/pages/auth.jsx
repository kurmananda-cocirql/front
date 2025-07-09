"use client"

import { useState } from "react"
import {
  TextField,
  Button,
  Stack,
  Typography,
  Box,
  Paper,
} from "@mui/material"

export default function AuthApp() {
  const [isSignup, setIsSignup] = useState(false)

  return (
    <Box className="flex  bg-gray-50 font-sans ">
      {/* Left Panel */}
      <Box
        className="w-2/5 bg-yellow-400 px-10 py-14 flex flex-col items-center justify-between relative"
        sx={{ minHeight: 'calc(100vh - 8vh)' }}
      >
        <Box className="flex flex-col items-center my-auto">
          <Typography variant="h3" className="text-black font-extrabold text-center mb-4">
            Welcome to
          </Typography>
          <img src="/logo.png" alt="Logo" className="h-14 my-4" />
          <Typography variant="body1" className="text-white text-lg text-center px-4">
            Build a Circle outside your Circle
          </Typography>
        </Box>
        <img
          src="/people.png"
          alt="People"
          className="w-full object-contain max-h-[45%] absolute bottom-0 left-0"
        />
      </Box>

      {/* Right Panel */}
      <Box className="w-3/5 flex items-center justify-center px-10 py-16 bg-white">
        <Box sx={{ p: 6, width: '100%', maxWidth: 550 }}>
          <Stack spacing={3}>
            <Box textAlign="center">
              <Typography variant="h4" fontWeight="bold" color="text.primary">
                {isSignup ? "Create Account" : "Sign In"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {isSignup
                  ? "Start building your community today."
                  : "Login to access your account."}
              </Typography>
            </Box>

            <Stack spacing={2}>
              {isSignup ? (
                <>
                  <Stack direction="row" spacing={2}>
                    <TextField label="First Name" fullWidth />
                    <TextField label="Last Name" fullWidth />
                  </Stack>
                  <TextField label="Phone Number" type="tel" fullWidth />
                  <TextField label="Date of Birth" type="date" fullWidth InputLabelProps={{ shrink: true }} />
                  <TextField label="Email Address" type="email" fullWidth />
                  <TextField label="Password" type="password" fullWidth />
                  <TextField label="Confirm Password" type="password" fullWidth />
                </>
              ) : (
                <>
                  <TextField label="Email Address" type="email" fullWidth />
                  <TextField label="Password" type="password" fullWidth />
                </>
              )}
            </Stack>

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                background: "linear-gradient(90deg, #7A5FFF, #7B7DFF)",
                textTransform: "none",
                fontWeight: "bold",
                py: 1.5,
              }}
            >
              {isSignup ? "Create Account" : "Sign In"}
            </Button>

            <Typography variant="body2" color="text.secondary" textAlign="center">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <Button variant="text" onClick={() => setIsSignup(false)} sx={{ textTransform: "none", padding: 0 }}>
                    Sign In
                  </Button>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <Button variant="text" onClick={() => setIsSignup(true)} sx={{ textTransform: "none", padding: 0 }}>
                    Create Account
                  </Button>
                </>
              )}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
