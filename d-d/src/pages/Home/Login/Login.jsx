import { useForm } from "react-hook-form";
import "./Login.css";
import { useEffect, useState } from "react";




import { useErrorLogin } from "../../../hooks/useErrorLogin";
import { useAuth } from "../../../context/authContext";
import { loginUser } from "../../../services/user.service";
import { Link, Navigate } from "react-router-dom";


export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, setUser } = useAuth();

  const [isSent, setIsSent] = useState(false); //isSent maneja los botones, el disable
  const [res, setRes] = useState({});
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  const formSubmit = async (formData) => {
    setIsSent(true);
    setRes(await loginUser(formData));
    setIsSent(false);
  };

  useEffect(() => {
    useErrorLogin(res, setRes, login, setSuccessfulLogin);
   
  }, [res]);

  useEffect(() => {
    setUser(() => null);
    localStorage.removeItem("user");
  }, []);

  if (successfulLogin) {
  
      return <Navigate to="/" />;
  
  }

  return (
    <>
      <div className="allForm register">
      <div className="formMain">
      <div className="formTitle">
          <h1 className="titleFormH1">LOG IN</h1>
          </div>
          <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="inputPlaceHolderForm">
          <label className="placeHolder" htmlFor="usename">
           Username
          </label>
          <input
            className="inputForm"
            type="text"
            id="username"
            name="username"
            autoComplete="false"
            {...register("username", { required: true })}
          />
          <label className="placeHolder" htmlFor="password">
            Password
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
          <button>
 LOG IN
</button>
          </div>
      
        </form>
        <div className="footerForm">
          <a className="parrafoLogin">
            No estás registrado? <Link to="/register">Regístrate aquí</Link>
          </a>
        </div>
      </div>
      </div>
    </>
  );
};
