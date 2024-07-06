import "./welcome.scss"
function Welcome() {
  return (
      <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="welcome-screen"
    >
      <h1>Welcome</h1>
    </motion.div>
  )
}

export default Welcome
