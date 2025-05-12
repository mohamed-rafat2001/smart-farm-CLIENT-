import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '../queryClient';
import Home from './ui/Home';
import AppLayout from './ui/AppLayout';
import ProfilePage from './pages/profilePage';
import FarmsPage from './/pages/farmsPage';
import FarmDashPage from './pages/FarmDashPage';
import AdminDashPage from './pages/AdminDashPage';
import SettingsPage from './pages/settingsPage';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import ProtectedLayout from './ui/protectedLayout';
import NotFoundPage from './pages/NotFoundPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
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
            element: <Navigate replace to="/app/farmsDashboard" />,
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
            path: '/app/farmsDashboard',
            element: <FarmDashPage />,
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
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App;
