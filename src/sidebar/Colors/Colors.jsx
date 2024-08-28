import Input from "../../components/Input";
import "./Colors.css";
function Colors({ handleRadioChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <Input
        handleRadioChange={handleRadioChange}
        value="All"
        title="All"
        name="color"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="Red"
        title="Red"
        name="color"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="Black"
        title="Black"
        name="color"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="Blue"
        title="Blue"
        name="color"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="Green"
        title="Green"
        name="color"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="White"
        title="White"
        name="color"
      />
    </div>
  );
}

export default Colors;
