
import "./projectDetail.scss";
import { motion } from 'framer-motion';

function ProjectDetail({ isInView, pro }) {
  return (
    <div className="pro-detail">
      <motion.p className="name"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: isInView ? 0.5 : 0 }}
      >
        {pro.name}
      </motion.p>
      <motion.p className="title"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: isInView ? 1.5 : 0 }}
      >
        {pro.title}
      </motion.p>
      <motion.p className="tech"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: isInView ? 2.5 : 0 }}
      >
        {pro.tech.join(", ")}
      </motion.p>
    </div>
  );
}

export default ProjectDetail;
