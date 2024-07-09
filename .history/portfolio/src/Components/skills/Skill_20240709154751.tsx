import { useRef } from 'react';
import "./skill.scss";
import { motion, useInView } from 'framer-motion';

function About() {
  return (
    <div className='about-Container'>
      <p className='title'>About</p>
      <div className='content'>
        {/* Add your content here with any effects you want */}
      </div>
    </div>
  );
}

function Skill() {
  const skillRef = useRef(null);
  const skillInView = useInView(skillRef, { once: true, threshold: 0.5 });

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='skill-Container' ref={skillRef}>
      <p className='title'>Skill</p>
      <motion.div
        className='skills'
        variants={containerVariants}
        initial="hidden"
        animate={skillInView ? "show" : "hidden"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((skill) => (
          <motion.div
            className='skill'
            key={skill}
            variants={skillVariants}
          >
            {skill}
            <div className='name'>name</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <div>
      <About />
      <Skill />
    </div>
  );
}

export default App;
