"use client"

import { TextField, Button, Divider } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"

export default function AuthApp() {
  return (
    <div className="flex h-[90vh]">
      {/* Left Section */}
      <div className="w-2/5 bg-yellow-400 px-10 py-16 relative flex flex-col items-center">
        <h1 className="text-5xl font-bold text-black">Welcome to</h1>
        <img src="/logo.png" alt="Logo" className="h-12 my-6" />
        <p className="text-lg text-white mb-8">Build a Circle outside your Circle</p>
        <img src="/people.png" alt="People" className="absolute bottom-0 left-0 w-full max-h-[50%] object-contain" />
      </div>

      {/* Right Section */}
      <div className="w-3/5 flex flex-col justify-center items-center px-10 py-16 bg-white">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Create Account</h2>

          <form className="space-y-4">
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              fullWidth
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                background: "linear-gradient(90deg, #7A5FFF, #7B7DFF)",
                textTransform: "none",
                fontWeight: "bold"
              }}
            >
              Create Account
            </Button>
          </form>

          <p className="text-sm text-gray-500 text-center">
            Already have an account? <a href="#" className="text-blue-500">Login</a>
          </p>
        </div>
      </div>
    </div>
  )
}
