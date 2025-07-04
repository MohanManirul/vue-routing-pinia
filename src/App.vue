<script setup>

import {useAuthStore} from "./stores/auth"
const auth = useAuthStore();

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <div class="flex-grow-1 container-fluid">
      <div class="row h-100">
        <div class="col-md-9">
          <router-view :key="$route.fullPath"/>         
        </div>
        <div class="col-md-3">
          <router-view name="right" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
</style>
