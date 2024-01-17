import axios from "axios"
import { updateToken } from "../utils/updateToken"

export const extraConfig = () => {
return (axios.create({
  baseURL: "d-d-back-960fr5yn4-alexs-projects-b9b0cec7.vercel.app/api/v1/",
  headers: {
      Accept: "application/json",
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization:`Bearer ${updateToken()}`
  },
  timeout: 60000,
}))
}
