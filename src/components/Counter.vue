
<script setup>

import {useCounterStore} from "../stores/counter"
const store = useCounterStore();

</script>

<template>
<p>I'm from Counter Component & My State Value Is : {{store.count}}</p>
</template>

<style scoped>
</style>