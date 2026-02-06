import { useEffect, useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [color, setColor] = useState('#f15025');
  const [weight, setWeight] = useState(10);
  const [colorList, setColorList] = useState(new Values('#f15025').all(weight));

  useEffect(() => {
    try {
      const newValues = new Values(color).all(weight);
      setColorList(newValues);
    } catch (error) {
      toast.error(error.message);
    }
  }, [color, weight]);

  return (
    <main>
      <Form color={color} setColor={setColor} weight={weight} setWeight={setWeight} />
      <ColorList colorList={colorList} />
      <ToastContainer position='top-center' pauseOnHover={false} />
    </main>
  );
};
export default App;
