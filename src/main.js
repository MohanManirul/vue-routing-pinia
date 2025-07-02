import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router'



createApp(App).use(router).use(createPinia()).mount('#app')
