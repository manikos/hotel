import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthPlugin from '../modules/Auth';
import Auth from '../components/auth/Auth.vue';
import Register from '../components/auth/Register.vue';
import Login from '../components/auth/Login.vue';
import Admin from '../components/admin/Admin.vue';
import Dash from '../components/admin/dash/Dash.vue';
import UserIndex from '../components/admin/user/UserManagement.vue';
import UserEdit from '../components/admin/user/UserEdit.vue';

Vue.use(VueRouter);

/**
 * Routes for client app
 * @type {[*]}
 */
const routes = [
    // # Admin routes #
    {
        path: '/admin', component: Admin, redirect: '/admin/dash', meta: {requiresAuth: true} ,
        children: [
            {path: 'dash', name: 'dash' , component: Dash},
            {path: 'user', name: 'user', component: UserIndex},
            {path: 'user/:id/edit', name: 'userEdit', component: UserEdit}
        ]
    },
    // # Auth routes #
    {
        path: '/auth', component: Auth, redirect: '/auth/login', //redirect to prevent direct access to Auth component
        children: [
            {path: 'register', component: Register, meta: {guest: true}},
            {path: 'login', component: Login, meta: {guest: true}},
        ]
    },
];

/**
 * Create router instance for client app
 */
const router = new VueRouter({
    routes
});

/**
 * Define navigation guards
 */
// Prevent a user from accessing Login component after she has successfully logged in
router.beforeEach((to, from, next) => {
    // If user is logged in and request routes that requires meta `guest`
    if (AuthPlugin.loggedIn() && to.matched.some(record => record.meta.guest)) {
        // we redirect the logged-in user to profile
        next({path: '/admin'});
        // If user is not logged-in and route requiresAuthorize == true
    } else if (!AuthPlugin.loggedIn() && to.matched.some(record => record.meta.requiresAuth)) {
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