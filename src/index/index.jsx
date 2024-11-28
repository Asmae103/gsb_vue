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
  /*var myForm = document.getElementById("myForm");
  formData = new FormData(myForm);*/
  function connexion(e){
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    
    if(login && password){
     // console.log(response.data);
    //  console.log("Connexion reussie");
      getVisiteur(form.get("login"),form.get("password"))
      //getVisiteur(login, password)
        .then((response) => {
          if(response.data != null){
        //if (response && response.data) {
         console.log("Connexion reussie",response.data);
            navigate("/Accueil", {
              state: {
                login,       
                password,   
              }
            })
          } else{
            setError(true);
          }
        });
       
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
  }
    
  return (
    <>
      <form id="myForm" name="myForm" onSubmit={connexion}> 
        <img src="src/index/a.png"  />
        <div>
        {(error === true) ? <window.alert title="Impossible de se connecter !" /> : null} 
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