import type { AppVersion } from '../types';
import useNaiveHttp from '@/hooks/useNaiveHttp';
import { useEffect } from 'react';

const useNaiveAppVersionsQuery = () => {
  const { data, sendRequest, isLoading, error } = useNaiveHttp<AppVersion[]>();

  useEffect(() => {
    sendRequest({
      method: 'GET',
      url: '/api/v1/app-versions',
    });
  }, [sendRequest]);

  return {
    isLoading,
    data,
    error,
  };
};

export default useNaiveAppVersionsQuery;
