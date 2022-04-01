import React from "react";
// props olarak kullanacaklarımızı alıyoruz
const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {/* categories içerisinde map ile gezip categoryleri button içerisine
      yazdırıyoruz  */}
      {categories.map((category,index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            // hangi butona tıklarsak o butona ait yemekler gösteriliyor
            onClick={() => filterItems(category)}
          >
            {/* buton ismi de data içerisindeki categorylerden oluşuyor */}
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
