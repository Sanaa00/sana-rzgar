import { useRef } from "react";
import "./project.scss"
import { motion,useInView } from 'framer-motion';
function Project() {
 const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
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
     <div ref={ref} className="projects">
      {allProject.map((pro, index) => (
        <motion.div
          key={index}
          className="project"
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`${index % 2 === 0 ? 'img-container' : 'project-detail'}`}>
            {index % 2 === 0 ? (
              <img src={pro.img} alt={pro.name} />
            ) : (
              <div>
                <p>{pro.name}</p>
                <p>{pro.title}</p>
                <p>{pro.tech}</p>
              </div>
            )}
          </div>
          <div className={`${index % 2 === 0 ? 'project-detail' : 'img-container'}`}>
            {index % 2 === 0 ? (
              <div>
                <p>{pro.name}</p>
                <p>{pro.title}</p>
                <p>{pro.tech}</p>
              </div>
            ) : (
              <img src={pro.img} alt={pro.name} />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Project
