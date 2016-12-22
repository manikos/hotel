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