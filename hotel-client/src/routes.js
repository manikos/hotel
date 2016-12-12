/**
 * ---------------------------------------------------
 * Import Vue and VueRouter and register the component
 * ---------------------------------------------------
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Import also Auth plugin to use it in navigation guards
import AuthPlugin from './plugins/Auth';
Vue.use(AuthPlugin);

/**
 * ---------------------------------
 * Import route components
 * ---------------------------------
 */
import  Auth from './components/auth/Auth.vue';
import  Register from './components/auth/Register.vue';
import  Login from './components/auth/Login.vue';

/**
 * --------------------------------
 * Define routes
 * --------------------------------
 */
const routes = [
    {
        path: '/auth', component: Auth, redirect: '/auth/login', //redirect to prevent direct access to Auth component
        children: [
            {path: 'register', component: Register, meta: {guest: true}},
            {path: 'login', component: Login, meta: {guest: true}},
        ]
    },
];

/**
 * ---------------------------------
 * Create router instance
 * ---------------------------------
 */
const router = new VueRouter({
    routes // short for routes: routes
});

/**
 * ----------------------------------
 * Define navigation guards
 * ----------------------------------
 */

// Guard to prevent a user from accessing Login component after she has successfully logged in
// --------------------------------------------------------------------------------------------
router.beforeEach((to, from, next) => {
    // If user is logged in and request routes that requires meta `guest`
    if(Vue.auth.loggedIn() && to.matched.some( record => record.meta.guest)) {
        // we redirect the logged-in user to profile
        next({path: '/youareloggedin'});
    } else {
        next();
    }
});

/**
 * ---------------------------------
 * Export router instance
 * ---------------------------------
 */
export default router;