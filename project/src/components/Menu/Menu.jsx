import { useEffect, useState } from "react";
import "./Menu.css";

function Menu(props) {
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
        <a href="#"> Login</a>
        <a href="#"> Account</a>
        <a href="#"> Your spaces</a>
        <a href="#"> groups</a>
      </div>
    </div>
  );
}

export default Menu;
