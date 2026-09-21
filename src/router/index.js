import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import RegistrationForm from '../views/RegistrationForm.vue'
import BasketPage from '../products/BasketPage.vue'    
import Ecommerce from '../products/Ecommerce.vue'
import OrderPage from '../products/OrderPage.vue'
import ProductPage from '../products/ProductPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
     {
        path: '/about',
        name:  'about',
        component: About
    },
     {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/registration',
        name: 'registrationForm',
        component: RegistrationForm
    },
    {
        path: '/basket',
        name: 'basket',
        component: BasketPage
    },
     {
        path: '/ecommerce',
        name: 'ecommerce',
        component: Ecommerce
    },
     {
        path: '/order',
        name: 'orderPage',
        component: OrderPage
    },
     {
        path: '/product',
        name: 'productPage',
        component: ProductPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router