import { getMe } from '../services/user';
import { useQuery } from '@tanstack/react-query';
function useAuth() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['User'],
    queryFn: getMe,
  });

  return {
    isLoading,
    data,
    isAuthenticated: Boolean(data),
    error,
  };
}
export default useAuth;
