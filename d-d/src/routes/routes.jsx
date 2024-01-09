import{createBrowserRouter}from "react-router-dom"
import { App } from "../App"
import { Home } from "../pages/Home/Home"
import { Aldea } from "../pages/Home/Aldea/Aldea"

export const router = createBrowserRouter([
    
{
    path:"/",
    element:<App/>,
    children:[
        {path:"/",
    element:<Home/>},
        {path:"/Aldea",
    element:<Aldea/>},
   
    ]
}
])
  

