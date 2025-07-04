<script setup>

import {useCounterStore} from "../stores/counter"
const store = useCounterStore();
</script>

<template>
      <div class="container py-5 text-center">
        <h2>🏠 Home Page</h2>
        <p>This is the home page of our Vue app using Bootstrap.</p>
      </div>
</template>

<style scoped>
</style>