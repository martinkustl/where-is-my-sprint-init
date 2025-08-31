import { getApiV1AppVersionsById } from '@/client/index';
import appVersionsQueryKeys from '@/routes/app-versions/api/appVersionsQueryKeys';
import { useQuery } from '@tanstack/react-query';

const useAppVersionDetailQuery = (appVersionId: string) => {
  return useQuery({
    queryKey: appVersionsQueryKeys.detail(appVersionId),
    queryFn: async () => {
      return getApiV1AppVersionsById({
        path: {
          id: appVersionId,
        },
      });
    },
  });
};

export default useAppVersionDetailQuery;
