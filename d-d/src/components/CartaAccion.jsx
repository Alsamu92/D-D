import { useState } from "react";
import { acciones, secuelas } from "../services/acciones";
import "./CartaAccion.css";
import { BarraJugador } from "./BarraJugador/BarraJugador";
export const CartaAccion = ({ miPj }) => {
  const [consecuencia, setConsecuencia] = useState();
  const [accion, setAccion] = useState(0);
  const [indice, setIndice] = useState();
console.log(miPj)
  const handleAccion = (num) => {
    setAccion(num);
  };
  const actualizarRecursos=(oro,salud)=>{
miPj.oro+=(oro)

miPj.salud+=(salud)
console.log(miPj.oro)
console.log(miPj.salud)
  }
if(miPj.oro<0) miPj.oro=0;
  return (
    <>
  
      {miPj.salud>0?
      !consecuencia ? (
        <div className="cartaAccion">
          <p>{acciones[accion].accion}</p>
          <p>{acciones[accion].accionMasInfo}</p>
          {acciones[accion].opcion.map((op, index) => (
            <button key={op.accion}
              onClick={() => {
                setConsecuencia(secuelas[accion].consecuencias[index][miPj.name]);
                setIndice(index);
              }}
            >
              {op}
            </button>
          ))}
        </div>
      ) : (
        <>
          <div className="cartaAccion">{consecuencia}</div>
          
          <button onClick={() => {
          handleAccion(secuelas[accion].rutas[indice][miPj.name])

           actualizarRecursos(((secuelas[accion].oro?(secuelas[accion].oro[indice][miPj.name]):0)),(secuelas[accion].salud?(secuelas[accion].salud[indice][miPj.name]):0))
  setConsecuencia(null);
  
}}>
Siguiente
</button>
        </>
      ):<div>Has perdido</div>}
        <BarraJugador miPj={miPj}/>
    </>
  );
};
