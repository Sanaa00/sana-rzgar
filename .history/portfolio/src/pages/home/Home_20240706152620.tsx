import { motion } from 'framer-motion';
import './Home.scss';

function Home() {
  const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
  };
   const titles = [
    { text: 'Sana Rzgar', delay: 0.5 },
    { text: 'Front-End Developer', delay: 1.5 },
  ];
  return (
    <div className="home-container">
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
      </div>
      <img src="path_to_your_image.jpg" alt="Profile" className="profile-image" />
    </div>
  )
}

export default Home
