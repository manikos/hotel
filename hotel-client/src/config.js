// THIS FILE CONTAINS THE CONFIGURATION OPTIONS FOR THE WHOLE PROJECT
// IT CONFIGURES THE *VUE INSTANCE* SO IT APPLIES GLOBALLY
// TODO: consider using a better way for using Vue instance (if importing no caching)....
import Vue from "vue";
import VueResource from "vue-resource";
import AuthPlugin from "./plugins/Auth"; // Import also Auth plugin to use it with interceptors
Vue.use(VueResource);
Vue.use(AuthPlugin);

/**
 * HTTP REQUEST / RESPONSE CONFIG
 */
// Process requests/responses globally
Vue.http.interceptors.push((request, next) => {

    /**
     * MODIFY REQUEST
     */

    /**
     * Define shortcuts for local API http calls
     * -------------------------------------------
     */
    // We assume that if the $URL$ starts with '/' we are making a call to LOCAL server
    if (request.url[0] === '/') {
        // ... so we are pre-pending the local API URL
        request.url = process.env.API + request.url + '/';
    }
    // Otherwise, if the URL starts with http(s)://
    // we assume we are making a call to an external API

    /**
     * Attach Authorization JWT to every request to local API
     * ------------------------------------------------------
     */
    let token = Vue.auth.getToken();
    if (token)
        request.headers.set('Authorization', 'JWT ' + token);

    /**
     * MODIFY RESPONSE
     * -----------------------
     */
    next(response => {
        // TODO: iterate over hte validation errors from API
        // response.body.errors.forEach( error => {
        //     console.log(error);
        // });
    });
});


