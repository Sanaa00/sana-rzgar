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
  return (
    <div>
            <div>
                 <div >
                      <p>Sana Rzgar</p>
                      <p>Front-End Developer</p>
                 </div>
                 <img/>
     </div>
    </div>
  )
}

export default Home
