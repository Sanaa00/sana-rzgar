
import './home.scss';
import About from '../../Components/about/About';
import Project from '../../Components/project/Project';

function Home({ show }) {

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
    >
      <About />
      <Project />
    </motion.div>
  )
}

export default Home
