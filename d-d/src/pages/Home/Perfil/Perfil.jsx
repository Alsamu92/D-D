import React, { useEffect, useState } from "react";
import "./Perfil.css";
import { useAuth } from "../../../context/authContext";
import { persSeleccionables } from "../../../services/services";
import { aplicarExp, getUserByName } from "../../../services/user.service";
import Swal from "sweetalert2";

export const Perfil = () => {
  const [activo, setActivo] = useState();
  const [info, setInfo] = useState(false);
  const [cadaPj, setCadaPj] = useState();
  const [res, setRes] = useState();
  const [enviado, setEnviado] = useState(false);
  const [selectedPersonaje, setSelectedPersonaje] = useState();
  const [lirena, setLirena] = useState();
  const [bruster, setBruster] = useState();
  const [krista, setKrista] = useState();
  const [furtur, setFurtur] = useState();
  const [darion, setDarion] = useState();
  const [miExperienciaDisponible, setMiExperienciaDisponible] = useState();
  const { user } = useAuth();
const avisoIns=()=>{
  Swal.fire({
    title: 'Puntos insuficientes.',
    text: 'Consigue más jugando',
    icon: 'error',
    showCancelButton: true,
    confirmButtonText: 'Ir al juego',
    cancelButtonText: 'Cerrar',
  }).then((result) => {
    if (result.value) {
    
      window.location.href = '/aldea';
    }
  });
      setEnviado(false)
}
  const traerMiExp = async () => {
    const miExp = await getUserByName(user.username);
    setCadaPj(miExp);
    setMiExperienciaDisponible(miExp?.data?.experiencia);
    setLirena(miExp?.data.lirena);
    setBruster(miExp?.data.bruster);
    setKrista(miExp?.data.krista);
    setFurtur(miExp?.data.furtur);
    setDarion(miExp?.data.darion);
  };

  useEffect(() => {
    traerMiExp();
  }, [res]);
  const handleEstadoName = (name) => {
    switch (name.toLowerCase()) {
      case "lirena":
        return lirena;
        break;
      case "bruster":
        return bruster;
        break;
      case "krista":
        return krista;
        break;
      case "furtur":
        return furtur;
        break;
      case "darion":
        return darion;
        break;
      default:
        break;
    }
  };

  const darExp = (e, name) => {
    switch (name.toLowerCase()) {
      case "lirena":
        setLirena(e.target.value), setActivo("lirena");
        break;
      case "bruster":
        setBruster(e.target.value), setActivo("bruster");
        break;
      case "krista":
        setKrista(e.target.value), setActivo("krista");
        break;
      case "furtur":
        setFurtur(e.target.value), setActivo("furtur");
        break;
      case "darion":
        setDarion(e.target.value), setActivo("darion");
        break;
      default:
        break;
    }
  };
  const getExp = async (nombreCambiar) => {
    setEnviado(true)
    let respuesta;
    switch (nombreCambiar) {
      case "lirena":
        if (miExperienciaDisponible > 49) {
          respuesta = await aplicarExp({
            experiencia: -50,
            lirena: cadaPj?.data.lirena + 50,
          });

          setRes(respuesta);
        }else{
        avisoIns()
      
        }
        
        break;
      case "bruster":
        if (miExperienciaDisponible > 49) {
          respuesta = await aplicarExp({
            experiencia: -50,
            bruster: cadaPj?.data.bruster + 50,
          });

          setRes(respuesta);
        }else{
          avisoIns()
        
          }
        break;
      case "krista":
        if (miExperienciaDisponible > 49) {
          respuesta = await aplicarExp({
            experiencia: -50,
            krista: cadaPj?.data.krista + 50,
          });

          setRes(respuesta);
        }else{
          avisoIns()
        
          }
        break;
      case "furtur":
        if (miExperienciaDisponible > 49) {
          respuesta = await aplicarExp({
            experiencia: -50,
            furtur: cadaPj?.data.furtur + 50,
          });

          setRes(respuesta);
        }else{
          avisoIns()
        
          }
        break;
      case "darion":
        if (miExperienciaDisponible > 49) {
          respuesta = await aplicarExp({
            experiencia: -50,
           darion: cadaPj?.data.darion + 50,
          });

          setRes(respuesta);
        }else{
          avisoIns()
        
          }
       
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    console.log(enviado)
   
    if (res?.data.patchUser.experiencia!=res?.data.updateUser.experiencia) {
  
      Swal.fire({
        icon: "success",
        title: "Has subido de nivel.",
        text: "Tu personaje ahora es más fuerte.",
        showConfirmButton: false,
        timer: 1500,
      });
      setRes(null);
    setEnviado(false)
    }else{
  
      setEnviado(false)
    }
  }, [res]);

  // // Lirena
  // if (lirena > cadaPj?.data.lirena + miExperienciaDisponible) {
  //   setLirena(cadaPj?.data.lirena + miExperienciaDisponible);
  // }

  // if (lirena < cadaPj?.data.lirena) {
  //   setLirena(cadaPj?.data.lirena);
  // }

  // // Bruster
  // if (bruster > cadaPj?.data.bruster + miExperienciaDisponible) {
  //   setBruster(cadaPj?.data.bruster + miExperienciaDisponible);
  // }

  // if (bruster < cadaPj?.data.bruster) {
  //   setBruster(cadaPj?.data.bruster);
  // }

  // // Krista
  // if (krista > cadaPj?.data.krista + miExperienciaDisponible) {
  //   setKrista(cadaPj?.data.krista + miExperienciaDisponible);
  // }

  // if (krista < cadaPj?.data.krista) {
  //   setKrista(cadaPj?.data.krista);
  // }

  // // Furtur
  // if (furtur > cadaPj?.data.furtur + miExperienciaDisponible) {
  //   setFurtur(cadaPj?.data.furtur + miExperienciaDisponible);
  // }

  // if (furtur < cadaPj?.data.furtur) {
  //   setFurtur(cadaPj?.data.furtur);
  // }

  // // Darion
  // if (darion > cadaPj?.data.darion + miExperienciaDisponible) {
  //   setDarion(cadaPj?.data.darion + miExperienciaDisponible);
  // }

  // if (darion < cadaPj?.data.darion) {
  //   setDarion(cadaPj?.data.darion);
  // }
  const expANivel = (expEnNum) => {
    return expEnNum < 50
      ? 0
      : expEnNum >= 50 && expEnNum < 100
      ? 1
      : expEnNum >= 100 && expEnNum < 150
      ? 2
      : expEnNum < 200
      ? 3
      : 4;
  };

  useEffect(() => {
    expANivel();
  }, [miExperienciaDisponible]);
  return (
    <>
      {info ? (
        <div className="tablaNiveles">
          <table border="1">
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Exp Necesaria</th>
                <th>Recompensa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>Nivel de inicio</td>
              </tr>
              <tr>
                <td>1</td>
                <td>50</td>
                <td>Aguante a 120</td>
              </tr>
              <tr>
                <td>2</td>
                <td>100</td>
                <td>Más 1 a dos estadisticas.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>150</td>
                <td>Tu dado es de 8 caras.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>200</td>
                <td>Próximamente 4</td>
              </tr>
            </tbody>
          </table>
          <p style={{color:"white",fontSize:"10px",textAlign:"center"}}>*Todos los niveles mantienen los beneficios anteriores.</p>
          <button className="cerrarInfo" onClick={() => setInfo(false)}>
           
            Cerrar
          </button>
        </div>
      ) : (
        <div className="todoPerfil">
          <div className="puntosDisp">
            <div onClick={() => setInfo(true)} className="info">
              i
            </div>
            <h2>
              Puntos por asignar<strong> {miExperienciaDisponible}</strong>
            </h2>{" "}
            <h4>Desplaza el cursor para introducir la cantidad deseada.</h4>
          </div>
          <div className="miPerfil">
            <div className="cajonesPerfil">
              {persSeleccionables.map((pers) => (
                <div className="algo" key={pers.name}>
                  <figure
                    onClick={() => setSelectedPersonaje(pers)}
                    key={pers.name}
                    className={`${pers.name} cajonPjPerfil`}
                  >
                    <img src={pers.img} alt="" />

                    <p> {handleEstadoName(pers.name)}</p>

                    <h3>
                     <strong>Nivel {expANivel(cadaPj?.data[pers.name.toLowerCase()])}</strong> <strong>{pers.name}</strong> 
                    </h3>
                  </figure>
                  <div className="cajonExperiencia">
                  {cadaPj?.data[pers.name.toLowerCase()]>199?<button>Nivel máximo</button>: <button
                    disabled={enviado}
                      onClick={() => getExp(pers.name.toLocaleLowerCase())}
                    >
                      Subir nivel(50 exp)
                    </button>}
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
