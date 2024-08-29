import Input from "../../components/Input";
import "./Category.css";

function Category({ handleRadioChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <Input
        handleRadioChange={handleRadioChange}
        value="allCategory"
        title="All"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="sneakers"
        title="Sneakers"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="flats"
        title="Flats"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="heels"
        title="Heels"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="sandals"
        title="Sandals"
        name="category"
      />
    </div>
  );
}

export default Category;
