import React, { useState } from "react";
import "../StylesSheets/Styles.css";
import "./navbar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [burguer_class, setBurguerClass] = useState("burguer-bar uncliked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [menuCliked, setMenuCliked] = useState(false);

  const updateMenu = () => {
    if (!menuCliked) {
      setBurguerClass("burguer-bar cliked");
      setMenuClass("menu visible");
    } else {
      setBurguerClass("burguer-bar uncliked");
      setMenuClass("menu hidden");
    }
    setMenuCliked(!menuCliked);
  };
  return (
    <div>
      <nav>
        <div className="burguer-menu" onClick={updateMenu}>
          <div className={burguer_class}></div>
          <div className={burguer_class}></div>
          <div className={burguer_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <header className="header">
          <div className="menu-vertical">
            <ul>
              <li>
                <Link to="/">inicio</Link>
              </li>
              <li>
                <Link to="/Me">sobre mi</Link>
              </li>
              <li>
                <Link to="/Cards">mis servicios</Link>
              </li>
              <li>
                <Link to="/Skills">habilidades</Link>
              </li>
              <li>
                <Link to="/Briefcase">portafolio</Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Sidebar;
