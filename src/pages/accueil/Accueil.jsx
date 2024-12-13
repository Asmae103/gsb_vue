import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Accueil.css'
import Navbar from '../../composant/Navbar.jsx'
import { Outlet } from "react-router"
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
    <p> Bonjour, {nom} {prenom} </p>
    <Outlet />  

    </>
  )
}

export default Accueil

/* <nav>
        <div class="main_pages">
        <img id="idgsb" src="src/index/a.png" />
            <a href="#">Dashboard</a>
            <a href="#">Acceuil</a>
            <a href="#">Projet</a>
            <a href="#">Calendar</a>
        </div>
    </nav>
   
    */