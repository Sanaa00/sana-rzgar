import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
// SwiperCore.use([Pagination]);
function ProjectSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = useLoaderData();
  // console.log(data.project.data);

  // const settings = {
  //   dots: true,
  //   fade: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   waitForAnimate: false,
  // // };
  // if (!data || !data.project || !data.project.data) {
  //   console.error('Data is not loaded correctly:', data);
  //   return <div>Loading...</div>;
  // }
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <Slider {...settings}>
      {data?.project?.data?.map((pro) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { threshold: 0.1 });
        return (
          <div key={pro._id}>
            <ProjectDetail pro={pro} isInView={isInView} />
          </div>
        );
      })}
    </Slider>

    // </Swiper>
  );
}

export default ProjectSlider;
