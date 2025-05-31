import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import AppLayout from '../ui/AppLayout.jsx';
import ProfilePage from '../pages/profilePage.jsx';
import FarmsPage from '../pages/farmsPage.jsx';
import FarmDashPage from '../pages/FarmDashPage.jsx';
import AdminDashPage from '../pages/AdminDashPage.jsx';
import SettingsPage from '../pages/settingsPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import ContactUsPage from '../pages/ContactUsPage.jsx';
import ProtectedLayout from '../ui/protectedLayout.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import SignUp from '../features/authentication/SignUp.jsx';
import Login from '../features/authentication/Login.jsx';
export const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactUsPage />,
  },
  {
    path: '/registration',
    element: <RegisterPage />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/registration/signUp" />,
      },
      {
        path: '/registration/signUp',
        element: <SignUp />,
      },
      {
        path: '/registration/login',
        element: <Login />,
      },
    ],
  },

  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            index: true,
            element: <Navigate replace to="/app/profile" />,
          },
          {
            path: '/app/farmsDashboard',
            element: <FarmDashPage />,
          },
          {
            path: '/app/profile',
            element: <ProfilePage />,
          },
          {
            path: '/app/farms',
            element: <FarmsPage />,
          },

          {
            path: '/app/adminDashboard',
            element: <AdminDashPage />,
          },
          {
            path: '/app/settings',
            element: <SettingsPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
