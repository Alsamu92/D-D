import Swal from "sweetalert2/dist/sweetalert2.all.js";
export const useConfirmacionPj= (setPjConfirmed,person) => {
    Swal.fire({
        title: "Quieres que este sea tu personaje?",
        showDenyButton: true,
       
        confirmButtonText: "Si",
       
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Ahora este es tu personaje", "", "success");
           setPjConfirmed(person)
        } else if (result.isDenied) {
          Swal.fire("Busca otro");
        }
      });
   
      };
      