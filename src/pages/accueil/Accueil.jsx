import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Accueil.css'
import Navbar from '../../composant/Navbar.jsx'
import { Outlet } from "react-router"
import { createContext } from 'react';
import MyContext from '../../composant/MyContext';
import Medecins from './Medecins.jsx'
import Rapports from './Rapports.jsx'
import { MyContextProvider } from '../../composant/MyContext.jsx'
function Accueil() {
 
  const [count, setCount] = useState(0)
  const  navigate = useNavigate();
  const location = useLocation();
  const { nom, prenom } = location.state || {};  // Accéder ànom et prenom
 // const {nom, prenom } = location.state || {};
//console.log(login);
   

  return (
    <>
    <Navbar />
    <MyContextProvider>
        <Medecins />
    </MyContextProvider>
    <Outlet />  
       </>
  )
}

export default Accueil

/* <nav>
      
<p> Bonjour, {nom} {prenom} </p>
    <MyContext.Provider value ={{nom,prenom} } >
       
    </MyContext.Provider>
<Rapports />

        <div class="main_pages">
        <img id="idgsb" src="src/index/a.png" />
            <a href="#">Dashboard</a>
            <a href="#">Acceuil</a>
            <a href="#">Projet</a>
            <a href="#">Calendar</a>
        </div>
    </nav>
     {children}
   <MyContext.Provider value ={{nom,prenom} } >
          <Medecins />
    </MyContext.Provider>
    */