

<script setup>
import {computed, ref , watch} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

const tag = computed(()=>{
    return route.params.category
})



</script>



<template>
    <p>Blog Page</p>  
    {{ tag }}
</template>



<style scoped>
</style>