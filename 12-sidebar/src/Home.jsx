import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <>
      <button type='button' className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button type='button' className='btn' onClick={openModal}>
        show modal
      </button>
    </>
  );
};
export default Home;
