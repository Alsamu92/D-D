import React, { useState } from "react";
import "./HeaderSmall.css";
import { NavLink } from "react-router-dom";

export const HeaderSmall = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="headerSmall">
      <div className="smallUno">
        <button className="hamburguesa" onClick={handleMenu}><span className="material-symbols-outlined">
menu
</span></button>

        <img src="" alt="Logo de la clínica" />
      </div>
      <div className="smallDos">
        <section>
          <p>
            Pide <strong>AQUI</strong> tu cita
          </p>
          <span className="material-symbols-outlined">
call
</span>
        </section>
      </div>
      {showMenu && (
      <div className="zonaMobile mostrar"> 
        <nav className="navMobile">
      
            <figure className="figureNav">
              <span className="material-symbols-outlined">home</span>
              <NavLink to={"/"} onClick={()=>setShowMenu(false)} >
              Home
              </NavLink>
            </figure>
            <figure className="figureNav">
            <span className="material-symbols-outlined">
badge
</span>
              <p>Método DentiVital</p>
            </figure>
            <figure className="figureNav">
              <span className="material-symbols-outlined">edit_note</span>
              <p>Pedir Cita</p>
            </figure>
            
            <figure className="figureNav">
              <span className="material-symbols-outlined">diamond</span>
              <NavLink to={"/tratamientos"} onClick={()=>setShowMenu(false)}>
              Tratamientos
              </NavLink>
            </figure>
              
            
            <figure className="figureNav">
            <span className="material-symbols-outlined">
dentistry
</span>
              <p>Promociones</p>
            </figure>
            <figure className="figureNav">
              <span className="material-symbols-outlined">handshake</span>
              <p>Convenios</p>
            </figure>
            <figure className="figureNav">
            <span className="material-symbols-outlined">
source_environment
</span>
              <p>Clínicas</p>
            </figure>
            <figure className="figureNav">
            <span className="material-symbols-outlined">
person_search
</span>
              <p>Empleo</p>
            </figure>
            <figure className="figureNav">
              <span className="material-symbols-outlined">edit_note</span>
              <p>Sobre DentiVital</p>
            </figure>
           
          
        </nav>
        </div>
      )}
    </header>
  );
};
