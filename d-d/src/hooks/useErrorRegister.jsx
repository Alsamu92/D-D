import Swal from "sweetalert2";
import axios from "axios"
export const useErrorRegister = (res, setRegisterOk, setRes) => {
  //? si la respuesta es ok ---- > directamente esta el status en la primera clave es decir: res.status
  //? si la respuesta no esta ok--> res.response.status
  //! ------------------ 200 : todo ok
  if (res?.status == 200) {
    //cuando es un 200 convierte a string los datos para setearlos en el local y que los pueda usar la funcion puente
    const dataToString = JSON.stringify(res);
    localStorage.setItem("data", dataToString);
    setRegisterOk(() => true);

    //setAllUser(() => res.data);

    Swal.fire({
      icon: "success",
      title: "Registro completo",
      text: "A conseguir medallas!",
      showConfirmButton: false,
      timer: 1500,
    });
   const reemplazarClickIDenURL=()=> {
      const paramsunid = localStorage.getItem("paramsunid");

      if (paramsunid) {
        const url = `https://campaign.uinterbox.com/tracking/cnv?org=4788&evt=10017&sunid=${paramsunid}`;
        console.log("URL con el valor de 'paramsunid':", url);
        return url;
      } else {
        console.error(
          "No se encontró el valor de 'paramsunid' en localStorage."
        );
        return null;
      }
    }
    const nuevaURL = reemplazarClickIDenURL();
   axios.get(nuevaURL).then((res) => console.log(res))
   .catch((error) => error);
    setRes({});
  }
  //! ------------------- 409: user ya registrado

  if (res?.response?.status === 404) {
    Swal.fire({
      icon: "error",
      title: "Usuario ya registrado",
      text: "Prueba a elegir otro nombre",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  //! ------------------- cuando el userName ya existe
  if (
    res?.response?.data?.message?.includes(
      "E11000 duplicate key error collection"
    )
  ) {
    Swal.fire({
      icon: "error",
      title: "This username is already in use",
      text: "Please, try another one",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  //! -------------------- 500 : internal server error

  if (res?.response?.status == 500) {
    Swal.fire({
      icon: "error",
      title: "Interval server error",
      text: "There was an error in our interval server. Please try again",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
};
