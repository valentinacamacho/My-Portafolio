import React from "react";
import perfil from "../assets/Images/perfil.png";
import Redes from "../Components/Redes";


function Principal() {
  return (
    <div className="container">
      <main>
        <section>
          <div className="bloque-container">
            <div className="bloque">
              <div className="perfil">
                <img src={perfil}/>
              </div>
              <div className="texto_page">
                <p>Jenifer Camacho</p>
                <p>Developer full stack</p>
              </div>
        
                <Redes/>
           
              <div className="boton">
               <a href="./pdf" target="_blank"><button>Dowland CV</button></a>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Principal;
