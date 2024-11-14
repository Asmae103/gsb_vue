import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './index1.css'
import Connexion from '../composant/connecter'


function App() {
  const [count, setCount] = useState(0)
  const  navigate = useNavigate();
  const [error, setError] = useState(false);
  const[login , SetLogin] = useState('aribiA');
  const[password , SetPassword] = useState('aaaa');

  function connextion(){
    e.preventDefault();

    if(login== "aribiA" && password=="aaaa" ){
      console.log("Connexion reussie");
    }else{
      setError(false);
    }
  }
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
      
        <button id="btn" type="button" onClick >Sign in </button>

      </form>
    </>
  )
}

export default App
