import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putApiV1AppVersionsById } from '@/client/index';
import type { PutApiV1AppVersionsByIdData } from '@/client/index';
import appVersionsQueryKeys from '@/routes/app-versions/api/appVersionsQueryKeys';

type MutationData = PutApiV1AppVersionsByIdData['body'] & {
  id: PutApiV1AppVersionsByIdData['path']['id'];
};

const useEditAppVersionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: MutationData) => {
      return putApiV1AppVersionsById({
        path: {
          id: data.id,
        },
        body: data,
      });
    },
    onSuccess: async () =>
      queryClient.invalidateQueries({
        queryKey: [appVersionsQueryKeys.all],
      }),
  });
};

export default useEditAppVersionMutation;
