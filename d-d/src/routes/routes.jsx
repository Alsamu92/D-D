import{createBrowserRouter}from "react-router-dom"
import { App } from "../App"
import { Home } from "../pages/Home/Home"
import { Aldea } from "../pages/Home/Aldea/Aldea"
import { Register } from './../pages/Home/Register/Register';
import { Login } from "../pages/Home/Login/Login";

export const router = createBrowserRouter([
    
{
    path:"/",
    element:<App/>,
    children:[
        {path:"/",
    element:<Home/>},
        {path:"/Aldea",
    element:<Aldea/>},
        {path:"/register",
    element:<Register/>},
        {path:"/login",
    element:<Login/>},
   
    ]
}
])
  

