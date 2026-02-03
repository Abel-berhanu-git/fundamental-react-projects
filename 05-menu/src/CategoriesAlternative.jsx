const CategoryAlternative = ({ categories, setSelectedCategory }) => {
  // console.log(categories);
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            className='btn'
            key={category}
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
