import React from 'react'
import"./CardTratamientos.css"
export const CardTratamientos = ({image,titulo,parrafo}) => {
  return (
    <article className='cartaTratamientos'>
        <img className='imagenTratamientos' src={image}/>
        <h2 className='tituloTratamientos'>{titulo}</h2>
        <p className='parrafoTratamientos'>{parrafo}</p>
      <a className='aTratamientos'>Más Información</a>
    </article>
  )
}
