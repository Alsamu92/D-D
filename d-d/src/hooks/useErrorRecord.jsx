
import Swal from "sweetalert2"



export const useErrorRegister = (res, setRes) => {
 
  //? si la respuesta es ok ---- > directamente esta el status en la primera clave es decir: res.status
  //? si la respuesta no esta ok--> res.response.status
  //! ------------------ 200 : todo ok
  if (res?.status == 200) {

    Swal.fire({
      icon: "success",
      title: 'Record guardado',
      text: 'Solo aparecerá el top 5',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});}


  if (res?.response?.status === 404) {
    Swal.fire({
      icon: "error",
      title: "Error ",
      text: "",
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
