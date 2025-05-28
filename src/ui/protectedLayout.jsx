import { Outlet, useLocation, Navigate } from 'react-router-dom';

import useAuth from '../Hooks/useAuth';
function ProtectedLayout() {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }
  if (!isAuthenticated)
    return <Navigate to="/" state={{ from: location }} replace />;

  return <Outlet />;
}
export default ProtectedLayout;
