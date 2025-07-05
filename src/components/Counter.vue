<script setup>
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();

function deccrement(){
    store.count--
}

function increment(){
    store.count++
}



</script>

<template>
  <div class="d-flex justify-content-center align-items-center gap-3">
    <button class="btn btn-danger" @click="deccrement">-</button>
    <p>Count Value: {{ store.count }}</p>
    <button class="btn btn-primary"  @click="increment">+</button>
  </div>
  <p>Counter Moved To : {{ store.countDigitLength }}</p>
</template>

<style scoped></style>
