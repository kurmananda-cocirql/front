"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { loginUser, signupUser } from "../datafetch/authAPI"; // import API calls

export default function AuthApp() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        const result = await signupUser(formData);
        console.log("Signup successful:", result);
        alert("Account created successfully! Please log in.");
        setIsSignup(false);
      } else {
        const result = await loginUser({
          email: formData.email,
          password: formData.password,
        });
        console.log("Login successful:", result);
        alert("Login Successful! Token stored.");
        window.location.href = "/"; // Redirect to home page after login
      }
    } catch (error) {
      alert((isSignup ? "Signup" : "Login") + " failed: " + error.message);
    }
  };

  return (
    <Box className="flex bg-gray-50 font-sans h-[100vh] bottom-0 fixed w-full">
      {/* Left Panel */}
      <Box className="w-2/5 bg-[#FECE18] px-10 py-14 flex flex-col items-center justify-between relative">
        <Box className="flex flex-col items-center my-auto">
          <Typography variant="h3" className="text-black font-extrabold text-center mb-4">
            Welcome to
          </Typography>
          <img src="/logo.png" alt="Logo" className="h-14 my-4" />
          <Typography variant="body1" className="text-white text-lg text-center px-4">
            Build a Circle outside your Circle
          </Typography>
        </Box>
        <img src="/people.png" alt="People" className="w-full object-contain max-h-[45%] absolute bottom-0 left-0" />
      </Box>

      {/* Right Panel */}
      <Box className={`w-3/5 flex ${isSignup ? "items-top" : "items-center"} justify-center px-10 py-5 bg-white overflow-y-auto`}>
        <Box sx={{ p: 6, width: "100%", maxWidth: 550 }}>
          <Stack spacing={1} className=" h-[87vh] flex items-center justify-center">
            <Box textAlign="center">
              <Typography variant="h5" fontWeight="bold" color="text.primary">
                {isSignup ? "Create Account" : "Sign In"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {isSignup ? "Start building your community today." : "Login to access your account."}
              </Typography>
            </Box>

            <Stack spacing={2} className="text-sm w-full">
              {isSignup ? (
                <>
                  <Stack direction="row" spacing={1}>
                    <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth />
                    <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth />
                  </Stack>
                  <TextField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth />
                  <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} fullWidth />
                </>
              ) : (
                <>
                  <TextField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth />
                  <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} fullWidth />
                </>
              )}
            </Stack>

            <Button
              onClick={handleSubmit}
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
  );
}
