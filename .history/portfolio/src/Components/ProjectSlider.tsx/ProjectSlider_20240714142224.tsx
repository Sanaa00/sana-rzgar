import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import { useLoaderData } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

function ProjectSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = useLoaderData();

  return (
    <Slider {...settings} className="slider">
      {data?.project?.data?.map((pro) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { threshold: 0.1 });
        return (
          <div className="pro-detail">
            <motion.p
              className="name"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: isInView ? 0.5 : 0 }}
            >
              {pro.name}
            </motion.p>
            <motion.p
              className="title"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: isInView ? 1.5 : 0 }}
            >
              {pro.title}
            </motion.p>
            <motion.p
              className="tech"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: isInView ? 2.5 : 0 }}
            >
              {pro.tech.join(', ')}
            </motion.p>
          </div>
        );
      })}
    </Slider>

    // </Swiper>
  );
}

export default ProjectSlider;
