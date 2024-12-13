import {createContext }from 'react';
import {useLocation} from 'react-router-dom'
export const MyContext = createContext('light');
//const MyContext = createContext();
export const MyContextProvider = ({children}) => {
    const location = useLocation();
    const { nom, prenom } = location.state || {};
    return(
      <MyContext.Provider value ={{ nom, prenom}}>
        {children}
      </MyContext.Provider>
    )
}
const useContext = () =>{
    return useContext(MyContext);
}
export default (MyContext, useContext);
