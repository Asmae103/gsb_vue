
import { useNavigate, useLocation, useOutletContext } from 'react-router-dom'
//import reactLogo from '../assets/react.svg'

import './Medecins.css'

function Medecins(){
    //const location = useLocation();
    const {dataVisiteur, setDataVisiteur} = useOutletContext();
  // const{ nom , prenom }= useContext(MyContext);
   /* const context = useContext(MyContext);
    if(!context){
        console.log("erreur");
    }
     const {nom , prenom} = context ;*/

    return (
     <>
        <p>Pages des medecins :</p>

     </>
    )


}

export default Medecins;