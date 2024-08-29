import Input from "../../components/Input";
import "./Colors.css";
function Colors({ handleRadioChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <Input
        handleRadioChange={handleRadioChange}
        value="allColor"
        title="All"
        name="color"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="red"
        title="Red"
        name="color"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="black"
        title="Black"
        name="color"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="blue"
        title="Blue"
        name="color"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="green"
        title="Green"
        name="color"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="white"
        title="White"
        name="color"
      />
    </div>
  );
}

export default Colors;
