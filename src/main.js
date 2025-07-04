import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router'
const pinia = createPinia()


createApp(App).use(router).use(pinia).mount('#app')
