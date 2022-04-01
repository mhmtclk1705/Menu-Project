import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// category leri button lara bölmek için set kullanarak toplam category sayısını bulduk 
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  // datayı menuItems içinde tutuyoruz
  const [menuItems, setMenuItems] = useState(items);
  // categoryleri props olarak <Categories /> componentine gönderiyoruz
  const [categories, setCategories] = useState(allCategories);

  // all categorysinin tüm itemleri göstermesini istediğimiz için kullandık
  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    // category bizim seçtiğimiz category ise sadece o category 
    // içindeki yemekleri göstermesi için
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (
  <main>
    {/* html */}
    <section className='menu section'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      {/* props olarak kullanacaklarımızı göderiyoruz */}
      <Categories filterItems = {filterItems} categories={categories}/>
      <Menu items={menuItems}/>
    </section>
  </main>
  );
}

export default App;
