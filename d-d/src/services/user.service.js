import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";



export const registerUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/usuario/", formData, {
  })
    .then((res) => res)
    .catch((error) => error);
};




// //! ------------------------- AUTOLOGIN ----------------------------------

export const autoLoginUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("usuario/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------------------------- LOGIN -------------------------------

export const loginUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("usuario/login", formData)
    .then((res) => res)
    .catch((error) => error);
};


//! -------------------------- DELETE USER ------------------------------

export const deleteUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.delete("/users/", formData)
    .then((res) => res)
    .catch((error) => error);
};

//* GET USER ------------------------------
//! -------------------> Get User By Name
export const getUserByName = async (userName) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/usuario/byName/${userName}`)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------> Get User By Id
export const getUserById = async (userId) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/usuario/${userId}`)
    .then((res) => res)
    .catch((error) => error);
};
//! -------------------> Poner medalla
export const ponerMedalla = async (medalla) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/usuario/medalla/${medalla}`)
    .then((res) => res)
    .catch((error) => error);
};
//! -------------------> AplicarExp
export const aplicarExp = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/usuario/actualizar`,formData)
    .then((res) => res)
    .catch((error) => error);
};


