"use client"

import { Box, Typography, Button, Container } from "@mui/material"
import { motion } from "framer-motion"
import { ArrowForward } from "@mui/icons-material"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
}

export default function HeroQuoteSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "80vh",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        background: `
  linear-gradient(135deg, 
    rgba(218, 165, 32, 0.15) 0%, 
    rgba(255, 215, 0, 0.1) 25%,
    rgba(218, 165, 32, 0.2) 50%,
    rgba(184, 134, 11, 0.15) 75%,
    rgba(218, 165, 32, 0.1) 100%
  ),
  radial-gradient(circle at 20% 80%, rgba(218, 165, 32, 0.2) 0%, transparent 50%),
  radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.25) 0%, transparent 50%),
  radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)
`,
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // background: `
          //   url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          // `,
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: { xs: 3, md: 6 },
        }}
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Quote */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: {sm: "2rem", md: "3rem", lg: "4rem" },
                fontWeight: 300,
                lineHeight: 1.2,
                color: "#1a1a1a",
                marginBottom: { xs: 2, md: 3 },
                position: "relative",
              }}
            >
              Build a Circle outside your Circle...!
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                fontWeight: 400,
                color: "#4a4a4a",
                marginBottom: { xs: 4, md: 6 },
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.6,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Discover extraordinary experiences that transform ordinary moments into lasting memories. Your journey of
              wonder and inspiration starts here.
            </Typography>
          </motion.div>

          {/* Explore Button */}
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              variant="contained"
              href="/about"
              size="large"
              endIcon={
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowForward />
                </motion.div>
              }
              sx={{
                fontSize: { xs: "1.1rem", md: "1.2rem" },
                fontWeight: 600,
                padding: { xs: "12px 32px", md: "16px 48px" },
                borderRadius: "50px",
                background: "linear-gradient(45deg, #DAA520 30%, #FFD700 90%)",
                boxShadow: "0 8px 32px rgba(218, 165, 32, 0.3)",
                color: "#1a1a1a",
                textTransform: "none",
                fontFamily: '"Inter", sans-serif',
                "&:hover": {
                  background: "linear-gradient(45deg, #B8860B 30%, #DAA520 90%)",
                  boxShadow: "0 12px 40px rgba(218, 165, 32, 0.4)",
                  transform: "translateY(-2px)",
                },
                "&:active": {
                  transform: "translateY(0px)",
                },
              }}
            >
              Explore
            </Button>
          </motion.div>

          

        </motion.div>
      </Container>

    </Box>
  )
}
