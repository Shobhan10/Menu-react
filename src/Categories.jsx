const Categories = ({ category, filterItems }) => {
  // console.log(categories);
  return (
    <div className="btn-container">
      {category.map((item) => {
        return (
          <button className="filter-btn" onClick={() => filterItems(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
