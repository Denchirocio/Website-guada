import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router'
import './index.css'
import Home from './pages/Home'
import SobreMi from './pages/SobreMi'
import Cursos from './pages/Cursos'
import Recursos from './pages/Recursos'
import CursoHiragana from './pages/CursoHiragana'

function RootLayout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre-mi', element: <SobreMi /> },
      { path: '/cursos', element: <Cursos /> },
      { path: '/recursos', element: <Recursos /> },
      { path: '/cursos/hiragana', element: <CursoHiragana /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
