import React, { useEffect, useState } from "react";
import "./Aldea.css";
import { usePaginacion } from "../../../hooks/usePaginacion";
import { CardPersonajeRev } from "../../../components/Footer/CardPersonajeRev/CardPersonajeRev";
import { persSeleccionables } from "../../../services/services";
import { CardPersonaje } from "../../../components/CardPersonaje/CardPersonaje";
import { useConfirmacionPj } from "../../../hooks/useConfirmacionPj";
import { BarraJugador } from "../../../components/BarraJugador/BarraJugador";
import { CartaAccion } from './../../../components/CartaAccion';

export const Aldea = () => {
  const [selectedPersonaje, setSelectedPersonaje] = useState(null);
  const [pjConfirmed, setPjConfirmed] = useState(null);
  const [numAccion, setNumAccion] = useState(1);
  const [start, setStart] = useState(null);
  const { setGaleriaItems, dataPag, ComponentPaginacion } = usePaginacion();
  const handlePersonajeClick = (person) => {
    setSelectedPersonaje(person);
  };
  const handleConfirmedClick = (person) => {
    useConfirmacionPj(setPjConfirmed, person);
  };
  const handleStart = () => {
    setStart(true);
  };
  const handleNumAc = (prop) => {
    setNumAccion(prop)
  };
console.log(numAccion)
  useEffect(() => setGaleriaItems(persSeleccionables), []);

  return (
    <>
      {pjConfirmed ? (
        !start ? (
          <div className="divJuego">
            <div className="divInstrucciones">
              <h1>Instrucciones</h1>
              <p>
                Sobrevive todo el tiempo que puedas escogiendo la opción que
                creas más conveniente. La partida acaba si los PS de tu
                personaje llegan a 0
              </p>
              <button onClick={() => handleStart()}>Empezar ya!</button>
            </div>
            <BarraJugador
              name={selectedPersonaje.name}
              oro={selectedPersonaje.oro}
              salud={selectedPersonaje.salud}
              img={selectedPersonaje.img}
              fuerza={selectedPersonaje.fuerza}
              inteligencia={selectedPersonaje.inteligencia}
              sigilo={selectedPersonaje.sigilo}
              carisma={selectedPersonaje.carisma}
            />
          </div>
        ) : (
          <>
           <div className="divJuego"> 
           <div className="divPreguntas">
           <CartaAccion />
           </div>
           <BarraJugador
          name={selectedPersonaje.name}
          oro={selectedPersonaje.oro}
          salud={selectedPersonaje.salud}
          img={selectedPersonaje.img}
          fuerza={selectedPersonaje.fuerza}
          inteligencia={selectedPersonaje.inteligencia}
          sigilo={selectedPersonaje.sigilo}
          carisma={selectedPersonaje.carisma}
        /></div>
         
          </>
         
        )
      ) : (
        <div className="divJuego">
          <div>
            <h2>¡Bienvenido!</h2>
            <h3>Selecciona tu personaje</h3>
          </div>
          {!selectedPersonaje ? (
            <div className="mainSeleccion">
              {dataPag.map((person) => (
                <CardPersonaje
                  key={person.name}
                  selected={() => handlePersonajeClick(person)}
                  name={person.name}
                  surname={person.surname}
                  img={person.img}
                />
              ))}
              <ComponentPaginacion />
            </div>
          ) : (
            <CardPersonajeRev
              confirmed={() => handleConfirmedClick(selectedPersonaje)}
              name={selectedPersonaje.name}
              surname={selectedPersonaje.surname}
              fuerza={selectedPersonaje.fuerza}
              inteligencia={selectedPersonaje.inteligencia}
              sigilo={selectedPersonaje.sigilo}
              carisma={selectedPersonaje.carisma}
              descripcion={selectedPersonaje.descripcion}
              volver={() => setSelectedPersonaje(null)}
            />
          )}
        </div>
      )}
    </>
  );
};
