import React, { useEffect, useState } from "react";
import "./Aldea.css";
import { usePaginacion } from "../../../hooks/usePaginacion";
import { persSeleccionables } from "../../../services/services";
import { CardPersonaje } from "../../../components/CardPersonaje/CardPersonaje";
import { useConfirmacionPj } from "../../../hooks/useConfirmacionPj";
import { CartaAccion } from "./../../../components/CartaAccion";

export const Aldea = () => {
  const [pjConfirmed, setPjConfirmed] = useState(null);

  const [start, setStart] = useState(null);
  const { setGaleriaItems, dataPag, ComponentPaginacion } = usePaginacion();

  const handleConfirmedClick = (person) => {
    useConfirmacionPj(setPjConfirmed, person);
  };
  const handleStart = () => {
    pjConfirmed.oro = 0;
    pjConfirmed.salud = 100;
    setStart(true);
  };
  useEffect(() => setGaleriaItems(persSeleccionables), []);

  console.log();
  return (
    <>
      {pjConfirmed ? (
        !start ? (
          <div className="divJuego">
            <div className="divInstrucciones">
              <h1>Instrucciones</h1>
              <img
                src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705014940/mmvgaitxijvqv5keghnl.png"
                alt="imagen control"
              />
              <ul className="textInstrucciones">
                <li>Sobrevive todo lo que puedas.</li>
                <li>
                  {" "}
                  Los puntos de tu personaje en la acción que elijas decidirá el
                  éxito.
                </li>
                <li>Puntos bajos restará salud</li>
                <li>Puntos altos dará oro</li>
                <li>
                  El objetivo es llegar al final con la mayor cantidad de oro
                  posible
                </li>
                <li>
                  Solo hay 3 opciones en cada ronda,a veces, tendrás que elegir
                  el mal menor
                </li>
              </ul>

              <button onClick={() => handleStart()}>Empezar!</button>
            </div>
          </div>
        ) : (
          <>
            <div className="divJuego">
              <div className="divPreguntas">
                <CartaAccion miPj={pjConfirmed} />
              </div>
            </div>
          </>
        )
      ) : (
        <div className="divJuego">
          <h2 className="">Selecciona tu personaje</h2>

          <div className="mainSeleccion">
            {dataPag.map((person) => (
              <CardPersonaje
                key={person.name}
                selected={person}
                confirmed={() => handleConfirmedClick(person)}
              />
            ))}
            <ComponentPaginacion />
          </div>
        </div>
      )}
    </>
  );
};
