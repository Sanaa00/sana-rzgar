import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import { useLoaderData } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import './projectSlider.scss';
import { Autoplay } from 'swiper/modules';
// import '../ProjectDetail/projectDetail.scss';
function ProjectSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    Autoplay: true,
  };

  const data = useLoaderData();

  return (
    <div className="slider-content">
      <p className="title-pro">Projects</p>{' '}
      <Slider {...settings} className="slider">
        {/* <div> */}{' '}
        {data?.project?.data?.map((pro) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { threshold: 0.1 });
          return (
            <div key={pro._id} className="pro-detail">
              <img className="img" src={pro.img} />
              <div className="texts">
                {' '}
                <p
                  className="card-name"
                  // initial={{ opacity: 0 }}
                  // animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  // transition={{ duration: 1, delay: isInView ? 0.5 : 0 }}
                >
                  {pro.name}
                </p>{' '}
                <p
                  className="title"
                  // initial={{ opacity: 0 }}
                  // animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  // transition={{ duration: 1, delay: isInView ? 1.5 : 0 }}
                >
                  {pro.title}
                </p>{' '}
                <p
                  className="tech"
                  // initial={{ opacity: 0 }}
                  // animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  // transition={{ duration: 1, delay: isInView ? 2.5 : 0 }}
                >
                  Technolgies : {pro.tech.join(', ')}
                </p>
              </div>
              {/* <p>{pro.name}</p> */}
            </div>
          );
        })}
        {/* </div> */}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
