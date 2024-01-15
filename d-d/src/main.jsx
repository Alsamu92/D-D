import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import{router}from "./routes/routes.jsx"
import { ContextProvider } from './context/sizeContext.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthContextProvider>
    <ContextProvider>
   <RouterProvider router={router}/>
   </ContextProvider>
   </AuthContextProvider>
  </React.StrictMode>,
)
