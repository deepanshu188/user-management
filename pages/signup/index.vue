<script setup>
  import { useAuthStore } from '~/stores/auth';
  import { signup } from '~/services/auth';
  const auth = useAuthStore();
  const { fetchFn } = useAuth(signup, auth);

  definePageMeta({
    layout: false,
  });
</script>

<template>
  <Form type="Sign Up" @handle-auth="fetchFn" />
</template>
