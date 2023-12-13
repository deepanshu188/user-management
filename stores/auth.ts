import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<{ email?: string; password?: string }>({});
  const loading = ref(false);

  const clearUser = () => (user.value = {});

  return {
    user,
    loading,
    clearUser,
  };
});
