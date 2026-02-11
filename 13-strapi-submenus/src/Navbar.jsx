import { FaBarsStaggered } from 'react-icons/fa6';
import { useGlobalContext } from './Context';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    // console.log(e.target);
    if (!e.target.closest('.nav-links')) {
      // console.log('not-link');
      setPageId(null);
    }
  };
  // or
  // onMouseLeave={()=>setPageId(null)
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button type='button' className='toggle-btn' onClick={openSidebar}>
          <FaBarsStaggered />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
