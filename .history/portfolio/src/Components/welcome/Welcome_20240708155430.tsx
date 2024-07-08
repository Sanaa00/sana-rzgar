import { useEffect, useState } from "react";
import "./welcome.scss";
import { motion } from 'framer-motion';

function Welcome({ startSlideUp }) {
  const [startTextAnimation, setStartTextAnimation] = useState(false);

  useEffect(() => {
    if (startSlideUp) {
      setStartTextAnimation(true);
    }
  }, [startSlideUp]);

  return (
    <motion.div
      initial={{ y: 0 }} // Initial position
      animate={startSlideUp ? { y: -window.innerHeight } : { y: 0 }} // Slide up
      transition={{
        duration: 2, // Duration of the slide
        ease: [0.42, 0, 0.98, 1], // Ease for smooth transition
      }}
      className="welcome-screen"
    >
      <motion.h1
        initial={{ opacity: 1, y: 50 }} // Start from below and fully visible
        animate={startTextAnimation ? { opacity: 0, y: 0 } : { opacity: 1, y: 50 }} // Fade out and move up
        transition={{ duration: 2, delay: 0 }} // Text animation
      >
        Welcome
      </motion.h1>
    </motion.div>
  );
}

export default Welcome;
