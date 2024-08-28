import Card from "../components/Card";
import "./Products.css";

function Products({ products }) {
  return (
    <section className="card-container">
      {products.map((product) => product)}
    </section>
  );
}

export default Products;
