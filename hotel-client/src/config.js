import Vue from "vue";
import AuthPlugin from "./plugins/Auth";
// import VueResource from "vue-resource";

Vue.use(AuthPlugin);
// Vue.use(VueResource);

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
        // ... so we are pre-pending the local API URL + the trailing slash '/'
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


