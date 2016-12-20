import Vue from "vue";
import VueRouter from "vue-router";
import AuthPlugin from "./plugins/Auth";
import Auth from "./components/auth/Auth.vue";
import Register from "./components/auth/Register.vue";
import Login from "./components/auth/Login.vue";
import Admin from "./components/admin/Admin.vue";
import Dash from "./components/admin/dash/Dash.vue";
import UserIndex from "./components/admin/user/UserIndex.vue";
import UserEdit from "./components/admin/user/UserEdit.vue";

/**
 * Register required plugins
 */
Vue.use(VueRouter);
Vue.use(AuthPlugin);

/**
 * Define routes
 */
const routes = [
    // Admin routes
    {
        path: '/', component: Admin, redirect: '/dash',
        children: [
            {path: 'dash', component: Dash, meta: {requiresAuth: true}},
            {path: 'user', component: UserIndex},
            // {path: 'user/:id', name: 'userShow', component: UserShow},
            {path: 'user/:id/edit', name: 'userEdit', component: UserEdit}
        ]
    },
    // Auth routes
    {
        path: '/auth', component: Auth, redirect: '/auth/login', //redirect to prevent direct access to Auth component
        children: [
            {path: 'register', component: Register, meta: {guest: true}},
            {path: 'login', component: Login, meta: {guest: true}},
        ]
    },
];

/**
 * Create router instance
 */
const router = new VueRouter({
    routes // short for routes: routes
});

/**
 * Define navigation guards
 */

// Guard to prevent a user from accessing Login component after she has successfully logged in
router.beforeEach((to, from, next) => {
    // If user is logged in and request routes that requires meta `guest`
    if (Vue.auth.loggedIn() && to.matched.some(record => record.meta.guest)) {
        // we redirect the logged-in user to profile
        next({path: '/dash'});
        // If user is not logged-in and route requiresAuthorize == true
    } else if (!Vue.auth.loggedIn() && to.matched.some(record => record.meta.requiresAuth)) {
        next({path: '/auth/login'});
        // next();
    } else {
        next();
    }
});

/**
 * Export router instance
 */
export default router;