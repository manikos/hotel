/**
 * This is a custom plugin that handles JWT authentication
 *
 * TODO: See https://github.com/auth0-blog/vue-jwt-authentication
 */


const AuthPlugin = {
    setToken: function (token, expiration) {
        localStorage.setItem('authToken', token);
        localStorage.setItem('authTokenExpiration', expiration);
    },

    destroyToken: function () {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authTokenExpiration');
    },

    getToken: function () {
        let token = localStorage.getItem('authToken');
        let expiration = localStorage.getItem('authTokenExpiration');

        if (!token || !expiration)
            return null;

        if (Date.now() > parseInt(expiration)) {
            this.destroyToken();
            return null;
        } else {
            return token;
        }
    },

    loggedIn: function () {
        if (this.getToken())
            return true;
        else
            return false;
    }
};

// Export plugin
export default function(Vue) {
    Vue.auth = AuthPlugin;

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: function() {
                return Vue.auth;
            }
        }
    })
}