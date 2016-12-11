// Import Vue and VueRouter and register the component
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Import route components
import  Auth from './components/auth/Auth.vue';
import  Register from './components/auth/Register.vue';
import  Login from './components/auth/Login.vue';

// Define routes
const routes = [
    {
        path: '/auth', component: Auth, redirect: '/auth/login', //redirect to prevent direct access to Auth component
        children: [
            {path: 'register', component: Register},
            {path: 'login', component: Login},
        ]
    },
];

// Create router instance
const router = new VueRouter({
    routes // short for routes: routes
});

// Export Router component
export default router;