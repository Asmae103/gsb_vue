import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../composant/accueil.css'


function Accueil() {
  const [count, setCount] = useState(0)
  const  navigate = useNavigate();
  const { login, password } = location.state || {};  // Accéder à login et password


  return (
    <>
      <p> Bonjour, {login}</p>
    </>
  )
}

export default Accueil