import { defineStore } from 'pinia';

export const useUserStore = defineStore('users', () => {
  const data = ref([]);
  const options = ref({ page: 1 });

  const resetOptions = () => {
    options.value = { page: 1 };
  };
  return {
    data,
    options,
    resetOptions,
  };
});
