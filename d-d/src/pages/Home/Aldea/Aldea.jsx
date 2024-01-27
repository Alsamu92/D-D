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
                <li>Tienes que elegir la acción que mejor le vaya a tu personaje basándote en sus estadísticas</li>
                <li>
                  {" "}
                  Los puntos de tu personaje en la acción más el <strong>DADO</strong> será el resultado de la tirada.
                </li>
               <div className="cuadroInst"><strong>1 2 3 4</strong> <strong>5 6 7</strong> <strong>8 9 10+ </strong></div>
               
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
