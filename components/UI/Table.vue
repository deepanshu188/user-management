<script setup>
  const { data } = defineProps({
    data: Object,
  });
</script>

<template>
  <section>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>S. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <!-- body -->
        <tbody>
          <tr v-for="item in data">
            <th>
              {{ item.id }}
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      :src="item.avatar"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">
                    <span>{{ item.first_name }}</span>
                    {{ '' }}
                    <span>{{ item.last_name }}</span>
                  </div>
                </div>
              </div>
            </td>
            <td>
              {{ item.email }}
            </td>
            <th>
              <button class="btn btn-ghost btn-xs">view</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-center mt-3">
      <Pagination />
    </div>
  </section>
</template>
