<script setup>
  import { useAuthStore } from '~/stores/auth';
  import { login } from '~/services/auth';
  const auth = useAuthStore();
  const { fetchFn } = useAuth(login, auth);

  definePageMeta({
    layout: false,
  });
</script>

<template>
  <Form type="Login" @handle-auth="fetchFn" />
</template>
