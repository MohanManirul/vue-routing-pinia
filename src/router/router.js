import { createRouter , createWebHistory } from "vue-router";

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Blog from '../views/Blog.vue';
import RightSidebar from '../components/RightSidebar.vue';
import BlogRightSidebar from '../components/BlogRightSidebar.vue';

const routes = [ 

    {
        path:"/" , 
        component: Home ,
        name:'home'
     
    },

    {
        path:"/about-us" , 

        components: {
            default : About ,
            right : RightSidebar
        } ,

        name:'about'
      
    },
  
    {
        path:"/blog" , 

        components: {
            default : Blog ,
            right : BlogRightSidebar
        } ,

        name:'blog'
      
    },

    
    {
        path:"/blogs/tag/:category" , 

        components: {
            default : Blog ,
            right : BlogRightSidebar
        } ,

        name:'category'
      
    },
  

    {
        path:"/contact-us" , 
        component: Contact ,
        name:'contact'
       
    },

  

] ;


const router = createRouter({
    history :createWebHistory(),
    routes
}) ;


export default router;