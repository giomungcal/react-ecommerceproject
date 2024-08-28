import { useEffect, useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";

// Database
import Card from "./components/Card";
import productsdb from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input Filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = productsdb.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // Radio Filter
  const handleRadioChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log("Working");
  };

  // Buttons Filter
  const handleButtonClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(productsArray, selected, query) {
    let filteredProducts = productsArray.map((product) => ({
      ...product,
      keyId: Math.floor(Math.random() * 10000),
    }));

    // Filtering Input Items

    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, newPrice, color, title, company }) => {
          category === selected ||
            newPrice === selected ||
            color === selected ||
            title === selected ||
            company === selected;
        }
      );
    }

    return filteredProducts.map(
      ({ img, title, prevPrice, newPrice, star, reviews, keyId }) => (
        <Card
          img={img}
          title={title}
          prevPrice={prevPrice}
          newPrice={newPrice}
          star={star}
          reviews={reviews}
          key={keyId}
        />
      )
    );
  }

  const productsDisplayed = filteredData(productsdb, selectedCategory, query);

  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <Navigation />
      <Recommended />
      <Products products={productsDisplayed} />
    </>
  );
}

export default App;
