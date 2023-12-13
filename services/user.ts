import { useApi } from '~/composables/useApi';

export const getUsers = async ({ page }: any) => {
  return await useApi('/api/users', {
    query: { page },
  });
};
