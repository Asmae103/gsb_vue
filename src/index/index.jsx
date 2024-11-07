import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './index1.css'


function App() {
  const [count, setCount] = useState(0)
  const  navigate = useNavigate();
  const errlogin = alert("Erreur login or password");
  return (
    <>
      <form> 
        <img src="src/index/a.png"  />
        <h2>Identifiez-vous </h2>
        <div>
          <label>Login:</label>
          <li> 
            <input id="in" type="text" />
          </li>
        </div>
        <div> 
          <label>Password:</label>
          <li>
            <input id="in" type="password" />
         </li>
        </div>
      
        <button id="btn" type="button">Sign in </button>

      </form>
    </>
  )
}

export default App
