import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './index/index.jsx'
import './index.css'
import Accueil from './composant/accueil.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const NotFound = () =>{
  return <h1> Page non trouvable</h1>
};

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/Accueil',
    element: <Accueil />
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
