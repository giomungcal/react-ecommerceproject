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
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCat, setSelectedCat] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

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
    // setSelectedCategory(selectedValue);

    // 2.0 Filtering Improvement
    switch (selectedValue) {
      case "allCategory":
      case "sneakers":
      case "flats":
      case "heels":
      case "sandals":
        setSelectedCat(selectedValue);
        console.log("category");
        break;

      case "allPrice":
      case "50":
      case "100":
      case "150":
      case "200":
        setSelectedPrice(selectedValue);
        console.log("number");
        break;

      case "allColor":
      case "red":
      case "black":
      case "green":
      case "blue":
      case "white":
        setSelectedColor(selectedValue);
        console.log("color");
        break;

      default:
        break;
    }
  };

  // Buttons Filter
  const handleButtonClick = (event) => {
    setSelectedCat(event.target.value);
  };

  function filteredData(
    productsArray,
    filterCategory,
    filterPrice,
    filterColor,
    query
  ) {
    let filteredProducts = productsArray.map((product) => ({
      ...product,
      keyId: Math.floor(Math.random() * 10000),
    }));

    // Filtering Input Items

    if (query) {
      filteredProducts = filteredItems;
    }

    // 2.0 Filtering System - for Category
    if (filterCategory) {
      if (filterCategory !== "allCategory") {
        filteredProducts = filteredProducts.filter(
          ({ category, title, company }) => {
            return (
              category === filterCategory ||
              title === filterCategory ||
              company === filterCategory
            );
          }
        );
      }
    }

    // Selected Filter - for Price
    if (filterPrice) {
      if (filterPrice !== "allPrice") {
        filteredProducts = filteredProducts.filter(({ newPrice }) => {
          return newPrice === filterPrice;
        });
      }
    }

    // Selected Filter - for Color
    if (filterColor) {
      if (filterColor !== "allColor") {
        filteredProducts = filteredProducts.filter(({ color }) => {
          return color === filterColor;
        });
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

  const productsDisplayed = filteredData(
    productsdb,
    selectedCat,
    selectedPrice,
    selectedColor,
    query
  );

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
