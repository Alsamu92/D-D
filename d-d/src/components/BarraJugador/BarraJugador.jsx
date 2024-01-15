import React, { useEffect } from "react";
import "./BarraJugador.css";
import { useAuth } from "../../context/authContext";

export const BarraJugador = ({miPj,acciones,accion }) => {
  const{allUser}=useAuth()
  useEffect(() => {
console.log(allUser)
    console.log("miPj has changed:", miPj);
  }, [miPj]);

  return (
    <>
      <div className="divRol">
        <div className="perfil">
          <img src={miPj.img} alt={miPj.name} />
          <h3>{allUser.data.username}</h3>
        </div>
        <div className="medioDiv">
          <p><strong>Salud</strong>:{miPj.salud} PS</p>
          <p><strong>Oro</strong>:{miPj.oro} monedas</p>
          <p><strong>Superadas:</strong>{accion}/{acciones.length}</p>
        </div>
        <div className="stats">
          <h2>  Estadísticas</h2>
          <p><strong>Combate</strong>:{miPj.combate}</p>  
          <p><strong>Sabiduría</strong>:{miPj.sabiduria}</p> 
          <p><strong>Sigilo</strong>:{miPj.sigilo}</p>
          <p><strong>Ayuda</strong>:{miPj.ayuda}</p> 
          <p><strong>Justicia</strong>:{miPj.justicia}</p> 
        </div>
      </div>
    </>
  );
}
