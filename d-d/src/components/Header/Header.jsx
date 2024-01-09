import React, { useEffect, useState } from 'react'
import"./Header.css"
import { HeaderSmall } from './HeaderSmall';
import { NavLink } from 'react-router-dom';
import { useSize } from '../../context/sizeContext';
export const Header = () => {
  const{tamanoPantalla}=useSize()
  
  return (<>
<header>
    <h1>AVENTURAS DRACÓMICAS</h1>
</header>
    
    </>
  )
}
