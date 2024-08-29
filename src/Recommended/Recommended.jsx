import Button from "../components/Button";
import "./Recommended.css";

function Recommended({ handleButtonClick }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button
            title={"All Products"}
            value="all"
            handleButtonClick={handleButtonClick}
          />
          <Button
            title={"Nike"}
            value="Nike"
            handleButtonClick={handleButtonClick}
          />
          <Button
            title={"Adidas"}
            value="Adidas"
            handleButtonClick={handleButtonClick}
          />
          <Button
            title={"Puma"}
            value="Puma"
            handleButtonClick={handleButtonClick}
          />
          <Button
            title={"Vans"}
            value="Vans"
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
    </>
  );
}

export default Recommended;
