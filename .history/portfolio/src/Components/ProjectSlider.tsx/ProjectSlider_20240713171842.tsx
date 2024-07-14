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
  console.log(data.project.data);

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
        <div
          className="project"
          style={{ border: '1px solid blue', padding: '20px' }}
        >
          <div>Project 1</div>
        </div>
        <div
          className="project"
          style={{ border: '1px solid blue', padding: '20px' }}
        >
          <div>Project 2</div>
        </div>
        <div
          className="project"
          style={{ border: '1px solid blue', padding: '20px' }}
        >
          <div>Project 3</div>
        </div>
      </Slider>
    </div>
  );
}

export default ProjectSlider;
