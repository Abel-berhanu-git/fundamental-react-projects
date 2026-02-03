import { useState } from 'react';
import menuData from './data';

import Title from './Title';
import CategoryAlternative from './CategoriesAlternative';
import Menu from './Menu';

const AppAlternative = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Use state for what the user changed or what the app is currently in, not for what you can calculate.

  const filteredMenuItems =
    selectedCategory === 'all'
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  const categoriesList = menuData.map((menuItem) => menuItem.category);
  const uniqueCategories = new Set(['all', ...categoriesList]);
  const categories = [...uniqueCategories];

  return (
    <section className='menu'>
      <Title title='our menu' />
      <CategoryAlternative
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <Menu menuItems={filteredMenuItems} />
    </section>
  );
};
export default AppAlternative;
