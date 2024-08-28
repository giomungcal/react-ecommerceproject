import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1 className="sidebar-title">Sofer</h1>
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
}

export default Sidebar;
