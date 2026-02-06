import { useState } from 'react';

const Form = ({ setWeight, setColors }) => {
  const [colorPicker, setColorPicker] = useState('#f15025');
  const [weightPicker, setWeightPicker] = useState(10);

  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form'>
        <input
          type='color'
          value={colorPicker}
          onChange={(e) => {
            setColorPicker(e.target.value);
            setColors(e.target.value);
          }}
        />
        <input
          type='text'
          id='text'
          value={colorPicker}
          placeholder='#f15025'
          onChange={()=>{}}
        />
        <div>
          <label htmlFor='weight' className='form-label'>
            weight
          </label>
          <input
            type='number'
            id='weight'
            value={weightPicker}
            min='5'
            // step='5'
            max='20'
            onChange={(e) => {
              setWeightPicker(e.target.value);
              setWeight(parseInt(weightPicker));
            }}
          />
        </div>
      </form>
    </section>
  );
};
export default Form;
