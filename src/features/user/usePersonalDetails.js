import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMyAccData } from '../../services/user';

function usePersonalDetails() {
  const queryClient = useQueryClient();
  const {
    mutate: update,
    error,
    data: updatedData,
    isLoading: isUpdated,
  } = useMutation({
    mutationFn: updateMyAccData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['User'],
      });
    },
  });
  return { update, error, isUpdated, updatedData };
}
export default usePersonalDetails;
