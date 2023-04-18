import { useAuthHeader } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { getServersInfo } from '.';
import { AxiosHeaders } from 'axios';

export const useServerData = () => {
  const authHeader = useAuthHeader();

  const headers = AxiosHeaders.from({
    Authorization: authHeader(),
    'Content-Type': 'application/json',
  });

  const { data, isError, isFetching, isLoading } = useQuery(
    'serverInfo',
    () => getServersInfo(headers),
    {
      retry: 1,
    },
  );

  return { data, isError, isFetching, isLoading };
};
