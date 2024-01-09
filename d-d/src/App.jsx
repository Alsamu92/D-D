
import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export const App=()=> {


  return (
    <>
    <Header/>
    <main>
      <Outlet/>
    </main>
  
  <Footer/>
    </>
  )
}



