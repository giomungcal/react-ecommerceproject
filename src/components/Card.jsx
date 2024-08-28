import { AiFillStar } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";

function Card({ img, title, prevPrice, newPrice, star, reviews, keyId }) {
  return (
    <section className="card">
      <img className="card-img" src={img} alt="Shoe" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {StarRatings(star)}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>
            <span> {newPrice}</span>
          </div>
          <div className="bag">
            <FaCartArrowDown className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );

  // Display stars based on number of "star"
  function StarRatings(num) {
    const starArray = [];
    for (let index = 0; index < num; index++) {
      starArray.push(<AiFillStar key={index} className="reviews-star" />);
    }
    return starArray;
  }
}

export default Card;
