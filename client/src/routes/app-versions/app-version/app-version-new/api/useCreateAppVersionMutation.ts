import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  postApiV1AppVersions,
  type PostApiV1AppVersionsData,
} from '@/client/index';
import appVersionsQueryKeys from '@/routes/app-versions/api/appVersionsQueryKeys';

type CreateAppVersionData = PostApiV1AppVersionsData['body'];

const useCreateAppVersionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAppVersionData) => {
      return postApiV1AppVersions({
        body: data,
      });
    },
    onSuccess: async () =>
      queryClient.invalidateQueries({
        queryKey: [appVersionsQueryKeys.all],
      }),
  });
};

export default useCreateAppVersionMutation;
