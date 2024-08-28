import Input from "../../components/Input";
import "./Category.css";

function Category({ handleRadioChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <Input
        handleRadioChange={handleRadioChange}
        value="All"
        title="All"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="Sneakers"
        title="Sneakers"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="Flats"
        title="Flats"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="Heels"
        title="Heels"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="Sandals"
        title="Sandals"
        name="category"
      />
    </div>
  );
}

export default Category;
