import { useEffect, useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = (props) => {
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
      <div className="menu-items-wrapper">
        <Link to="/"> Home</Link>
        <Link to="/Login"> Login</Link>
        <Link to="/Register"> Register</Link>
        <Link to="/Account"> Account</Link>
        <Link to="/Spaces"> Your spaces</Link>
        <Link to="/Groups"> Groups</Link>
      </div>
    </div>
  );
};

export default Menu;
