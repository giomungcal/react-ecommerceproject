import Input from "../../components/Input";
import "./Price.css";

function Price({ handleRadioChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <Input
          handleRadioChange={handleRadioChange}
          value="all"
          title="All"
          name="price"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value={50}
          title="$0 - $50"
          name="price"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value={100}
          title="$51 - $100"
          name="price"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value={150}
          title="$100 - $150"
          name="price"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value={200}
          title="Over $150"
          name="price"
        />
      </div>
    </div>
  );
}

export default Price;
