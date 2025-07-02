<script setup>
</script>

<template>
    <ul>
        <li> <router-link :to="{name:'category' , params:{category:'travel'}}">Travel</router-link> </li>
        <li> <router-link :to="{name:'category' , params:{category:'food'}}">Food</router-link> </li>
        <li> <router-link :to="{name:'category' , params:{category:'cricket'}}">Cricket</router-link> </li>

    </ul>
</template>

<style scoped>
</style>