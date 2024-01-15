import "./Register.css";

import { Link, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { useAuth } from "../../../context/authContext";
import { useErrorRegister } from "../../../hooks/useErrorRegister";
import { registerUser } from "../../../services/user.service";
import { useForm } from "react-hook-form";
import { useAutoLogin } from "../../../hooks/useAutoLogin";

export const Register = () => {
  // allUser es la respuesta completa del 200 del service de registro
  const {allUser, setAllUser, bridgeData, setIsDeletedUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);


  const formSubmit = async (formData) => {

      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
      
    
  };
  useEffect(() => {
    useErrorRegister(res, setRegisterOk, setRes);
    //si es un 200 llama a la funcion puente
    console.log(  allUser);
  
    if (res?.status == 200) bridgeData("ALLUSER");
  }, [res]);
  //este useEffect nos da un console para ver que esta pasando.Lo dejo comentado para futuras pruebas

  useEffect(() => {
    setIsDeletedUser(() => false);
  }, []);

  if (okRegister) {
   if (!localStorage.getItem("user")) {
     useAutoLogin(allUser);
     console.log(res)
    } else {
      return <Navigate to="/" />;
  }
   
  }

  return (
    <div className="allForm register">
      <div className="formMain">
        <div className="formTitle">
          <h1 className="titleFormH1">Regístrate</h1>
          <p>Guarda tus récords y desbloquea contenido</p>
        </div>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="inputPlaceHolderForm">
            <label htmlFor="name" className="customPlaceholder">
              Apodo
            </label>
            <input
              className="inputForm"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("username", { required: true })}
            />

            <label htmlFor="password" className="customPlaceholder">
              Contraseña
            </label>
            <input
              className="inputForm"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
          </div>

          <div className="btnContainer">
            <button
            
            >
              {send ? "Loading..." : "Registro"}
            </button>

            <div className="loginForm">
              <p className="loginParagraph">
                Ya registrado? <Link to="/login">Entra</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
