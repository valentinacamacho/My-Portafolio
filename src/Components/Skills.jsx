import React from "react";
import "../StylesSheets/Styles.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiAdobeillustrator } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";



function Skills() {
  return (
    <div className="Skills-contenedor">
    <div className="Skills">
      <div className="circulo-skill">
        <AiFillHtml5 className="icon-skill" />
        <div >
          <strong className="letra-skill">HTML</strong>
        </div>
      </div>

      <div className="circulo-skill">
        <IoLogoCss3 className="icon-skill" />
        <div className="letra-skill">
          <strong>CSS</strong>
        </div>
      </div>

      <div className="circulo-skill">
        <IoLogoJavascript className="icon-skill" />
        <div className="letra-skill">
          <strong>JavaScript</strong>
        </div>
      </div>

      <div className="circulo-skill">
        <FaReact className="icon-skill" />
        <div className="letra-skill">
          <strong>React</strong>
        </div>
      </div>

      <div className="circulo-skill">
        <FiFigma className="icon-skill" />
        <div className="letra-skill">
          <strong>Figma</strong>
        </div>
      </div>

      <div className="circulo-skill">
        <SiAdobeillustrator className="icon-skill" />
        <div className="letra-skill">
          <strong>Adobe Illustrator</strong>
        </div>
      </div>

      <div className="circulo-skill">
        <DiMysql className="icon-skill" />
        <div className="letra-skill">
          <strong>MySQL</strong>
        </div>
      </div>

      <div className="circulo-skill">
        <DiMsqlServer className="icon-skill" />
        <div className="letra-skill">
          <strong>SQL Server</strong>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Skills;