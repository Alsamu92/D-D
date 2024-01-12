import { useState } from "react";
import { acciones, secuelas } from "../services/acciones";
import "./CartaAccion.css";
import { BarraJugador } from "./BarraJugador/BarraJugador";
export const CartaAccion = ({ miPj }) => {
  const [consecuencia, setConsecuencia] = useState();
  const [accion, setAccion] = useState(0);
  const [indice, setIndice] = useState();
  console.log(accion);
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
      {miPj.salud > 0 ? (
        !consecuencia ? (
          <div className="cartaAccion">
            <p>{acciones[accion].accion}</p>
            <p>{acciones[accion].accionMasInfo}</p>
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
              <p>{consecuencia}</p>{" "}
              <img
                src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705020121/u9aeomvdxatmm8llt22o.jpg"
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
      ) : (
        <div>Has perdido</div>
      )}
      <BarraJugador miPj={miPj} />
    </>
  );
};
