import { useEffect, useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";

// Database
import Card from "./components/Card";
import productsdb from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [query, setQuery] = useState("");

  // 2.0 Filtering Improvement
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedCat, setSelectedCat] = useState("all");

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
    const selectedValue = event.target.value;

    // Single Filtering System
    setSelectedCategory(selectedValue);

    // 2.0 Filtering Improvement
  };

  // Buttons Filter
  const handleButtonClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    // console.log(selectedCategory);
  }, [selectedCategory]);

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
      console.log(selected);

      if (selected !== "all") {
        filteredProducts = filteredProducts.filter(
          ({ category, newPrice, color, title, company }) => {
            return (
              category === selected ||
              newPrice === selected ||
              color === selected ||
              title === selected ||
              company === selected
            );
          }
        );
      }
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
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleButtonClick={handleButtonClick} />
      <Products products={productsDisplayed} />
    </>
  );
}

export default App;
