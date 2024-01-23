import React, { useEffect } from "react";
import "./BarraJugador.css";
import { useAuth } from "../../context/authContext";

export const BarraJugador = ({miPj,dado,consec }) => {
  const{allUser}=useAuth()
  useEffect(() => {


  }, [miPj]);

  return (
    <>
      <div className="divRol">
        <div className="perfil">
          <img src={miPj.img} alt={miPj.name} />
          <h3>{allUser.data.username}</h3>
        </div>
        <div className="medioDiv">
          <p><strong>Salud</strong>:{miPj.salud}</p>
          <p><strong>Oro</strong>:{miPj.oro}</p>
          {consec&& <div className="dice rolling">{dado}</div>}
         
        
        </div>
        <div className="stats">
          <h2>  Estadísticas</h2>
          <p><strong>Fuerza</strong>:{miPj.fuerza}</p>  
          <p><strong>Sabiduría</strong>:{miPj.sabiduria}</p> 
          <p><strong>Sigilo</strong>:{miPj.sigilo}</p>
          <p><strong>Carisma</strong>:{miPj.carisma}</p> 
          <p><strong>Destreza</strong>:{miPj.destreza}</p> 
        </div>
      </div>
    </>
  );
}
