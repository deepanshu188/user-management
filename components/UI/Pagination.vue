<script setup>
  import { useUserStore } from '~/stores/users';
  const users = useUserStore();
  const { options } = storeToRefs(users);

  const TOTAL_PAGES = computed(() => users.data.total_pages);
  const CURRENT_PAGE = computed(() => options.value.page);

  const changePage = (action) => {
    switch (action) {
      case 'inc':
        options.value.page += 1;
        break;
      case 'dec':
        options.value.page -= 1;
    }
  };

  // reset api options on route change
  onUnmounted(() => {
    users.resetOptions();
  });
</script>

<template>
  <div class="join">
    <button
      class="join-item btn"
      :class="{ 'btn-disabled': CURRENT_PAGE === 1 }"
      @click="changePage('dec')"
    >
      «
    </button>
    <button class="join-item btn">Page {{ options.page }}</button>
    <button
      class="join-item btn"
      :class="{ 'btn-disabled': CURRENT_PAGE === TOTAL_PAGES }"
      @click="changePage('inc')"
    >
      »
    </button>
  </div>
</template>
