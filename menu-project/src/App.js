import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./App.css";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <div className="App">
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu className items={menuItems} />
      </section>
    </div>
  );
}

export default App;
