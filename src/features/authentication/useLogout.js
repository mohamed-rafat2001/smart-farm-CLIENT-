import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../services/authentication';

function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: isLogOut, mutate: logOutUser } = useMutation({
    mutationFn: logOut,

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['User'] });
      queryClient.clear();
      navigate('/');
    },
  });

  return { isLogOut, logOutUser };
}
export default useLogOut;
