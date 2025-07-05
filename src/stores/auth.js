import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth",{
    state:()=>({
        isAuthenticated : false,
       user : {
        name : "Saiful",
        email : "saiful@gmail.com",
       }
    }),
});