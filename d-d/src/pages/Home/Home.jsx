import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { getUserByName } from "../../services/user.service";
export const Home = () => {
  const [adquiridas, setAdquiridas] = useState([]);
  const { user } = useAuth();
  const sacarUser = async () => {
    if (user) {
      const usuarioActual = await getUserByName(user.username);
      setAdquiridas(usuarioActual?.data?.medallas);
    }
  };
  useEffect(() => {
    sacarUser();
  }, []);

  const medallas =
    adquiridas.includes("Bruster") &&
    adquiridas.includes("Lirena") &&
    adquiridas.includes("Krista") &&
    adquiridas.includes("Furtur") &&
    adquiridas.includes("Darion");

  return (
    <div className="contenedorJuego">
      <h2>Selecciona tu aventura</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam impedit exercitationem, perferendis neque in magni sunt excepturi nobis assumenda praesentium, illo repellendus possimus maiores pariatur necessitatibus nisi odio iure.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam impedit exercitationem, perferendis neque in magni sunt excepturi nobis assumenda praesentium, illo repellendus possimus maiores pariatur necessitatibus nisi odio iure.
      </p>
      <Link to="/Aldea">
        <h3 className="cajonAventura">Desafío de eleccion</h3>
      </Link>

      {user == null ? (
        <h3 className="cajonAventura">
          <span className="material-symbols-outlined">lock</span>
        </h3>
      ) : medallas ? (
        <div className="cajonAventura">
          <h3>Has completado el desafío</h3>
          <div className="contenedorMedallas">
          <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705420698/tytl5prduts1mcrmhz5w.png"
              className={` ${
                adquiridas.includes("Lirena") ? "medalla lirena" : "medApagada"
              }`}
            ></img>
            <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705444187/p3lzvvpmzevmzfw4yl7u.png"
              className={` ${
                adquiridas.includes("Bruster")
                  ? "medalla bruster"
                  : "medApagada"
              }`}
            ></img>
            <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705444187/ymenfwpypqa0bo3uqmhx.png"
              className={` ${
                adquiridas.includes("Krista") ? "medalla krista" : "medApagada"
              }`}
            ></img>
            <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705444187/ex3pvdt6amspm2bxqpt9.png"
              className={` ${
                adquiridas.includes("Furtur") ? "medalla furtur" : "medApagada"
              }`}
            ></img>
            <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705444187/yyme20utgvc9g4zfxdct.png"
              className={` ${
                adquiridas.includes("Darion") ? "medalla darion" : "medApagada"
              }`}
            ></img>
          </div>
        </div>
      ) : (
        <div className="cajonAventura">
          <h3>Gana con todos para completar</h3>
          <div className="contenedorMedallas">
            <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705420698/tytl5prduts1mcrmhz5w.png"
              className={` ${
                adquiridas.includes("Lirena") ? "medalla lirena" : "medApagada"
              }`}
            ></img>
            <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705444187/p3lzvvpmzevmzfw4yl7u.png"
              className={` ${
                adquiridas.includes("Bruster")
                  ? "medalla bruster"
                  : "medApagada"
              }`}
            ></img>
            <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705444187/ymenfwpypqa0bo3uqmhx.png"
              className={` ${
                adquiridas.includes("Krista") ? "medalla krista" : "medApagada"
              }`}
            ></img>
            <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705444187/ex3pvdt6amspm2bxqpt9.png"
              className={` ${
                adquiridas.includes("Furtur") ? "medalla furtur" : "medApagada"
              }`}
            ></img>
            <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705444187/yyme20utgvc9g4zfxdct.png"
              className={` ${
                adquiridas.includes("Darion") ? "medalla darion" : "medApagada"
              }`}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};
