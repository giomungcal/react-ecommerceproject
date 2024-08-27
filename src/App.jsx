import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Category from "./sidebar/Category/Category";

function App() {
  return (
    <>
      <h1 className="text-6xl">His</h1>
      <Navigation />
      <Products />
      <Recommended />
      <Category />
    </>
  );
}

export default App;
