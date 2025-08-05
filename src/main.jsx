import { StrictMode , Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './Router.jsx'
import Loader from './Components/Jsx/Loader.jsx'
import { RouterProvider } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Suspense fallback={<Loader/>}>
  <RouterProvider router={Router}/>
  </Suspense>
  </StrictMode>,
)
