import React from "react";
import "../StylesSheets/Styles.css";

function Cards() {
  return (


    <div className="Servicios-contenedor">
    <div className="servis">
      <div className="servis-title">
        <h4>Mis Servicios</h4>
      </div>
    <div className="servis-parrafo">
      <p>Como desarrolladora web, me encuentro capacita para gestionar, construir soluciones tecnologicas.</p>
    </div>
  </div>
  


      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front"></div>
          <div className="flip-card-back">
            <p>
              Como desarrolladora tomo los proyectos de forma seria donde
              analizo cada uno de los elementos para empezar a planificar y
              diseñar.
            </p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front"></div>
          <div className="flip-card-back">
            <p>
              Implemento una solucion web a un problema con buenas practicas,
              asi como un estandar a la tecnologia a utilizar e implementar.
            </p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front"></div>
          <div className="flip-card-back">
            <p>
              Los diseños son hechos al 100% responsivo, donde el usuario podra
              ingresar desde cualquier dispositivo.
            </p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front"></div>
          <div className="flip-card-back">
            <p>
              Brindo soluciones en medios digitales , ofrezco a los clientes
              proyectos personalizados exclusivamente para su negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
