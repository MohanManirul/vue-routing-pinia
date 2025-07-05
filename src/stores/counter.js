import { defineStore } from "pinia";
import {useAuthStore} from "./auth"
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", ()=> {

    const count = ref(0)
  
    const countDigitLength = computed(()=> count.value.toString().length)
        
    
       function increment(){
            if(!this.isAuthenticated()) return ;
            this.count++
        }

       function deccrement(){
             if(!this.isAuthenticated()) return ;
            this.count--
        }

       function isAuthenticated(){
            const authStore = useAuthStore();
            return authStore.isAuthenticated
        }

    return {count , countDigitLength , increment , deccrement , isAuthenticated}

});

