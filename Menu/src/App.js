import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [menuCategories, setMenuCategories] = useState(allCategories);

  const filterItems = (matching) => {
    if (matching === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === matching);

    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <div className="head-section">
          <h2 className="heading">Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} menuCategories={menuCategories} />
      </section>
      <div className="menu-section">
        <Menu menuItems={menuItems} />
      </div>
    </main>
  );
}

export default App;
