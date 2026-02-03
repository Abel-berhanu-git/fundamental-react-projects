const CategoryAlternative = ({ categories, setSelectedCategory }) => {
  // console.log(categories);
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='btn'
            key={index}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default CategoryAlternative;
