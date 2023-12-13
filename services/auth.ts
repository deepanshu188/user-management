import { useApi } from '~/composables/useApi';

export interface IUser {
  email: string;
  password: string;
}

const auth = async (url: string, payload: IUser) => {
  return await useApi(url, {
    method: 'POST',
    body: payload,
  });
};

export const login = async (payload: IUser) => {
  return await auth('/api/login', payload);
};

export const signup = async (payload: IUser) => {
  return await auth('/api/login', payload);
};
