import { AiFillStar } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";

function Card() {
  return (
    <section className="card">
      <img
        className="card-img"
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="Shoe"
      />
      <div className="card-details">
        <h3 className="card-title">Shoe</h3>
        <section className="card-reviews">
          <AiFillStar className="reviews-star" />
          <AiFillStar className="reviews-star" />
          <AiFillStar className="reviews-star" />
          <AiFillStar className="reviews-star" />
          <span className="total-reviews">18</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$300</del>
            <ins>$250</ins>
          </div>
          <div className="bag">
            <FaCartArrowDown className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
