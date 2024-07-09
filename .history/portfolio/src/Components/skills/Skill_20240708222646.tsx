import React from 'react';
import "./skill.scss";
import { motion } from 'framer-motion';

function Skill() {
  const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className='skill-Container'>
      <p className='title'>Skill</p>
      <motion.div
        className='skills'
        variants={containerVariants}
        initial="hidden"
        animate="show"
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
