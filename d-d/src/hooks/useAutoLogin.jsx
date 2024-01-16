import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { autoLoginUser } from "../services/user.service";

export const useAutoLogin = async (allUser) => {
    console.log(allUser)
const {login} = useAuth(); 
  try {
    const customFormData = {
     username: allUser?.data?.username,
      password: allUser?.data?.password
    };



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