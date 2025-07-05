<script setup>

import {useAuthStore} from "../stores/auth" ;

const authStore = useAuthStore();



</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link  class="navbar-brand" :to="{name:'home'}">Vue App</router-link>
        <div>
          <router-link class="nav-link d-inline text-white me-3" :to="{name:'home'}"
            >Home</router-link
          >
          <router-link  class="nav-link d-inline text-white me-3" :to="{name:'about'}"
            >About</router-link
          >
          <router-link  class="nav-link d-inline text-white me-3" :to="{name:'blog'}"
            >Blogs</router-link
          >
          <router-link  class="nav-link d-inline text-white  me-3" :to="{name:'contact'}"
            >Contact Us</router-link
          >
          <li v-if="authStore.isAuthenticated" class="btn btn-danger nav-link d-inline text-white  me-3" 
            > <button @click="authStore.Logout" class="btn btn-danger">Logout</button> </li
          >
          <li v-else class="btn btn-success nav-link d-inline text-white  me-3"
            > <button  @click="authStore.Login" class="btn btn-success">Login</button></li
          >

        </div>
      </div>
    </nav>

</template>

<style scoped>
</style>