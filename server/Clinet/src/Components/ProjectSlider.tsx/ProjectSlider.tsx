/* eslint-disable react-hooks/rules-of-hooks */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLoaderData } from 'react-router-dom';
import './projectSlider.scss';
import { LoaderData } from '../../types';

function ProjectSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
  };

  const data = useLoaderData() as LoaderData | undefined;

  return (
    <div className="slider-content">
      <p className="title-pro">Projects</p>
      <Slider {...settings} className="slider">
        {data?.project?.data?.map((pro) => {
          return (
            <div key={pro._id} className="pro-detail">
              <img className="img" src={pro.img} />
              <div className="texts">
                <p className="card-name">{pro.name}</p>
                <p className="title">{pro.title}</p>
                <p className="tech">Technolgies : {pro.tech.join(', ')}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
