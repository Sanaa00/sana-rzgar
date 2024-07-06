import "./welcome.scss"
import { motion } from 'framer-motion';
function Welcome({ onExitComplete, startSlideUp }) {
  return (
      <motion.div
      initial={{ y: 0 }}
      animate={startSlideUp ? { y: -window.innerHeight } : { y: 0 }}
      transition={{ duration: 3 }}  // Slower transition (3 seconds)
      className="welcome-screen"
      onAnimationComplete={startSlideUp ? onExitComplete : null}
    >
      <h1>Welcome</h1>
    </motion.div>
  )
}

export default Welcome
