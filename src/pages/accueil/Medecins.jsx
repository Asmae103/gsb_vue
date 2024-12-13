import { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
//import reactLogo from '../assets/react.svg'
import reactLogo from "../../assets/react.svg";
import viteLogo from '/vite.svg'
import './Medecins.css'
import Navbar from '../../composant/Navbar.jsx'
import MyContext from '../../composant/MyContext.jsx'
import Accueil from './Accueil.jsx';
function Medecins(){
    const location = useLocation();
   const{ nom , prenom }= useContext(MyContext);
   /* const context = useContext(MyContext);
    if(!context){
        console.log("erreur");
    }
     const {nom , prenom} = context ;*/

    return (
     <>
     <p>Pages des medecins :{ {nom,prenom}}</p>
     </>
    )


}

export default Medecins
/*
  <p>{{nom, prenom}}</p>;



{context}



*/