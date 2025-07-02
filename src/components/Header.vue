<script setup>
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
          <router-link  class="nav-link d-inline text-white" :to="{name:'pinia'}"
            >Pinia</router-link
          >
        </div>
      </div>
    </nav>

</template>

<style scoped>
</style>