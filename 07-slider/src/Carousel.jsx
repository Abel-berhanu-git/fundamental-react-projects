import { useState } from 'react';
import { shortList, list } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useEffect } from 'react';
const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldCurrentPerson) => {
      const newValue = (oldCurrentPerson - 1 + people.length) % people.length;
      return newValue;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((oldCurrentPerson) => {
      const newValue = (oldCurrentPerson + 1) % people.length;
      return newValue;
    });
  };

  useEffect(() => {
    const slideId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(slideId);
  }, [currentPerson]);
  return (
    <section className='slider-container'>
      {people.map((person, personIndex) => {
        const { id, image: img, name, title, quote } = person;
        return (
          <article
            key={id}
            className='slide'
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: currentPerson === personIndex ? 1 : 0,
              visibility: currentPerson === personIndex ? 'visible' : 'hidden',
            }}
          >
            <img src={img} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
