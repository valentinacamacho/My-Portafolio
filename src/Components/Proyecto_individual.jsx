import React from "react";
import perfil from "../assets/Images/perfil.png";

function Proyecto_individual(props) {
  return (
    <div className="Briefcase-Individual">
      <div class="Card-Brief">
        <div class="header-Brief">
          <p>{props.nombre}</p>
        </div>
        <div className="brief-fecha">
          <p>{props.fecha}</p>
        </div>

        <hr />
        <div class="contenido-Brief">
          <img src={perfil} className="foto-image" />
          <p className="text-ind">{props.descripcion}</p>
          <br />
        </div>
        <button  class="boton-visual">Visualizar</button>
      </div>
    </div>
  );
}

export default Proyecto_individual;