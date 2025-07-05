<script setup>
import { storeToRefs } from "pinia";

import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore()
const {count, countDigitLength} = storeToRefs(counterStore);

</script>

<template>
  <div class="d-flex justify-content-center align-items-center gap-3">
    <button class="btn btn-danger" @click="counterStore.deccrement">-</button>
    <p>Count Value: {{ count }}</p>
    <button class="btn btn-primary"  @click="counterStore.increment">+</button>
  </div>
  <p>Counter Moved To : {{ countDigitLength }}</p>
</template>

<style scoped></style>
