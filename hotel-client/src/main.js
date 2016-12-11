// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import  Router from './routes'

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