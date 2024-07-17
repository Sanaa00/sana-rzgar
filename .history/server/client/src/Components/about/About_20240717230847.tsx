import './about.scss';
// import { motion } from 'framer-motion';
import cv from '../../assets/sana.pdf';
// type Title = {
//   titles: { text: string; delay: number }[];
// };
type Titles = { text: string; delay: number };

function About() {
  // const letterAnimation = {
  //   hidden: { opacity: 0 },
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     transition: {
  //       delay: i * 0.05,
  //       duration: 0.05,
  //     },
  //   }),
  // };

  const titles: Titles[] = [
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
        {/* {titles.map((title, index) => ( */}
        {/* <div key={index} className="title"> */}
        {titles?.map((text, i) => (
          <span
            key={i}
            // custom={i}
            // initial="hidden"
            // animate="visible"
            // variants={letterAnimation}
          >
            {text}
            {/* {char} */}
          </span>
        ))}
        {/* </div> */}
        {/* ))} */}
        <a className="cv" download href={cv}>
          Download CV
        </a>
      </div>
      <div className="info">
        <div className="bootcamp">
          {' '}
          <p className="info-name">Bootcamp</p>
          <div className="bootcamp-info">
            <p className="info-title">WeCode</p>
            <p>Rwannga Foundation </p>
            <p>Front-End Web Development (3 months) </p>
          </div>
          <div className="bootcamp-info">
            <p className="info-title">Bit</p>
            <p>Potan Company </p>
            <p>Full Stack Web Development (3 months) </p>
          </div>
          <div className="program">
            <p>Program</p>
            <div className="program-info">
              <p className="info-title">LevelUP Program </p>
              <p>Iraq Space Center</p>
              <p>English , Computer Skill , Business Managment </p>
              <p>Finance and Accounting (10 months)</p>
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
