import Swal from "sweetalert2";

export const useErrorLogin = (res, setRes, login, setSuccessfulLogin) => {
    if (res?.status == 200) {
        const updatedUser = {   
          token: res.data.token,
          username: res.data.user.username,
         _id: res.data.user._id,
        
          
        };
    
        const userString = JSON.stringify(updatedUser);
        login(userString);
        setSuccessfulLogin(() => true);
    
        Swal.fire({
          icon: "success",
          title: "Bienvenido de nuevo!",
          text: "",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    
    
      if (res?.response?.data?.includes("usuario no registrado")) {
        setRes(() => ({}));
        Swal.fire({
          icon: "error",
          title: "Ups!",
          text: "Usuario no registrado",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    
    
      if (res?.response?.data?.includes("La contraseña no coincide")) {
        Swal.fire({
          icon: "error",
          title: "Contraseña incorrecta",
          showConfirmButton: false,
          timer: 1500,
        });
        setRes(() => ({})); //tip acceder al estado actualizado con una callback
      }
    
      if (res?.response?.status == 500) {
        Swal.fire({
          icon: "error",
          title: "Interval Server Error",
          text: "There has been an error in our internal servers. Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });
        setRes(() => ({})); //tip acceder al estado actualizado con una callback!!
      }
}
