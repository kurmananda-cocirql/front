import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WorkshopsPage from './pages/workshop.jsx'
import CoachProfile from './pages/coachProfile.jsx'
import AuthApp from './pages/auth.jsx'
import WorkshopDetail from './pages/workshopDetail.jsx'
import ShoppingCart from './pages/shoppingCart.jsx'
import UserProfileEdit from './pages/profileEdit.jsx'
import UserProfile from './pages/userprofile.jsx'
import Navbar from './components/Navbar';
import RequestWorkshopForm from './pages/coachRequestPage.jsx'
import RequestWorkshopFormAdmin from './pages/adminRequestPage.jsx'
import AdminApprovalPage from './pages/admin.jsx'
import EventsPage from './pages/events.jsx'
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
    path: '/workshop-details',
    element: <WorkshopDetail />,
  },
  {
    path: '/shopcart',
    element: <ShoppingCart />,
  },
  {
    path: '/userprofile',
    element: <UserProfile />,
  },
  {
    path: '/userprofileedit',
    element: <UserProfileEdit />,
  },
  {
    path: '/coach-panel',
    element: <CoachProfile />,
  },
  {
    path: '/auth',
    element: <AuthApp />,
  },
  {
    path: '/coach-form',
    element: <RequestWorkshopForm />,
  },
  {
    path: '/admin-form',
    element: <RequestWorkshopFormAdmin />,
  },
  {
    path: '/admin-panel',
    element: <AdminApprovalPage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
  },
]);
import LivePopup from './components/live-popup.jsx'
createRoot(document.getElementById('root')).render(
  <div className="min-h-screen bg-white">
    <Navbar />
    <div className='top-[10vh]'>
      <StrictMode>
        <LivePopup />
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  </div>

);
