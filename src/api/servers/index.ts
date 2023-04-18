import { tesonetAxios } from 'api/axios';
import { AxiosHeaders } from 'axios';

export const getServersInfo = async (headers: AxiosHeaders) =>
  (
    await tesonetAxios.get('/servers', {
      headers,
    })
  ).data;
