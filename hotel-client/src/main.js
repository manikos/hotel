import Vue from 'vue';
import Router from './modules/Router';
import Http from './modules/Http';
import Auth from './modules/Auth';
import Store from './modules/Store';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';

// Use modules
Vue.use(Element);

// Make alias to Vue prototype
Vue.prototype.$http = Http;
Vue.prototype.$auth = Auth;
Vue.prototype.$store = Store;

//expose axios to global object
// window.api = api;

//The root Vue instance
new Vue({
    router: Router,
    template: '<App/>',
    components: {App},
    data: Store // our data object is now store
}).$mount('#app');