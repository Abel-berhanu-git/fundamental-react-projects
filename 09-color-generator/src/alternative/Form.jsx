import { useState } from 'react';

const Form = ({ color, setColor, weight, setWeight }) => {
  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form'>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input type='text' id='text' value={color} placeholder='#f15025' readOnly />
        <div>
          <label htmlFor='weight' className='form-label'>
            weight
          </label>
          <input
            type='number'
            id='weight'
            value={weight}
            min='1'
            max='20'
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
        </div>
      </form>
    </section>
  );
};
export default Form;
