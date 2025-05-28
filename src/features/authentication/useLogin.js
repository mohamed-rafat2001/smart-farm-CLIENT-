import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login } from '../../services/authentication';
import { useNavigate } from 'react-router-dom';

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    isLoading: isLogin,
    data,
    error,
    mutate: loginUser,
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // console.log(data);
      queryClient.setQueryData(['User'], data);
      navigate('/app/profile');
    },
  });
  return { isLogin, data, error, loginUser };
}
export default useLogin;
