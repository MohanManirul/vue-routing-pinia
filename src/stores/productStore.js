import { defineStore } from "pinia";


export const useProductStore = defineStore('product',{
    state:()=>({
        products : []
                
    }),
    actions :{
        addProduct(product){
            this.products.push(product)
        }
    }
})