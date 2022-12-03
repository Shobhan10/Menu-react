import { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);

  let categoryArray = ["All"];
  for (let i = 0; i < items.length; i++) {
    categoryArray.push(items[i].category);
  }
  let category = [...new Set(categoryArray)];

  console.log(category);
  // let a = [1, 2, 3];
  // setCategories(category);
  // console.log(categories);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
    if (category === "All") {
      setMenu(items);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={category} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
