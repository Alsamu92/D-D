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
import Swal from "sweetalert2";
export const CartaAccion = ({ miPj }) => {
  const [consecuencia, setConsecuencia] = useState();
  const [resImage, setResImage] = useState();
  const [recogida, setRecogida] = useState(false);
  const [accion, setAccion] = useState(0);
  const [indice, setIndice] = useState();
  const [usuarioActual, setUsuarioActual] = useState();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const[dado,setDado]=useState(Math.ceil(Math.random() * 6))
  const [send, setSend] = useState(false);
  const borderStyle = resImage === "buena" ? "4px solid green" : 
                   resImage === "regular" ? "4px solid orange" : 
                   resImage === "mala" ? "4px solid red" : "4px solid black";

  const lanzarDado = () => {
    const nuevoNumero = Math.ceil(Math.random() * 6);
    setDado(nuevoNumero);
   
  };
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
      title: "Record guardado",
      text: "Solo aparecerá el top 5",
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
            {!usuarioActual?.data?.medallas.includes(miPj.name) &&
            usuarioActual != null ? (
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
                  <button disabled={send} type="submit">
                    Guarda la partida.
                  </button>
                </form>
              </>
            ) : user ? (
              <form onSubmit={handleSubmit(formSubmit)}>
                <button disabled={send} type="submit">
                  Guarda la partida.
                </button>
              </form>
            ) : (
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
          <>
            <h2>
              Prueba {accion + 1}/{acciones.length}
            </h2>
            <div className="cartaAccion">
              <p>{acciones[accion].accion}</p>

              {acciones[accion].opcion.map((op, index) => (
                <button
                  key={op.accion}
               
                  onClick={() => {
             
                    const brm = miPj[acciones[accion].habilidad[index]]+dado;
                    if (brm < 5 ||dado==1) {
                      setConsecuencia(secuelas[accion].consecuencias[index].mala);
                      setResImage("mala");
                    } else if (brm >= 5 && brm < 8) {
                      setConsecuencia(secuelas[accion].consecuencias[index].regular);
                      setResImage("regular");
                    } 
                    else {
                      setConsecuencia(secuelas[accion].consecuencias[index].buena);
                      setResImage("buena");
                    }
              

                    setIndice(index);
                  }}
                >
                  {op}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
       
            <div className="cartaConsecuencia" style={{ border: borderStyle }}>
              <p>{consecuencia}</p>
   
              <img 
                className="imgResolucion"
               
                src={
                  resImage =="mala"
                    ? secuelas[accion].imagenes[0]?.mala
                    :resImage=="buena"?secuelas[accion].imagenes[0].buena:secuelas[accion].imagenes[0].regular
                }
                alt=""
              />
            </div>
            <button
              className="botonConsecuencias"
              onClick={() => {
                handleAccion(accion);

                actualizarRecursos(
                 resImage=="buena"
                    ? 10+dado
                    :resImage=="regular"?dado: 0,
                  resImage=="mala"
                    ? (-30+dado):resImage=="regular"?
                    (-10+dado)
                    : 0
                );
                setConsecuencia(null);
             lanzarDado()
               
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
              {miPj.name} ha muerto poco después de la última prueba.
             
            
            </p>
            <img className="imgResolucion"
              src="https://res.cloudinary.com/djfkchzyq/image/upload/v1705064810/dtxkqyzkbslt7o9zo4cq.jpg"
              alt=""
            />
          </div>
          <Link className="botonConsecuencias" to="/">
            <button>Inicio</button>
          </Link>
        </>
      )}
      
      <BarraJugador consec={consecuencia?true:false}dado={dado}acciones={acciones} accion={accion} miPj={miPj} />
    </>
  );
};
