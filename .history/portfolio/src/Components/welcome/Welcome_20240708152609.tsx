import { useEffect, useState } from "react";
import "./welcome.scss"
import { motion } from 'framer-motion';
function Welcome({ onExitComplete, startSlideUp }) {
  const [startTextAnimation, setStartTextAnimation] = useState(false);

  useEffect(() => {
    if (startSlideUp) {
      setStartTextAnimation(true);
    }
  }, [startSlideUp]);

  return (
      <motion.div
      initial={{ y: 0 }}
      animate={startSlideUp ? { y: -window.innerHeight } : { y: 0 }}
      transition={{
        duration: 2,
        ease: [0.42, 0, 0.98, 1], // Slow start and faster end
      }}
      className="welcome-screen"
      onAnimationComplete={() => startSlideUp && onExitComplete()}
    >
      <motion.h1
        initial={{ y: 50 }}
        animate={startTextAnimation ? {  y: 0 } : {  y: 50 }}
        transition={{ duration: 2, delay: 2 }}
      >
        Welcome
      </motion.h1>
    </motion.div>
  )
}

export default Welcome
