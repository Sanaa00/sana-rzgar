import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function ProjectSlider() {
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
        <div>
          <img src={baseUrl + '/abstract01.jpg'} />
        </div>
        <div>
          <img src={baseUrl + '/abstract02.jpg'} />
        </div>
        <div>
          <img src={baseUrl + '/abstract03.jpg'} />
        </div>
        <div>
          <img src={baseUrl + '/abstract04.jpg'} />
        </div>
      </Slider>
    </div>
  );
}

export default ProjectSlider;
