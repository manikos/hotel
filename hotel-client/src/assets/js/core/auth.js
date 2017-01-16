/**
 * Authentication module
 * @type {{setToken: auth.setToken, destroyToken: auth.destroyToken, getToken: auth.getToken, loggedIn: auth.loggedIn}}
 */
const auth = {
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
export default auth