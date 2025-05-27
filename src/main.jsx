import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WorkshopsPage from './pages/workshop.jsx'
import CoachProfile from './pages/coachProfile.jsx'
import AuthApp from './pages/auth.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/workshops',
    element: <WorkshopsPage />,
  },
  {
    path: '/coachprof',
    element: <CoachProfile />,
  },
  {
    path: '/auth',
    element: <AuthApp />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
