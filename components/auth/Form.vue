<script setup lang="ts">
  import { useAuthStore } from '~/stores/auth';
  const auth = useAuthStore();
  const { user } = storeToRefs(auth);

  defineProps({
    type: String,
  });

  // clear user details on route change
  onUnmounted(() => {
    auth.clearUser();
  });
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div
      class="hero-content flex-col lg:flex-row-reverse w-full justify-evenly"
    >
      <div class="text-center lg:text-left">
        <h1 class="md:text-5xl text-3xl font-bold">Dasho</h1>
        <p class="py-6 md:text-xl">
          A Secure User Management Dashboard.
        </p>
      </div>
      <div
        class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
      >
        <form
          class="card-body"
          @submit.prevent="$emit('handle-auth')"
        >
          <p class="text-2xl font-bold text-center">{{ type }}</p>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              class="input input-bordered"
              v-model="user.email"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
              v-model="user.password"
              required
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover"
                >Forgot password?</a
              >
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">
              <span v-if="auth.loading"><Loading /></span>
              <span v-else>{{ type }}</span>
            </button>
          </div>
          <div>
            <p
              v-if="type?.toLowerCase() === 'login'"
              class="text-center"
            >
              Don't Have an Account?
              <NuxtLink to="/signup">Sign Up</NuxtLink>
            </p>
            <p v-else class="text-center">
              Already Have an Account?
              <NuxtLink to="/">Login</NuxtLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
