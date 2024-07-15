/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useEffect, useState } from 'react';
import './project.scss';
import { motion } from 'framer-motion';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../types.ts';

function Project() {
  const data = useLoaderData() as LoaderData | undefined;

  return (
    <div className="projects">
      {data?.project?.data?.map((pro, index) => {
        const ref = useRef(null);
        const [isInView, setIsInView] = useState(false);

        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
          );
          if (ref.current) {
            observer.observe(ref.current);
          }
          return () => {
            if (ref.current) {
              observer.unobserve(ref?.current);
            }
          };
        }, [ref]);

        return (
          <motion.div
            key={pro._id}
            className="project"
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
            }
            transition={{ duration: 1.5, delay: index * 0.3 }}
          >
            <div
              className={`${
                index % 2 === 0 ? 'img-container' : 'project-detail'
              }`}
            >
              {index % 2 === 0 ? (
                <img src={pro.img} alt={pro.name} className="img" />
              ) : (
                <ProjectDetail isInView={isInView} pro={pro} />
              )}
            </div>
            <div
              className={`${
                index % 2 === 0 ? 'project-detail' : 'img-container'
              }`}
            >
              {index % 2 === 0 ? (
                <ProjectDetail isInView={isInView} pro={pro} />
              ) : (
                <img src={pro.img} alt={pro.name} className="img" />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Project;

// /* eslint-disable react-hooks/rules-of-hooks */
// import { useRef } from 'react';
// import './project.scss';
// import { motion, useInView } from 'framer-motion';
// import ProjectDetail from '../ProjectDetail/ProjectDetail';
// import { useLoaderData } from 'react-router-dom';
// import { LoaderData } from '../../types.ts';
// function Project() {
//   const data = useLoaderData() as LoaderData | undefined;

//   return (
//     <div className="projects">
//       {data?.project?.data?.map((pro, index) => {
//         const ref = useRef(null);
//         const isInView = useInView(ref, { threshold: 0.1 });

//         return (
//           <motion.div
//             key={pro._id}
//             className="project"
//             ref={ref}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//             animate={
//               isInView
//                 ? { opacity: 1, x: 0 }
//                 : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
//             }
//             transition={{ duration: 1.5, delay: index * 0.3 }}
//           >
//             <div
//               className={`${
//                 index % 2 === 0 ? 'img-container' : 'project-detail'
//               }`}
//             >
//               {index % 2 === 0 ? (
//                 <img src={pro.img} alt={pro.name} className="img" />
//               ) : (
//                 <ProjectDetail isInView={isInView} pro={pro} />
//               )}
//             </div>
//             <div
//               className={`${
//                 index % 2 === 0 ? 'project-detail' : 'img-container'
//               }`}
//             >
//               {index % 2 === 0 ? (
//                 <ProjectDetail isInView={isInView} pro={pro} />
//               ) : (
//                 <img src={pro.img} alt={pro.name} className="img" />
//               )}
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

// export default Project;
