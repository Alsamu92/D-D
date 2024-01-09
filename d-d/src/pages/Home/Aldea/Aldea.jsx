import React, { useEffect, useState } from "react";
import "./Aldea.css";
import { usePaginacion } from "../../../hooks/usePaginacion";
import { CardPersonajeRev } from "../../../components/Footer/CardPersonajeRev/CardPersonajeRev";
import { persSeleccionables } from "../../../services/services";
import { CardPersonaje } from "../../../components/CardPersonaje/CardPersonaje";
import { useConfirmacionPj } from "../../../hooks/useConfirmacionPj";

export const Aldea = () => {
  
  const [selectedPersonaje, setSelectedPersonaje] = useState(null);
  const [pjConfirmed, setPjConfirmed] = useState(null);
  const{setGaleriaItems,dataPag,ComponentPaginacion}=usePaginacion()
  const handlePersonajeClick = (person) => {

    setSelectedPersonaje(person);
  };
  const handleConfirmedClick = (person) => {

   useConfirmacionPj(setPjConfirmed,person)
  };
  

  useEffect(() =>  setGaleriaItems(persSeleccionables), []);

console.log(pjConfirmed)
  return (
    <>
{pjConfirmed?<div className="divJuego divRol">
  <div className="perfil">
    <img src="" alt="" />
    <h3>Nombre</h3>
  </div>
  <div>
    <div>Inventario</div>
    <div>Salud</div>
    <div>Oro</div>
  </div>
  <div>Estadísticas</div>
</div>: <div className="divJuego">
        <div>
          <h2>¡Bienvenido!</h2>
          <h3>Selecciona tu personaje</h3>
        </div>
        { !selectedPersonaje?
        <div className="mainSeleccion">
          {dataPag.map((person) => (
            <CardPersonaje key={person.name} selected={()=>handlePersonajeClick(person)} name={person.name}surname={person.surname}img={person.img}/>
          ))}
          <ComponentPaginacion />
        </div>:<CardPersonajeRev confirmed={()=>handleConfirmedClick(selectedPersonaje)} name={selectedPersonaje.name} surname={selectedPersonaje.surname} fuerza={selectedPersonaje.fuerza}inteligencia={selectedPersonaje.inteligencia}sigilo={selectedPersonaje.sigilo}carisma={selectedPersonaje.carisma} descripcion={selectedPersonaje.descripcion} volver={()=>setSelectedPersonaje(null)}/>
          
        }
       
      </div>}
     
      
    </>
  );
};
