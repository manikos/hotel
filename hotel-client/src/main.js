// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from './routes';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Auth from './plugins/Auth';
import store from './store';
import axios from 'axios';

// Use plugins
Vue.use(Auth);
Vue.use(Element);
// Vue.use(VueResource);

//--------------------------------axios----------------------------------//
//expose axios to global object
window.axios = axios;

// Modify every HTTP request by sending JWT token as a header
window.axios.defaults.headers.common = {
    'Authorization': 'JWT ' + Vue.auth.getToken()
};

// Configure the baseURL (`baseURL` will be prepended to `url` unless `url` is absolute)
window.axios.defaults.baseURL = process.env.API; //TODO: append the trailing slash

// Add modified axios instance to Vue prototype so that to be available globally via Vue instance
Vue.prototype.$http = window.axios;
//-----------------------------------------------------------------------//

// Make an alias of store and axios to access it from every Vue instance/component
Vue.prototype.$store = store;

// The root Vue instance
new Vue({
    el: '#app',
    router: Router,
    template: '<App/>',
    components: {App},
    data: store // our data object is now store
});

//
// // 4. Create and mount the root instance.
// const app = new Vue({
//     router
// }).$mount('#app');