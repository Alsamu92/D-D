// import axios from "axios"
// import { updateToken } from "../utils/updateToken"

// export const extraConfig = () => {
// return (axios.create({
//   baseURL: "http://localhost:8081/api/v1",
//   headers: {
//       Accept: "application/json",
//       "Content-Type":"application/json",
//       "Access-Control-Allow-Origin": "*",
//       Authorization:`Bearer ${updateToken()}`
//   },
//   timeout: 60000,
// }))
// }



// export const getById = async (userId) => {
//     const APIGeneral = extraConfig();
  
//     return APIGeneral.get(`/users/${userId}`)
//       .then((res) => res)
//       .catch((error) => error);
//   };

//   // Función que devuelve una promesa
// function cargarDatos() {
//     return new Promise((resolve, reject) => {
//       // Simulamos una operación asíncrona, por ejemplo, una solicitud HTTP
//       setTimeout(() => {
//         const exito = true; // Cambia a false para simular un error
//         if (exito) {
//           const datos = { mensaje: 'Datos cargados correctamente' };
//           resolve(datos); // Resolvemos la promesa con los datos
//         } else {
//           reject(new Error('Error al cargar los datos')); // Rechazamos la promesa con un error
//         }
//       }, 2000); // Simulamos un tiempo de carga de 2 segundos
//     });
//   }
  
//   // Utilizamos la promesa
//   cargarDatos()
//     .then((resultado) => {
//       console.log(resultado.mensaje);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });