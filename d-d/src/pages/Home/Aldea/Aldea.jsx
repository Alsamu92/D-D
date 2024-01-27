import React, { useEffect, useState } from "react";
import "./Aldea.css";
import { usePaginacion } from "../../../hooks/usePaginacion";
import { persSeleccionables } from "../../../services/services";
import { CardPersonaje } from "../../../components/CardPersonaje/CardPersonaje";
import { useConfirmacionPj } from "../../../hooks/useConfirmacionPj";
import { CartaAccion } from "./../../../components/CartaAccion";
import { useAuth } from "../../../context/authContext";
import { getUserByName } from "../../../services/user.service";
export const Aldea = () => {
  const [pjConfirmed, setPjConfirmed] = useState(null);
const{user}=useAuth()
  const [start, setStart] = useState(null);
  const [miPersonaje, setMiPersonaje] = useState(null);
  const { setGaleriaItems, dataPag, ComponentPaginacion } = usePaginacion();
  const traerMiExp = async () => {
    const miExp = await getUserByName(user.username);
    setMiPersonaje(miExp?.data);
 
   
  };
  useEffect(()=>{setPjConfirmed(null)},[])
  const handleConfirmedClick = (person) => {
    useConfirmacionPj(setPjConfirmed, person);
  };

  const handleStart = () => {
    pjConfirmed.oro = 0;
    pjConfirmed.salud =miPersonaje[enMinus]>49?120:100 ;
    setStart(true);
  };
  useEffect(() => setGaleriaItems(persSeleccionables), []);
  useEffect(() =>{ traerMiExp()}, []);

 const enMinus=(pjConfirmed?.name.toLowerCase());
  
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
                <li>Si el aguante llega a 0 no podrás seguir.</li>
                <li>
                  {" "}
                  Los puntos de tu personaje en la acción más el <strong>DADO</strong> será el resultado
                </li>
                <li>Menos de 5 restará aguante</li>
                <li>Más de 7 dará experiencia</li>
                <li>
                 5, 6 y 7 quitan salud y dan experiencia basado en tu dado
                </li>
                <li>
                  A veces, tendrás que elegir
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
                <CartaAccion miPj={pjConfirmed} nivelDos={miPersonaje[enMinus]>99  }nivelTres={miPersonaje[enMinus]>149  } />
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
