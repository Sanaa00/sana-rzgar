import "./welcome.scss"
import { motion } from 'framer-motion';
function Welcome({ onExitComplete }) {
  return (
      <motion.div
      initial={{ y: 0 }}
      animate={startSlideUp ? { y: -window.innerHeight } : { y: 0 }}
      transition={{ duration: 1 }}
      className="welcome-screen"
      onAnimationComplete={startSlideUp ? onExitComplete : null}
    >
      <h1>Welcome</h1>
    </motion.div>
  )
}

export default Welcome
