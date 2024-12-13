import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './index/index.jsx'
import './index.css'
import Accueil from './pages/accueil/Accueil.jsx'
import Medecins from './pages/accueil/Medecins.jsx'
import Rapports from './pages/accueil/Rapports.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const NotFound = () =>{
  return <h1> Page non trouvable</h1>
};

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
 /* {
    path:'/Accueil',
    element: <Accueil />
  },*/
  { 
    path:'/accueil',
    element: <Accueil />,
    children: [
      {
        path: 'medecins',
        element: <Medecins />
      },
      {
        path: 'rapports',
        element: <Rapports />
      },

     ]
    },
  {
    path: '*', // Cette route attrape toutes les autres routes non définies
    element: <NotFound />
}

]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router = {router}/>
  </StrictMode>,
)
