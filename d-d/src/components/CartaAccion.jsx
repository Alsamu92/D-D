import { useEffect, useState } from "react";
import { acciones, secuelas } from "../services/acciones";
import "./CartaAccion.css";
import { BarraJugador } from "./BarraJugador/BarraJugador";
import { Link, NavLink } from "react-router-dom";
import { getUserByName, ponerMedalla } from "../services/user.service";
import { medallasPersonajes } from "../services/services";
import { useAuth } from "../context/authContext";
import { useForm } from "react-hook-form";
import { registerRecord } from "../services/record.service";
import Swal from "sweetalert2"
export const CartaAccion = ({ miPj }) => {
  const [consecuencia, setConsecuencia] = useState();
  const [recogida, setRecogida] = useState(false);
  const [accion, setAccion] = useState(0);
  const [indice, setIndice] = useState();
  const [usuarioActual, setUsuarioActual] = useState();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okCreate, setOkCreate] = useState(false);
  const formSubmit = async (formData) => {
    const customFormData = {
      ...formData,
      oro: miPj.oro,
      salud: miPj.salud,
      personaje: miPj.name,
    };

    setSend(true);
    setRes(await registerRecord(customFormData));
    Swal.fire({
      icon: "success",
      title: 'Record guardado',
      text: 'Solo aparecerá el top 5',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleMedalla = async () => {
    const medalla = await ponerMedalla(miPj.name);
    setRecogida(true);
  };

  const { user } = useAuth();
  const sacarUser = async () => {
    const usuario = await getUserByName(user.username);
    setUsuarioActual(usuario);
  };
  useEffect(() => {
    sacarUser();
  }, []);
  const misMedallas = medallasPersonajes;
  useEffect(() => {
    setRecogida(false);
  }, []);
  const handleAccion = (num) => {
    num++;
    setAccion(num);
  };

  const actualizarRecursos = (oro, salud) => {
    miPj.oro += oro;
    miPj.salud += salud;
  };
  if (miPj.oro < 0) miPj.oro = 0;
  return (
    <>
      {accion >= acciones.length ? (
        <>
          <div className="cartaConsecuencia">
            <p>Has ganado!</p>
            <p>
              {miPj.name} ha conseguido salir con {miPj.oro} monedas de oro.
            </p>
            {(!usuarioActual?.data?.medallas.includes(miPj.name)&&usuarioActual!=null) ? (
              <>
                <p>Recoge la medalla de {miPj.name}</p>
                <img
                  src={misMedallas[miPj.name]}
                  onClick={handleMedalla}
                  className={recogida ? "medApagada" : "medalla"}
                  disabled={recogida}
                  style={{ width: "75px", cursor: "pointer", minWidth: "none" }}
                ></img>
                <form onSubmit={handleSubmit(formSubmit)}>
                  <button disabled={send} type="submit">Publicar Récord</button>
                </form>
              </>
            ) : (
              user?
              <form onSubmit={handleSubmit(formSubmit)}>
               
                <button disabled={send}type="submit">Publicar Récord</button>
              </form>:
              <NavLink to="/login">
                <button>Inicia sesión para guardar tus récords</button>
              </NavLink>
            )}
          </div>
          <Link className="botonConsecuencias" to="/">
            <button>Inicio</button>
          </Link>
        </>
      ) : miPj.salud > 0 ? (
        !consecuencia ? (
          <div className="cartaAccion">
            <p>{acciones[accion].accion}</p>

            {acciones[accion].opcion.map((op, index) => (
              <button
                key={op.accion}
                onClick={() => {
                  setConsecuencia(
                    secuelas[accion].consecuencias[index][miPj.name]
                  );
                  setIndice(index);
                }}
              >
                {op}
              </button>
            ))}
          </div>
        ) : (
          <>
            <div className="cartaConsecuencia">
              <p>{consecuencia}</p>
              <img
                className="imgResolucion"
                src={
                  secuelas[accion].oro[indice][miPj.name] == 0
                    ? "https://res.cloudinary.com/djfkchzyq/image/upload/v1705064810/dtxkqyzkbslt7o9zo4cq.jpg"
                    : "https://res.cloudinary.com/djfkchzyq/image/upload/v1705020121/u9aeomvdxatmm8llt22o.jpg"
                }
                alt=""
              />
            </div>
            <button
              className="botonConsecuencias"
              onClick={() => {
                handleAccion(accion);

                actualizarRecursos(
                  secuelas[accion].oro
                    ? secuelas[accion].oro[indice][miPj.name]
                    : 0,
                  secuelas[accion].salud
                    ? secuelas[accion].salud[indice][miPj.name]
                    : 0
                );
                setConsecuencia(null);
              }}
            >
              Siguiente
            </button>
          </>
        )
      ) : (
        <>
          <div className="cartaConsecuencia">
            <h2>DERROTA</h2>
            <p>
              {miPj.name} no ha conseguido superar todas las pruebas, las{" "}
              {miPj.oro} monedas que habías juntado yacen ahora en el suelo con{" "}
              {miPj.name} y no sirven para nada
            </p>
            <img
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705064810/dtxkqyzkbslt7o9zo4cq.jpg"
              alt=""
            />
          </div>
          <Link className="botonConsecuencias" to="/">
            <button>Inicio</button>
          </Link>
        </>
      )}
      <BarraJugador acciones={acciones} accion={accion} miPj={miPj} />
    </>
  );
};
