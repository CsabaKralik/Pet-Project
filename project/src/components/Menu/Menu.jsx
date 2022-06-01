import { useState, useContext } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Menu = (props) => {
  const { context, setContext } = useContext(UserContext);

  const [menuClass, setMenuClass] = useState("menu");
  const [menuButtonClass, setMenuButtonClass] = useState("menu-button");
  const toggle = () => {
    if (menuClass === "menu" && menuButtonClass === "menu-button") {
      setMenuClass("menu open");
      setMenuButtonClass("menu-button opened");
    } else {
      setMenuClass("menu");
      setMenuButtonClass("menu-button");
    }
  };
  return (
    <div className={menuClass}>
      <div className={menuButtonClass} onClick={toggle}>
        <h2>MENU</h2>
      </div>
      {context ? (
        <div className="menu-items-wrapper">
          <Link to="/" onClick={toggle}>
            Home
          </Link>
          <Link to="/Logout" onClick={toggle}>
            Logout
          </Link>
          <Link to="/Account" onClick={toggle}>
            Account
          </Link>
          <Link to="/Notes" onClick={toggle}>
            Your Notes
          </Link>
        </div>
      ) : (
        <div className="menu-items-wrapper">
          <Link to="/" onClick={toggle}>
            Home
          </Link>
          <Link to="/Login" onClick={toggle}>
            Login
          </Link>
          <Link to="/Register" onClick={toggle}>
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
