import { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

function App() {
  const [menu, setMenu] = useState(items);

  const categories = ["all", ...new Set(items.map((item) => item.category))];

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
    if (category === "all") {
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
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
