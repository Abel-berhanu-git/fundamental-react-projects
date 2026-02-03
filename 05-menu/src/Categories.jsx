const Categories = ({ categories, filterMenu }) => {
  // console.log(categories)
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='btn'
            key={index}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
