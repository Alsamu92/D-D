import React, { useEffect } from "react";
import "./BarraJugador.css";
import { useAuth } from "../../context/authContext";

export const BarraJugador = ({ miPj, dado, consec, brm }) => {
  const { allUser } = useAuth();
  useEffect(() => {}, [miPj]);
  const habilidadComparar =brm?brm[1][0]:"Aun no hay"

  
  return (
    <>
    
      <div className="cantidades">
        <p>
          <strong >Aguante</strong>:{miPj.salud}
        </p>
        <p>
          <strong>Experiencia</strong>:{miPj.oro}
        </p>
      </div>
      <div className="divRol">
        <div className="perfil">
          <img src={miPj.img} alt={miPj.name} />
          <h3>{allUser.data.username}</h3>
        </div>
        <div className="medioDiv">
          {consec && (
            <div className="resultadosTirada">
              <div className="dice rolling">{dado} </div>
              <div className="textoTirada">
                <p>+ {brm[1]}</p>
                <p style={{
    backgroundColor:
      dado === 1
        ? "black"
        : brm[0] < 5
        ? "red"
        : brm[0] > 7
        ? "green"
        : "orange",
  }} className="numeroFinal waitDice">= {dado==1?"Pifia":brm[0]}</p>
             
              </div>{" "}
            </div>
          )}
        </div>
        <div className="stats">
          <h2> Estadísticas</h2>
          <p className={habilidadComparar=="fuerza"&&consec?"habSelect":"hab"}>
            <strong >Fuerza</strong>:{miPj.fuerza}
          </p>
          <p className={habilidadComparar=="sabiduria"&&consec?"habSelect":"hab"}>
            <strong>Sabiduría</strong>:{miPj.sabiduria}
          </p>
          <p className={habilidadComparar=="sigilo"&&consec?"habSelect":"hab"}>
            <strong>Sigilo</strong>:{miPj.sigilo}
          </p>
          <p className={habilidadComparar=="carisma"&&consec?"habSelect":"hab"}>
            <strong>Carisma</strong>:{miPj.carisma}
          </p>
          <p className={habilidadComparar=="destreza"&&consec?"habSelect":"hab"}>
            <strong>Destreza</strong>:{miPj.destreza}
          </p>
        </div>
      </div>
    </>
  );
};
