import React, { useState } from "react";
import "./HeaderSmall.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const HeaderSmall = () => {
  const { logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useAuth();
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="headerSmall">
      <div className="smallUno">
        <button className="hamburguesa" onClick={handleMenu}>
          <span className="material-symbols-outlined">menu</span>
        </button>

        <div className="logoTit">
          <img
            className="logo"
            src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705694107/wtnl9l3iplvjrz3f6jmy.png"
            alt="Logo página"
          />
          <h2 className="tituloHeader">Aventuras Dracómicas</h2>
        </div>
        {user != null ? (
          <img
            onClick={logout}
            className="logout"
            src="https://res.cloudinary.com/djfkchzyq/image/upload/v1703151861/xd8jzyzk0uc1bakfrun1.png"
            alt="Cerrar sesión"
          />
        ) : (
          <div></div>
        )}
      </div>
      {user == null ? (
        <div className="smallDos">
          <section>
            <Link to="/login">Inicia sesión</Link>
          </section>
        </div>
      ) : (
        <div className="smallDos">
          <section>
            <a>Hola, {user.username}</a>
          </section>
        </div>
      )}
      {showMenu && (
        <div className="zonaMobile mostrar">
          <nav className="navMobile">
            <figure className="figureNav">
              <span className="material-symbols-outlined">home</span>
              <NavLink to={"/"} onClick={() => setShowMenu(false)}>
                Inicio
              </NavLink>
            </figure>
            <figure className="figureNav">
            <span className="material-symbols-outlined">
swords
</span>
              <NavLink to={"/Aldea"} onClick={() => setShowMenu(false)}>
                Torneo del dragón
              </NavLink>
            </figure>
            {!user ? 
              <>
                <figure className="figureNav">
                  <span className="material-symbols-outlined">badge</span>
                  <NavLink to={"/login"} onClick={() => setShowMenu(false)}>
                    Inicia sesión
                  </NavLink>
                </figure>
              </>: <figure className="figureNav">
                  <span className="material-symbols-outlined">badge</span>
                  <NavLink to={"/Perfil"} onClick={() => setShowMenu(false)}>
                    Mi Perfil
                  </NavLink>
                </figure>
            }

            <figure className="figureNav">
              <span className="material-symbols-outlined">edit_note</span>
              <NavLink to={"/records"} onClick={() => setShowMenu(false)}>
                Récords
              </NavLink>
            </figure>

            <figure className="figureNav">
              <span className="material-symbols-outlined">diamond</span>
              <NavLink to={""} onClick={() => setShowMenu(false)}>
                Sobre la página
              </NavLink>
            </figure>
          </nav>
        </div>
      )}
    </header>
  );
};
