import './home.scss';
import About from '../../Components/about/About';
import Project from '../../Components/project/Project';
import { motion } from 'framer-motion';
import Skill from '../../Components/skills/Skill';
import GetInToch from '../../Components/GetInToch/GetInToch';
import Contact from '../../Components/contact/Contact';
import { useLoaderData } from 'react-router-dom';
function Home({ show }) {
  // const data = useLoaderData();

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
    >
      <About />
      <Skill />
      <Project />
      <GetInToch />
      <Contact />
    </motion.div>
  );
}

export default Home;
