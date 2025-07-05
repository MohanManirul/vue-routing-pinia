<script setup>



import { storeToRefs } from "pinia";
import Counter from "../components/Counter.vue"

import {useAuthStore} from "../stores/auth"

const authStore = useAuthStore();

const {isAuthenticated, user } = storeToRefs(useAuthStore()) ;

</script>

<template>
      <div class="container py-5 text-center">
        <h2>🏠 Home Page</h2>        
          <div v-if="authStore.isAuthenticated">
            User Name is : {{ authStore.fullname}}
          </div>
        <Counter />
      </div>
</template>

<style scoped>
</style>