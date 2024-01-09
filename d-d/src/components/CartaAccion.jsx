import { useState } from "react";
import { acciones, consecuencias } from "../services/acciones";
import "./CartaAccion.css";
export const CartaAccion = ({ opcion, siguiente }) => {
  const [consecuencia, setConsecuencia] = useState();
  const [accion, setAccion] = useState(0);
  const [indice, setIndice] = useState();
console.log(consecuencia)
console.log(indice)
console.log(accion)
  const handleAccion = (num) => {
    setAccion(num);
  };

  return (
    <>
      {!consecuencia ? (
        <div className="cartaAccion">
          <p>{acciones[accion].accion}</p>
          {acciones[accion].opcion.map((op, index) => (
            <button
              onClick={() => {
                setConsecuencia(consecuencias[accion].consecuencias[index]);
                setIndice(index);
              }}
            >
              {op}
            </button>
          ))}
        </div>
      ) : (
        <>
          <div>{consecuencia}</div>
          
          <button onClick={() => {
            handleAccion(consecuencias[accion].rutas[indice])
  setConsecuencia(null);
  
}}>
Siguiente
</button>
        </>
      )}
    </>
  );
};
