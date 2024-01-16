import React, { useEffect, useState } from 'react'
import"./Header.css"
import { HeaderSmall } from './HeaderSmall';
import { Link, NavLink } from 'react-router-dom';
import { useSize } from '../../context/sizeContext';
export const Header = () => {
  const{tamanoPantalla}=useSize()
  
  return (<>
  {tamanoPantalla > 768 ?<header className='headerDesktop'>
    <img src="" alt="Logo página" />
        <nav className="navUno">
            <ul className='about'>
              <Link to="/login">
              <li>Inicia sesión</li>
              </Link>
          
                <li>Récords</li>
                <li>Desafío de elección</li>
                <li>Sobre la página</li>
                
            </ul>
           
        </nav>
      
    </header>:<HeaderSmall/>
  }
    
    </>
  )
}
