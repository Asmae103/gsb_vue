import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './index1.css'
import '../api/api.jsx'
//import Connexion from '../composant/connecter'


function App() {
  const [count, setCount] = useState(0)
  const  navigate = useNavigate();
  const [error, setError] = useState(false);
  const[login , SetLogin] = useState('');
  const[password , SetPassword] = useState('');

  function connexion(e){
    e.preventDefault();

    if(login== "aribiA" && password=="aaaa" ){
      console.log("Connexion reussie");
    }else{
      setError(false);
    }
   
  }
 
    
  async function getVisiteur(leLogin, leMdp){
    try{
      const response = await api.get('/connexion',{
        params: {
          login: leLogin,
          mdp: leMdp
        },
      });
      return response;
    }catch (error){
      console.log("Erreur connexion API ")
    }
    getVisiteur(form.get("login"), form.get("password"))
      .then((response) => {
      if(response.data != null){
        console.log(response.data);
      } else{
        setErreurLogin(true)
      }
      });
    }
  

  return (
    <>
      <form onSubmit={connexion}> 
        <img src="src/index/a.png"  />
        <div>
        {(error === true) ? <Alert title="Impossible de se connecter !" /> : null} 
          <h2>Identifiez-vous </h2>
          <div>
            <label>Login:</label>
            <li> 
              <input type="text" value={login} onChange={(e) => SetLogin(e.target.value)}/>
            </li>
          </div>
          <div> 
            <label>Password:</label>
            <li>
              <input  type="password" value={password} onChange={(e) => SetPassword(e.target.value )} />
          </li>
          </div>
        
          <button id="btn" type="Submit" 
          onSubmit={connexion}
            >
            Sign in 
          </button>
        </div>
      </form>
    </>
  )
}

export default App
/* <button id="btn" type="Submit" 
        onClick={() => 
          navigate("/getVisiteur",{
            params: {
            login ,
            password 
          }
        })
        }
          >
          Sign in 
        </button>*/


        /*  <button id="btn" type="Submit" 
          onClick={(e) => {
            connexion(e);
          }}
            >
            Sign in 
          </button>*/