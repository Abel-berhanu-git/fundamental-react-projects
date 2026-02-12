import { useGlobalContext } from './Context';
import sublinks from './data';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const NavLinks = () => {
  const { setPageId, pageId } = useGlobalContext();
  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId: itemId, page, links, url } = item;

        // SINGLE LINK only
        if (!links) {
          return (
            <a
              key={itemId}
              href={url}
              className='nav-link'
              onMouseEnter={() => setPageId(null)}
            >
              {page}
            </a>
          );
        }
        // SUBMENU LINKS
        return (
          <button
            type='button'
            key={itemId}
            className='nav-link'
            onMouseEnter={() => setPageId(itemId)}
          >
            {page}
            {pageId === itemId ? (
              <RiArrowDropUpLine />
            ) : (
              <RiArrowDropDownLine />
            )}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
