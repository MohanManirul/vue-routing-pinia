<script setup>
import {defineStore} from 'pinia'
import { ref } from 'vue'
import {useUserStore} from './stores/userStore'
import {useProductStore} from './stores/productStore'


const userStore = useUserStore()
const productStore = useProductStore()

const name = ref('')
const email = ref('')

const productName  = ref('')
const productPrice  = ref('')

function addUser(){
  if(name.value && email.value){
    userStore.addUser({name:name.value , email:email.value})
    name.value ='',
    email.value =''
  }
}

function addProduct(){
  if(productName.value && productPrice.value){
      productStore.addProduct({name:productName.value, price:productPrice.value})

    productName.value = ''
    productPrice.value = ''

  }
}



</script>

<template>
  <div class="app">
    <h1>Pinia User App Centralized Store</h1>

    <!-- User Form -->
    <div class="form">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <button @click="addUser" class="btn btn-success">Add User</button>
    </div>

    <!-- User List -->
    <div class="list">
      <h3>User List</h3>
      <ul v-for="(user , index) in userStore.users" :key="index">
        {{ user.name }} - {{ user.email }}
      </ul>
    </div> <br/>

     <h1>Pinia User App Centralized Store (Product)</h1>

    <!-- User Form -->
    <div class="form">
      <input v-model="productName" placeholder="product Name" />
      <input v-model="productPrice" placeholder="product Price" />
      <button @click="addProduct" class="btn btn-success">Add Product</button>
    </div> <br />

    <section>
      <h3>Product List</h3>
      <ul>
        <li v-for="(product , index) in productStore.products" :key="index">
          {{ product.name }} - {{ product.price }}

        </li>
      </ul>
    </section>

  </div>
</template>

<style scoped>
.app {
  max-width: 500px;
  margin: auto;
  padding: 1rem;
  font-family: sans-serif;
}
input {
  display: block;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 100%;
}
button {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
}
</style>
