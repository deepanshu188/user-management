<script setup>
  const token = useCookie('token');
  const router = useRouter();

  const close = () => {
    const elem = document?.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  const logout = () => {
    close();
    token.value = '';
    router.push('/');
  };
</script>

<template>
  <div class="navbar bg-neutral-700">
    <div class="flex-1">
      <img src="/img/logo.svg" class="w-8" alt="logo" />
    </div>
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle avatar"
        >
          <div class="w-10 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li @click="logout"><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
