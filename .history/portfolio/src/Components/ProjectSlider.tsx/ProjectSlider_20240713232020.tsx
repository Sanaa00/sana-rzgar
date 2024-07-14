import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
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
      modules={[Pagination]}
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
      </SwiperSlide>
    </Swiper>

    // </Swiper>
  );
}

export default ProjectSlider;
