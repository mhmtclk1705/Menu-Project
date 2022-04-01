import React from "react";
// datayı props olarak alıyoruz
const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {/* map ile data içerisinde gezip html taglerine yazdırıyoruz */}
      {items.map((menuItem) => {
        // destructuring
        const { id, title, img, desc,price } = menuItem;
        return (
          // html
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
              <h4>{title}</h4>
              <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
