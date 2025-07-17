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
    <Box className="flex bg-gray-50 font-sans h-[100vh] bottom-0 fixed w-full items-bottom justify-bottom">
      {/* Left Panel */}
      <Box
        className="w-2/5 bg-[#FECE18] px-10 py-14 flex flex-col items-center justify-between relative"
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
      <Box className={`w-3/5 flex ${isSignup ? "items-top" : "items-center"} justify-center px-10 py-5  bg-white overflow-y-auto`}>
        <Box sx={{ p: 6, width: '100%', maxWidth: 550 }}>
          <h1 className="text-4xl">.</h1>
          <Stack spacing={1}>
            <Box textAlign="center">
              <Typography variant="h5" fontWeight="bold" color="text.primary">
                {isSignup ? "Create Account" : "Sign In"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {isSignup
                  ? "Start building your community today."
                  : "Login to access your account."}
              </Typography>
            </Box>

            <Stack spacing={2} className="text-sm">
              {isSignup ? (
                <>

                  <Stack direction="row" spacing={1}>
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
          <h1 className="text-4xl">.</h1>
        </Box>
      </Box>
    </Box>
  )
}
