import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useLoaderData } from 'react-router-dom';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import { useInView } from 'framer-motion';
import './projectSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination } from 'swiper';
// import { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Pagination]);
function ProjectSlider() {
  const data = useLoaderData();
  console.log(data.project.data);

  // const settings = {
  //   dots: true,
  //   fade: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   waitForAnimate: false,
  // };
  if (!data || !data.project || !data.project.data) {
    console.error('Data is not loaded correctly:', data);
    return <div>Loading...</div>;
  }
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
   <Swiper
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 3</div>
      </Swiper>
    </Swiper>
  );
}

export default ProjectSlider;
