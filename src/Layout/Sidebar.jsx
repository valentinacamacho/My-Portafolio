import React from "react";
import "../StylesSheets/Styles.css";
import "./navbar.css";
import { Link } from "react-router-dom";

function Sidebar() {

  return (

        <header className="header">
          <div className="menu-vertical">
            <ul>
              <li>
                <Link to="/">inicio</Link>
              </li>
              <li>
                <Link to="/Cards">sobre mi</Link>
              </li>
              <li>
                <Link to="/Servicios">mis servicios</Link>
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

  );
}

export default Sidebar;
