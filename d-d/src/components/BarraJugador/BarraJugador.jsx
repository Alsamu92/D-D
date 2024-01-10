import React, { useEffect } from "react";
import "./BarraJugador.css";

export const BarraJugador = ({miPj }) => {
  
  useEffect(() => {

    console.log("miPj has changed:", miPj);
  }, [miPj]);

  return (
    <>
      <div className="divRol">
        <div className="perfil">
          <img src={miPj.img} alt={miPj.name} />
          <h3>{miPj.name}</h3>
        </div>
        <div>
          <p><strong>Salud</strong>:{miPj.salud} PS</p>
          <p><strong>Oro</strong>:{miPj.oro} monedas</p>
        </div>
        <div className="stats">
          <h2>  Estadísticas</h2>
          <p><strong>Fuerza</strong>:{miPj.fuerza}</p>  
          <p><strong>Inteligencia</strong>:{miPj.inteligencia}</p> 
          <p><strong>Sigilo</strong>:{miPj.sigilo}</p>
          <p><strong>Carisma</strong>:{miPj.carisma}</p> 
        </div>
      </div>
    </>
  );
}
