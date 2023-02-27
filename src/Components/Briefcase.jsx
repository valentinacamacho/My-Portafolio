import React, { useState } from "react";
import Proyecto_individual from "../Components/Proyecto_individual";
import "../StylesSheets/Styles.css";

const Briefcase = () => {
  const [proyects, setProyects] = useState([
    {
      id: 1,
      nombre: "Nico's Cupcakes",
      fecha: "Diciembre-2022 & 2023",
      descripcion:
        "Nico’s Cupcakes ofrece Tortas,Cupcakes y paletas de pastel, personalizados de todo tipo también se representan en eventos especiales como Halloween, navidad y festividades, Nico’s Cupcakes están enfocados a dar un momento lleno grato de sabores.",
    },
    {
      id: 2,
      nombre: "Perfiles",
      fecha: "Diciembre-2022",
      descripcion:
        "Los perfiles es un proyecto de aprendizaje en donde pude tener la oportunidad de aprender el framework de React",
    },
    {
      id: 3,
      nombre: "Sabucha",
      fecha: "Octubre-2022",
      descripcion:
        "En en el desarrollo de Sabucha tuve la oportunidad de  hacer una pagina saludable que muestra beneficios de sus productos de te.",
    },
    {
      id: 4,
      nombre: "Turismo en Colombia",
      fecha: "Octubre-2022",
      descripcion:"El proyecto de Turismo en Colombia muestra lo que es nuestra tricolor colombiana que es nuestra cultura,arte,comida tipica y lugares turisticos."
    },
    {
      id: 5,
      nombre: "Los Padrinos Magicos",
      fecha: "Septiembre-2021",
      descripcion:
        "En este proyecto tuve la oportunidad hacer un objeto JSON con la informacion de los personajes de los padrinos magicos.",
    },
  ]);

  return (
    <div className="row">
      {proyects.map((proyect) => {
        return (
          <Proyecto_individual
            key={proyect.id}
            nombre={proyect.nombre}
            fecha={proyect.fecha}
            descripcion={proyect.descripcion}
          />
        );
      })}
    </div>
  );
};

export default Briefcase;
