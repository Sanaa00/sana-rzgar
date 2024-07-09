import  { useRef } from 'react';
import "./skill.scss";
import { motion, useInView } from 'framer-motion';

function Skill() {
  const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // increase this value for a slower stagger
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.5, // increase duration for a slower animation
      }
    },
  };

  return (
    <div className='skill-Container' ref={ref}>
      <p className='title'>Skill</p>
      <motion.div
        className='skills'
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {skills.map((skill) => (
          <motion.div
            className='skill'
            key={skill}
            variants={skillVariants}
          >
            {skill}
            <div>name</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skill;
