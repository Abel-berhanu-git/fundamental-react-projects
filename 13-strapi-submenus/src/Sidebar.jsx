import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import sublinks from './data';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, pageId, setPageId } = useGlobalContext();

  const handleSidebarLinks = (itemId) => {
    const activePageId = pageId === itemId ? null : itemId;
    setPageId(activePageId);
  };

  console.log(pageId);

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <button type='button' className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item) => {
            const { pageId: itemId, page, links, url } = item;

            // SINGLE LINK ONLY
            if (!links) {
              return (
                <article key={itemId}>
                  <div className='page-links'>
                    <h4>
                      <a href={url} style={{ color: '#4338ca' }}>
                        {page}
                      </a>
                    </h4>
                  </div>
                </article>
              );
            }
            // SIDEBAR WITH  SUB-LINKS
            return (
              <article key={itemId}>
                <div className='page-links'>
                  <h4>{page}</h4>
                  <button
                    type='button'
                    onClick={() => handleSidebarLinks(itemId)}
                  >
                    {pageId === itemId ? (
                      <RiArrowDropUpLine />
                    ) : (
                      <RiArrowDropDownLine />
                    )}
                  </button>
                </div>
                <div
                  className={
                    pageId === itemId
                      ? 'sidebar-sublinks show-sublinks'
                      : 'sidebar-sublinks'
                  }
                >
                  {links?.map((link) => {
                    const { id, label, icon, url } = link;
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
