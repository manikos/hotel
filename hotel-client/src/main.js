// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import  Router from './routes'
import VueResource from 'vue-resource';
Vue.use(VueResource);
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(Element);

/**
 * ---------------------
 * Custom plugin Imports
 * ---------------------
 */
import Auth from './plugins/Auth';
Vue.use(Auth);

import './config';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: Router, //mount the route instance
    template: '<App/>',
    components: {App}
});

//
// // 4. Create and mount the root instance.
// const app = new Vue({
//     router
// }).$mount('#app');