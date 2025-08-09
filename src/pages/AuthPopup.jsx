// components/AuthPopup.jsx
"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function AuthPopup({ onClose, isSignup, setIsSignup }) {
  return (
    <Box className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      {/* Modal Card */}
      <Box className="bg-white rounded-lg w-full max-w-md p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          className="absolute top-2 right-2"
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        <Typography
          variant="h6"
          className="text-center font-bold mb-4 text-gray-800"
        >
          {isSignup ? "Create Account" : "Get Started"}
        </Typography>

        {/* Options */}
        {!isSignup && (
          <>
            <Stack spacing={1} mb={2}>
              <Button variant="outlined" startIcon={<img src="/google-icon.svg" className="h-5 w-5" />} fullWidth>
                Continue with Google
              </Button>
              <Button variant="outlined" startIcon={<span>📧</span>} fullWidth>
                Continue with Email
              </Button>
              <Button variant="outlined" startIcon={<span></span>} fullWidth>
                Continue with Apple
              </Button>
            </Stack>

            <div className="flex items-center gap-2 my-2">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="text-xs text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <TextField
              fullWidth
              label="Continue with mobile number"
              InputProps={{
                startAdornment: <span className="mr-2 text-gray-600">+91</span>,
              }}
              variant="standard"
            />
          </>
        )}

        {/* Signup Form */}
        {isSignup && (
          <Stack spacing={2} className="text-sm mt-4">
            <Stack direction="row" spacing={1}>
              <TextField label="First Name" fullWidth />
              <TextField label="Last Name" fullWidth />
            </Stack>
            <TextField label="Phone Number" type="tel" fullWidth />
            <TextField label="Date of Birth" type="date" fullWidth InputLabelProps={{ shrink: true }} />
            <TextField label="Email Address" type="email" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <TextField label="Confirm Password" type="password" fullWidth />
          </Stack>
        )}

        <Button
          variant="contained"
          fullWidth
          size="large"
          className="mt-4"
          sx={{
            background: "linear-gradient(90deg, #7A5FFF, #7B7DFF)",
            textTransform: "none",
            fontWeight: "bold",
            py: 1.5,
          }}
        >
          {isSignup ? "Create Account" : "Continue"}
        </Button>

        <Typography
          variant="body2"
          className="text-center mt-3 text-gray-600"
        >
          {isSignup ? (
            <>
              Already have an account?{" "}
              <Button
                onClick={() => setIsSignup(false)}
                variant="text"
                sx={{ textTransform: "none", padding: 0 }}
              >
                Sign In
              </Button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <Button
                onClick={() => setIsSignup(true)}
                variant="text"
                sx={{ textTransform: "none", padding: 0 }}
              >
                Create Account
              </Button>
            </>
          )}
        </Typography>

        <Typography variant="caption" className="text-center block mt-4 text-gray-500">
          I agree to the{" "}
          <a href="#" className="underline">
            Terms & Conditions
          </a>{" "}
          &{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
