import { useRef } from "react";
import "./project.scss"
import { motion,useInView } from 'framer-motion';
function Project() {
  const projectRefs = useRef([]);
  const allProject = [
    {
      img: "https://plus.unsplash.com/premium_photo-1717437910344-c7cac52d264f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 1,
      name: "project 1",
      tech: ["REact ", "tailwind css", "jsvascript"],
      title:"friont end "
    },{img: "https://plus.unsplash.com/premium_photo-1717437910344-c7cac52d264f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 2,
      name: "project 1",
      tech: ["REact ", "tailwind css", "jsvascript"],
      title:"friont end "}
  ]
  return (
     <div className="projects">
      {allProject.map((pro, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { threshold: 0.1 });
        
        return (
          <motion.div
            key={index}
            className="project"
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            transition={{ duration: 1.5, delay: index * 0.3 }} // slower animation and staggered effect
          >
            <div className={`${index % 2 === 0 ? 'img-container' : 'project-detail'}`}>
              {index % 2 === 0 ? (
                <img src={pro.img} alt={pro.name} />
              ) : (
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: isInView ? 0.5 : 0 }}
                  >
                    {pro.name}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: isInView ? 1.5 : 0 }}
                  >
                    {pro.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: isInView ? 2.5 : 0 }}
                  >
                    {pro.tech}
                  </motion.p>
                </div>
              )}
            </div>
            <div className={`${index % 2 === 0 ? 'project-detail' : 'img-container'}`}>
              {index % 2 === 0 ? (
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: isInView ? 0.5 : 0 }}
                  >
                    {pro.name}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: isInView ? 1.5 : 0 }}
                  >
                    {pro.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: isInView ? 2.5 : 0 }}
                  >
                    {pro.tech}
                  </motion.p>
                </div>
              ) : (
                <img src={pro.img} alt={pro.name} />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  )
}

export default Project
