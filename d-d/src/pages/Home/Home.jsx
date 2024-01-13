import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSize } from "../../context/sizeContext";
export const Home = () => {
  const{tamanoPantalla}=useSize()

  return (
   <div className="contenedorJuego">
    <h2>Selecciona tu aventura</h2>
    <Link to="/Aldea">
    <h3 className="cajonAventura">Desafío de eleccion</h3>
    </Link>
    
    <h3 className="cajonAventura"><span className="material-symbols-outlined">
lock
</span></h3>
    <h3 className="cajonAventura"><span className="material-symbols-outlined">
lock
</span></h3>
    <h3 className="cajonAventura"><span className="material-symbols-outlined">
lock
</span></h3>
    <h3 className="cajonAventura"><span className="material-symbols-outlined">
lock
</span></h3>
   </div>
  );
};
