import './about.scss';
import { motion } from 'framer-motion';
import cv from '../../assets/sana.pdf';

function About() {
  // const slideInFromLeft = {
  //   hidden: { opacity: 0, x: -100 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { type: 'spring', stiffness: 100, damping: 10 },
  //   },
  // };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adjust the stagger timing as needed
      },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.05,
      },
    }),
  };

  const titles = [
    { text: 'Sana Rzgar', delay: 0.5 },
    { text: 'Front-End Developer', delay: 1.5 },
    {
      text: 'Passionate about crafting seamless and interactive web experiences, Committed to continuous learning and staying ahead in the ever-evolving tech landscape.',
      delay: 1.5,
    },
  ];

  return (
    <div className="about-container">
      <motion.div
        className="text-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p className="title" variants={slideInFromLeft}>
          Title 1
        </motion.p>
        <motion.p className="title" variants={slideInFromLeft}>
          Title 2
        </motion.p>
        <motion.p className="title" variants={slideInFromLeft}>
          Title 3
        </motion.p>
        <a className="cv" download href={cv}>
          Download CV
        </a>
      </motion.div>
      <motion.img
        className="profile-image"
        src="https://images.unsplash.com/photo-1622281587418-f2f4fc06ae7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="person"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
    </div>
  );
}

export default About;
