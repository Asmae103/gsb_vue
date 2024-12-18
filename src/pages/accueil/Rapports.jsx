import { useState } from 'react'
import { useNavigate, useLocation, useOutletContext} from 'react-router-dom'
//import reactLogo from '../assets/react.svg'
import reactLogo from "../../assets/react.svg";
import viteLogo from '/vite.svg'
//import '../composant/accueil/Rapports.css'
import "./Rapports.css";
import Navbar from "../../composant/Navbar.jsx"; 
//import Navbar from '../composant/Navbar.jsx'
function Rapports(){

    const {dataVisiteur, setDataVisiteur} = useOutletContext();
    return (
     <>
     <p>pages des rapports</p>
     </>
    )



}
export default Rapports;