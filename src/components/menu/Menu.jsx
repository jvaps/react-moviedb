import Header from "../header/Header";

const Menu = (props) => {
  return (
    <div className="menu">
      <Header></Header>
      <div className="sub-menu">
        {props.children}
      </div>
    </div>
  );
};

export default Menu;
