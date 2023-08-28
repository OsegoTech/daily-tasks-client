import {createRouter, createWebHistory} from "vue-router"
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router