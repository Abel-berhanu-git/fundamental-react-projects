import { useState } from 'react';
import reviews from './data';
import { FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return (number = 0);
    }
    if (number < 0) {
      return (number = reviews.length - 1);
    }

    return number;
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomReview = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * reviews.length);
    } while (randomIndex === index);

    setIndex(randomIndex);
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomReview}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
