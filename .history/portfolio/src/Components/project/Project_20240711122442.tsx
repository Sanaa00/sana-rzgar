import { useRef } from 'react';
import './project.scss';
import { motion, useInView } from 'framer-motion';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

function Project() {
  // const projectRefs = useRef([]);
  const allProject = [
    {
      img: 'https://images.unsplash.com/photo-1608977230965-6a1b92233ac6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id: 1,
      name: 'project 1',
      tech: ['REact ', 'tailwind css', 'jsvascript'],
      title: 'frontend',
    },
    {
      img: 'https://images.unsplash.com/photo-1613545325268-9265e1609167?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id: 2,
      name: 'project 2',
      tech: ['REact ', 'tailwind css', 'jsvascript'],
      title: 'frontend',
    },
  ];

  return (
    <div className="projects">
      {allProject.map((pro, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { threshold: 0.1 });

        return (
          <motion.div
            key={pro.id}
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
                <img src={pro.img} alt={pro.name} />
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
                <img src={pro.img} alt={pro.name} />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Project;
