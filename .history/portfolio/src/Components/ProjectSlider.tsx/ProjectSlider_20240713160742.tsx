import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useLoaderData } from 'react-router-dom';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
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
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data?.project?.data?.map((pro) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { threshold: 0.1 });
          <ProjectDetail isInView={} pro={pro} />;
        })}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
