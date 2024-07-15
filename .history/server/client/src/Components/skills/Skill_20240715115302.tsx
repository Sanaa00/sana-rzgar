import { useRef, useEffect, useState } from 'react';
import './skill.scss';
import { motion } from 'framer-motion';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../types';

function Skill() {
  const skillRef = useRef(null);
  const [skillInView, setSkillInView] = useState(false);
  const data = useLoaderData() as LoaderData | undefined;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setSkillInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [skillRef]);

  console.log('skill', data);

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
        {data?.skill?.data?.map((skill) => (
          <motion.div
            className="skill"
            key={skill._id}
            variants={skillVariants}
          >
            <div className="name">{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skill;

// import { useRef } from 'react';
// import './skill.scss';
// import { motion, useInView } from 'framer-motion';
// import { useLoaderData } from 'react-router-dom';
// import { LoaderData } from '../../types';

// function Skill() {
//   const skillRef = useRef(null);
//   const skillInView = useInView(skillRef, { once: true, threshold: 0.5 });
//   const data = useLoaderData() as LoaderData | undefined;

//   console.log('skill', data);

//   const containerVariants = {
//     hidden: { opacity: 1 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.5,
//       },
//     },
//   };

//   const skillVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//       },
//     },
//   };

//   return (
//     <div className="skill-Container">
//       <p className="title" ref={skillRef}>
//         Skill
//       </p>
//       <motion.div
//         className="skills"
//         variants={containerVariants}
//         initial="hidden"
//         animate={skillInView ? 'show' : 'hidden'}
//       >
//         {data?.skill?.data?.map((skill) => (
//           <motion.div
//             className="skill"
//             key={skill._id}
//             variants={skillVariants}
//           >
//             <div className="name">{skill.name}</div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default Skill;
