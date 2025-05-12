import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
function ProtectedLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const token = localStorage.getItem('token');
  // const location = useLocation();
  console.log(token);
  useEffect(() => {
    if (!token || token === null) {
      return setIsAuthenticated(false);
    }
    return setIsAuthenticated(true);
  }, [token, isAuthenticated]);
  // if (!isAuthenticated)
  // 	return <Navigate to="/login" state={{ from: location }} replace />;
  return <Outlet />;
}
export default ProtectedLayout;
