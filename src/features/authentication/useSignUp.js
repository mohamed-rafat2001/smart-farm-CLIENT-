import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '../../services/authentication';

export function useSignUp() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    isLoading: isSignUp,
    error,
    data,
    mutate,
  } = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      queryClient.setQueryData(['User'], data);
      navigate('/app/profile');
    },
  });

  return {
    isSignUp,
    error,
    data,

    mutate,
  };
}
