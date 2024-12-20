
import { useNavigate, useLocation, useOutletContext } from 'react-router-dom'
//import reactLogo from '../assets/react.svg'
import { useState } from 'react';
import './Medecins.css';

function Medecins(){
    //const location = useLocation();
      // const{ nom , prenom }= useContext(MyContext);
   /* const context = useContext(MyContext);
    if(!context){
        console.log("erreur");
    }
     const {nom , prenom} = context ;*/
   // const {dataVisiteur, setDataVisiteur} = useOutletContext();
   const { state } = useLocation(); 
   //const [medecin, setMedecin] = useState(state);
   const [medecin, setMedecin] = useState(state ? state.user : null);
   const navigate = useNavigate(); //pour utiliser la navigation du routeur 
   const [listeVisible, setListeVisible] = useState(false); // Etat visibilité de la liste
   // const [nomMedecin, setNomMedecin]= useState(''); //Etat champ de saisie 
    const {nom , prenom } = medecin;
    const [listeMedecins, setListeMedecins] = useState([]); //liste qui va contenir les medecins trouvés 

    function charger(){
        if(nomMedecin != null){
             if(medecin.nom== nomMedecin){
                return (medecin.nom + medecin.prenom) 
             }
        }
    }
 /**
  * Fonction qui va se declencher lorsqu'un medecin est selectionné dans la liste
  * @param {JSON} leMedecin 
  */

    function selectMedecin(leMedecin){
      console.log(leMedecin.nom);
    }
    /**
     * Appel à l'API /medecins, avec comme paramètre 'nom'
     * retour en fonction de la saisie de l'utilisateur
     * @returns 
     */

    async function RechercherRapports(){

    }
    return (
     <>
        <p>Pages des medecins :</p>

        <br/> 
        <label> Recherche un medecin</label>
     <br/>
        <input  type ="text"  value ={ medecin.nom} onChangee ="charger()"/>


     </>
    )


}

export default Medecins;