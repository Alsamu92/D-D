import { useEffect, useState } from "react";
import { acciones, secuelas } from "../services/acciones";
import "./CartaAccion.css";
import { BarraJugador } from "./BarraJugador/BarraJugador";
import { Link } from 'react-router-dom';
import { ponerMedalla } from "../services/user.service";
export const CartaAccion = ({ miPj }) => {
  const [consecuencia, setConsecuencia] = useState();
  const [recogida, setRecogida] = useState(false);
  const [accion, setAccion] = useState(0);
  const [indice, setIndice] = useState();
const handleMedalla=async()=>{
  const medalla=await ponerMedalla(miPj.name)
  setRecogida(true);
}
useEffect(()=>{
  setRecogida(false);
},[])
  const handleAccion = (num) => {
    num++;
    setAccion(num);
  };
  const actualizarRecursos = (oro, salud) => {
    miPj.oro += oro;
    miPj.salud += salud;
  };
  if (miPj.oro < 0) miPj.oro = 0;
  return (
    <>
    {accion >= acciones.length ? (
      <>
      <div className="cartaConsecuencia">
    
        <p>Has ganado!</p>
        <p>{miPj.name} ha conseguido salir con {miPj.oro} monedas de oro.</p>
        <p>Recoge la medalla de {miPj.name}</p>
        <button
        onClick={handleMedalla}
        disabled={recogida} 
      >
        {recogida ? 'Recogida!' : 'Recoger'}
      </button>
      </div>
      <Link className="botonConsecuencias"to="/">
      <button >Inicio</button>
    </Link>
    </>
    ) : 
      miPj.salud > 0 ? (
        !consecuencia ? (
          <div className="cartaAccion">
            <p>{acciones[accion].accion}</p>

            {acciones[accion].opcion.map((op, index) => (
              <button
                key={op.accion}
                onClick={() => {
                  setConsecuencia(
                    secuelas[accion].consecuencias[index][miPj.name]
                  );
                  setIndice(index);
                }}
              >
                {op}
              </button>
            ))}
          </div>
        ) : (
          <>
            <div className="cartaConsecuencia">
              <p>{consecuencia}</p>
              <img
                src={
                  secuelas[accion].oro[indice][miPj.name] == 0
                    ? "https://res.cloudinary.com/djfkchzyq/image/upload/v1705064810/dtxkqyzkbslt7o9zo4cq.jpg"
                    : "https://res.cloudinary.com/djfkchzyq/image/upload/v1705020121/u9aeomvdxatmm8llt22o.jpg"
                }
                alt=""
              />
            </div>
            <button
              className="botonConsecuencias"
              onClick={() => {
                handleAccion(accion);

                actualizarRecursos(
                  secuelas[accion].oro
                    ? secuelas[accion].oro[indice][miPj.name]
                    : 0,
                  secuelas[accion].salud
                    ? secuelas[accion].salud[indice][miPj.name]
                    : 0
                );
                setConsecuencia(null);
              }}
            >
              Siguiente
            </button>
          </>
        )
      ) : (<>
        <div className="cartaConsecuencia">
          <h2>DERROTA</h2>
          <p>
            {miPj.name} no ha conseguido superar todas las pruebas, las{" "}
            {miPj.oro} monedas que habías juntado yacen ahora en el suelo con{" "}
            {miPj.name} y no sirven para nada
           
          </p>
          <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705064810/dtxkqyzkbslt7o9zo4cq.jpg" alt="" />
         
        </div>
        <Link className="botonConsecuencias"to="/">
        <button >Inicio</button>
      </Link>
        </>)}
      <BarraJugador acciones={acciones} accion={accion} miPj={miPj} />
    </>
  );
};
