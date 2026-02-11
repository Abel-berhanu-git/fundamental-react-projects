import { useRef } from 'react';
import { useGlobalContext } from './Context';
import sublinks from './data';

const Submenu = () => {
  const { pageID, setPageId } = useGlobalContext();

  const currentPage = sublinks.find((item) => item.pageId === pageID);
  // console.log(currentPage);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    // console.log({ left, right, bottom });

    // the mouse x and y position on the vw
    // console.log(event);
    const { clientX, clientY } = event;
    // console.log(clientX, clientY);

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      ref={submenuContainer}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
