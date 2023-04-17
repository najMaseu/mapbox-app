import { tesonetAxios } from '../axios';

interface LoginInfo {
  username: string;
  password: string;
}

export const getToken = async ({ username, password }: LoginInfo) =>
  (
    await tesonetAxios.post<{ token: string }>(
      '/tokens',
      { username, password },
      { headers: { 'Content-Type': 'application/json' } },
    )
  ).data;
