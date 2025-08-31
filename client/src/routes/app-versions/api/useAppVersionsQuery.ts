import { useQuery } from '@tanstack/react-query';
import { getApiV1AppVersions } from '@/client/index';
import appVersionsQueryKeys from './appVersionsQueryKeys';

const useAppVersionsQuery = () => {
  return useQuery({
    queryKey: [appVersionsQueryKeys.list()],
    queryFn: async () => {
      return getApiV1AppVersions();
    },
  });

  // useEffect(() => {
  //   const fetchSprintsData = async () => {
  //     const response = await getApiV1AppVersions();
  //     if (response) {
  //       setSprintsData(response);
  //     } else {
  //       console.error('Failed to fetch sprints data');
  //     }
  //   };
  //
  //   fetchSprintsData();
  // }, []);
  //
  // return {
  //   data: sprintsData,
  // };
};

export default useAppVersionsQuery;
