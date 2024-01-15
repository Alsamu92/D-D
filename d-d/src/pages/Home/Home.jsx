import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
export const Home = () => {
    const completados = ["Bruster", "Lirena", "Krista", "Furtur", "Darion"];
    const desbloqueado = completados.includes("Bruster") &&
                         completados.includes("Lirena") &&
                         completados.includes("Krista") &&
                         completados.includes("Furtur") &&
                         completados.includes("Darion");

  return (
   <div className="contenedorJuego">
    <h2>Selecciona tu aventura</h2>
    <Link to="/Aldea">
    <h3 className="cajonAventura">Desafío de eleccion</h3>
    </Link>
    
    {!desbloqueado?<h3 className="cajonAventura"><span className="material-symbols-outlined">
lock
</span></h3>:<h3 className="cajonAventura">Puedes pasar</h3>}
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
