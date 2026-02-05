import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';

import { list } from './data';

const SlickCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className='slick-container'>
      {list.map((person) => {
        const { id, image: img, name, title, quote } = person;
        return (
          <article key={id}>
            <img src={img} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
    </Slider>
  );
};
export default SlickCarousel;
