import React, { useEffect, useState } from 'react'
import"./Header.css"
import { HeaderSmall } from './HeaderSmall';
import { Link, NavLink } from 'react-router-dom';
import { useSize } from '../../context/sizeContext';
import { useAuth } from '../../context/authContext';
export const Header = () => {
  const{tamanoPantalla}=useSize()
  const{user,logout}=useAuth()

  return (<>
  {tamanoPantalla > 768 ?<header className='headerDesktop'>
    <img className='logo' src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705417704/gwbmkxsebsuwjavw8o0j.png" alt="Logo página" />
        <nav className="navUno">
            <ul className='about'>
             
              <Link to="/records">
              <li>Récords</li>
              </Link>
              <Link to="/">
              <li>Inicio</li>
              </Link>
              <Link to="/">
              <li>Sobre la página</li>
              </Link>
              {!user? <Link to="/login">
              <li>Inicia sesión</li>
              </Link>:<li style={{cursor:'pointer'}} onClick={logout}>Cerrar sesión</li>}
             
          
              
                
            </ul>
           
        </nav>
      
    </header>:<HeaderSmall/>
  }
    
    </>
  )
}
