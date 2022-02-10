import Header from "../header/Header";
import './Menu.css'
const Menu = (props) => {
  return (
    <div className="menu">
      <Header></Header>
      <div className="sub-menu">
        <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Menu;
