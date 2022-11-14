import React from "react";
import "./App.css";

const Menu = ({ items }) => {
  return (
    <div className="section-container">
      {items.map((menuItem) => {
        const { id, title, img, desc } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
