import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useLoaderData } from 'react-router-dom';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import { useInView } from 'framer-motion';
import './projectSlider.scss';

function ProjectSlider() {
  const data = useLoaderData();
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  if (!data || !data.project || !data.project.data) {
    console.error('Data is not loaded correctly:', data);
    return <div>Loading...</div>;
  }

  return (
    <div className="slider-container">
      <div className="text">hello</div>
      <Slider {...settings}>
        {data?.project?.data?.map((pro) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { threshold: 0.1 });

          return (
            <div className="project" ref={ref} key={pro.id}>
              <ProjectDetail isInView={isInView} pro={pro} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
