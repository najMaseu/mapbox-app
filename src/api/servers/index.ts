import { tesonetAxios } from 'api/axios';
import { AxiosHeaders } from 'axios';
import { ServerDataResult } from 'types/common';

export const getServersInfo = async (headers: AxiosHeaders) =>
  (
    await tesonetAxios.get<ServerDataResult>('/servers', {
      headers,
    })
  ).data;
