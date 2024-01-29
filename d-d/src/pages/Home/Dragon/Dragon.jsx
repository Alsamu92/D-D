import React, { useState } from "react";
import "./Dragon.css";

export const Dragon = () => {
  const [instDragon, setInstDragon] = useState(false);
  return (
    <div className="dragon">
      {!instDragon ? (
        <div className="cartaDragon">
          <button onClick={()=>setInstDragon(true)} className="empezarDragon">Adelante!</button>
        </div>
      ) : (
        <div className="cartaDragon">
         
            <div className="rondaDragon"></div>
            <div className="cuadroDragon">
                Próximamente...
            </div>
            <div className="infoMedioDragon"></div>
            <div className="cuadroPersonajes"></div>
         
        </div>
      )}
    </div>
  );
};
