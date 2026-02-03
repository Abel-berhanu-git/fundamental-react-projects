import { useState } from 'react';
import menuData from './data';

import Title from './Title';
import Categories from './Categories';
import Menu from './Menu';

// const categoriesList = menuData.map((menuItem) => menuItem.category);
// const uniqueCategories = new Set(['all', ...categoriesList]);
const allCategories = [
  ...new Set(['all', ...menuData.map((menuItem) => menuItem.category)]),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menuData);
  // const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === 'all') {
      setMenuItems(menuData); // restore full list
      return;
    }

    const newMenuItems = menuData.filter((menuItem) => {
      return menuItem.category === category;
    });

    setMenuItems(newMenuItems);
  };

  return (
    <section className='menu'>
      <Title title='our menu' />
      <Categories categories={allCategories} filterMenu={filterMenu} />
      <Menu menuItems={menuItems} />
    </section>
  );
};
export default App;
