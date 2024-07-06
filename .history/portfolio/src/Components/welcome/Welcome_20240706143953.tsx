import "./welcome.scss"
import { motion } from 'framer-motion';
function Welcome({ onExitComplete }) {
  return (
        <motion.div
      initial={{ y: 0 }}
      animate={{ y: -window.innerHeight }}
      transition={{ duration: 1 }}
      className="welcome-screen"
      onAnimationComplete={onExitComplete}
    >
      <h1>Welcome</h1>
    </motion.div>
  )
}

export default Welcome
