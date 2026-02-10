import { FaTimes } from 'react-icons/fa';
import logo from './logo.svg';
import { links } from './data';
import { social } from './data';
import { useGlobalContext } from './Context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <nav className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button type='button' className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='social-links'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
            </a>
          );
        })}
      </ul>
    </nav>
  );
};
export default Sidebar;
