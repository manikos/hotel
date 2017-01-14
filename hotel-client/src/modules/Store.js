/**
 * Shared state
 * @type {{state: {authUser: {firstname: string, lastname: string}}, updateName: ((name))}}
 */
const store = {
    state: {
        authUser: {
            firstname: '',
            lastname: ''
        }
    },
    // Methods to interact with state
    updateName(name) {
        this.state.authUser.lastname = name;
    }
};

export default store;