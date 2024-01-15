import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { autoLoginUser } from "../services/user.service";

export const useAutoLogin = async (allUser) => {
    console.log(allUser)
const {login} = useAuth(); //lo traigo asi porque me gusta mas desde el mismo componente equipo
  try {
    const customFormData = {
     username: allUser?.data?.username,
      password: allUser?.data?.password
    };

//ex Vamos a recibir toda la info del usuario por allUser, que se
//ex settea en el register, y no pasa por el

    const sentAutoLoginData = await autoLoginUser(customFormData);
    if (sentAutoLoginData?.status == 200) {
      const { user } = sentAutoLoginData.data.user;
        
      const customUser = {
        token: sentAutoLoginData.data.token,
        user,
       username: sentAutoLoginData.data.user.username,
        _id: sentAutoLoginData.data.user._id,
     
      };

      const userToJSONString = JSON.stringify(customUser)
      login(userToJSONString);
       
            return <Navigate to="/"/>
        
    } else {
        return <Navigate to="/login"/>
    }
} catch (error) {
    return (
        error.message
    )
}
}