import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Home from './pages/Home'
import SobreMi from './pages/SobreMi'
import Cursos from './pages/Cursos'
import Recursos from './pages/Recursos'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/sobre-mi', element: <SobreMi /> },
  { path: '/cursos', element: <Cursos /> },
  { path: '/recursos', element: <Recursos /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
