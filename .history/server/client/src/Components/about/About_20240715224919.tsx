import './about.scss';
import { motion } from 'framer-motion';
import cv from '../../assets/sana.pdf';

function About() {
  const letterAnimation = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
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
      <div className="text-container">
        {titles.map((title, index) => (
          <div key={index} className="title">
            {title.text.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterAnimation}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
        <a className="cv" download href={cv}>
          Download CV
        </a>
      </div>
      <div className="bootcamp">
        <div>
          {' '}
          <p>Bootcamp</p>
          <div>
            <p>WeCode</p>
            <p>Rwannga Foundation </p>
            <p>Front-End Web Development (3 months) </p>
          </div>
          <div>
            <p>Bit</p>
            <p>Potan Company </p>
            <p>Full Stack Web Development (3 months) </p>
          </div>
          <div>
            <p>Program</p>
            <div>
              <p>LevelUP Program (10 months) </p>
              <p>Iraq Space Center</p>
              <p>English , Computer Skill , Business Managment </p>
              <p>Finance and Accounting </p>
            </div>
          </div>
        </div>
      </div>
      {/* <motion.img
        className="profile-image"
        src="https://images.unsplash.com/photo-1622281587418-f2f4fc06ae7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="person"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      /> */}
    </div>
  );
}

export default About;
