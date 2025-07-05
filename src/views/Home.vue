<script setup>



import Counter from "../components/Counter.vue"

import {useAuthStore} from "../stores/auth"

const authStore = useAuthStore();

</script>

<template>
      <div class="container py-5 text-center">
        <h2>🏠 Home Page</h2>        
          <div v-if="authStore.isAuthenticated">
            User Name is : {{ authStore.user.name }}
          </div>
        <Counter />
      </div>
</template>

<style scoped>
</style>