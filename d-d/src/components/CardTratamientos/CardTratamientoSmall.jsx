import React from 'react';
import "./CardTratamientoSmall.css";

export const CardTratamientoSmall = ({ image,texto }) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
    

  };

  return (
    <div className='cardTrSmall' style={divStyle}>
     <p className='textoCard'>{texto}</p>
    </div>
  );
};