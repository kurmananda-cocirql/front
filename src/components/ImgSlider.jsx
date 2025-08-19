import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: 'banners/Untitled design (1).png',
    link: "/",
  },
  {
    image: "banners/5pics.png",
    link: "/",
  },
  {
    image: "banners/Your paragraph text.png",
    link: "/",
  },
];

const wrapIndex = (idx, length) => ((idx % length) + length) % length;

const ImageSlider = () => {
  const [[index, direction], setIndex] = useState([0, 0]);
  const swipeThreshold = 100;
  const pointerStartX = useRef(null);
  const imageIndex = wrapIndex(index, slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prev]) => [prev + 1, 1]);
    }, 4000); // 4000 ms = 4 sec

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const handlePointerDown = (e) => {
    pointerStartX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (pointerStartX.current !== null) {
      const diff = Math.abs(e.clientX - pointerStartX.current);
      if (diff < 10) {
        window.open(slides[imageIndex].link, "_blank");
      }
    }
    pointerStartX.current = null;
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    if (offset < -swipeThreshold) {
      setIndex(([prev]) => [prev + 1, 1]);
    } else if (offset > swipeThreshold) {
      setIndex(([prev]) => [prev - 1, -1]);
    }
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <Box
      className="z-0"
      position="fixed"
      width="100%"
      height="70vh"
      sx={{ overflow: "hidden", backgroundColor: "#000" }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={slides[imageIndex].image}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onDragEnd={handleDragEnd}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            cursor: "grab",
          }}
        />
      </AnimatePresence>

      {/* Indicator bar */}
      <Box
        position="absolute"
        bottom={16}
        left="50%"
        sx={{ transform: "translateX(-50%)" }}
        display="flex"
        gap={1}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: i === imageIndex ? 32 : 10,
              height: 8,
              bgcolor: i === imageIndex ? "#fff" : "#888",
              borderRadius: 4,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;
