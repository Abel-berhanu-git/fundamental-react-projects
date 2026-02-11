import { useGlobalContext } from "./Context";
import sublinks from "./data"
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';


const NavLinks = () => {
    const { setPageId,pageID:itemID } = useGlobalContext();
  return (
    <div className="nav-links">
        {sublinks.map(pages=>{
            const {pageId,page} = pages
            return (
              <button
                type='button'
                key={pageId}
                className='nav-link'
                onMouseEnter={() => setPageId(pageId)}
              >
                {page}
                {itemID === pageId ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
              </button>
            );
        })}
    </div>
  )
}
export default NavLinks