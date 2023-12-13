<script setup>
  import { getUsers } from '~/services/user';
  import { useUserStore } from '~/stores/users';
  const users = useUserStore();
  const { options } = storeToRefs(users);

  const fetchData = async () => {
    const { data: res } = await getUsers(options.value);
    users.data = res.value;
  };

  watch(
    options.value,
    () => {
      fetchData();
    },
    { immediate: true }
  );
</script>

<template>
  <section class="p-4">
    <Table :data="users.data.data" />
  </section>
</template>
