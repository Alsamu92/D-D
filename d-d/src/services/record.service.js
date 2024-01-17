import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";



export const registerRecord = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/record/", formData, {
  })
    .then((res) => res)
    .catch((error) => error);
};
export const getRecords = async (filtro) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/record/filtrodes/${filtro}`, {
  })
    .then((res) => res)
    .catch((error) => error);
};