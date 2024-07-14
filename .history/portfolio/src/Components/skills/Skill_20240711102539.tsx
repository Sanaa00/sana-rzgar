import { useRef } from 'react';
import './skill.scss';
import { motion, useInView } from 'framer-motion';
import { useLoaderData } from 'react-router-dom';

function Skill() {
  const skillRef = useRef(null);
  const skillInView = useInView(skillRef, { once: true, threshold: 0.5 });
  const datas = useLoaderData();

  console.log('skill', datas);

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="skill-Container">
      <p className="title" ref={skillRef}>
        Skill
      </p>
      <motion.div
        className="skills"
        variants={containerVariants}
        initial="hidden"
        animate={skillInView ? 'show' : 'hidden'}
      >
        {data.skill.map((skill) => (
          <motion.div className="skill" key={skill} variants={skillVariants}>
            {skill}
            <div className="name">name</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skill;
