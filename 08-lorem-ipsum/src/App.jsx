import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [texts, setTexts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTexts(data.slice(0, parseInt(count)));
    console.log(texts)
  };
  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='number'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {texts.map((text) => {
          return <p key={nanoid(10)}>{text}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
