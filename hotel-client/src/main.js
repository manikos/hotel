// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Router from "./routes";
import VueResource from "vue-resource";
import Element from "element-ui";
import "element-ui/lib/theme-default/index.css";
import Auth from "./plugins/Auth";
import "./config";
import store from "./store";

// Use plugins
Vue.use(Auth);
Vue.use(Element);
Vue.use(VueResource);

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