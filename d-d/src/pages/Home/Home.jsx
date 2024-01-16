import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { getUserByName } from "../../services/user.service";
export const Home = () => {
  
   const[adquiridas,setAdquiridas]=useState([])
  const { user } = useAuth();
  const sacarUser=async()=>{
     const usuarioActual=await getUserByName(user.username) 
   setAdquiridas(usuarioActual.data?.medallas)
  }
  useEffect(()=>{
    sacarUser()
  
  },[])
 



  const medallas =
    adquiridas.includes("Bruster") &&
    adquiridas.includes("Lirena") &&
    adquiridas.includes("Krista") &&
    adquiridas.includes("Furtur") &&
    adquiridas.includes("Darion");

  return (
    <div className="contenedorJuego">
      <h2>Selecciona tu aventura</h2>
      <Link to="/Aldea">
        <h3 className="cajonAventura">Desafío de eleccion</h3>
      </Link>

      {user == null ? (
        <h3 className="cajonAventura">
          <span className="material-symbols-outlined">lock</span>
        </h3>
      ) : medallas ? (
        <div className="cajonAventura">
            <h3>Has desbloqueado este juego</h3>
            <div className="contenedorMedallas">
            <div
            className={` ${
              adquiridas.includes("Lirena") ? "medalla lirena" : "medApagada"
            }`}
          >
            
          </div>
          <div className={`${"bruster"} ${adquiridas.includes("Bruster") ? 'medalla' : 'medApagada'}`}></div>
          <div className={`${"krista"} ${adquiridas.includes("Krista") ? 'medalla' : 'medApagada'}`}></div>
          <div className={`${"furtur"} ${adquiridas.includes("Furtur") ? 'medalla' : 'medApagada'}`}></div>
          <div className={`${"darion"} ${adquiridas.includes("Darion") ? 'medalla' : 'medApagada'}`}></div>
            </div>
         
        </div>
      ) : (
        <div className="cajonAventura">
            <h3>Gana con todos para desbloquear</h3>
            <div className="contenedorMedallas">
            <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705420698/tytl5prduts1mcrmhz5w.png"
            className={` ${
              adquiridas.includes("Lirena") ? "medalla lirena" : "medApagada"
            }`}
          >
            
          </img>
          <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705420698/tytl5prduts1mcrmhz5w.png" className={` ${adquiridas.includes("Bruster") ? 'medalla bruster' : 'medApagada'}`}></img>
          <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705420698/tytl5prduts1mcrmhz5w.png" className={` ${adquiridas.includes("Krista") ? 'medalla krista' : 'medApagada'}`}></img>
          <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705420698/tytl5prduts1mcrmhz5w.png" className={` ${adquiridas.includes("Furtur") ? 'medalla furtur' : 'medApagada'}`}></img>
          <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705420698/tytl5prduts1mcrmhz5w.png" className={` ${adquiridas.includes("Darion") ? 'medalla darion' : 'medApagada'}`}></img>
            </div>
         
        </div>
      )}
    </div>
  );
};
