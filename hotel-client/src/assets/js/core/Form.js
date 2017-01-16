import FormErrors from "./FormErrors";
class Form {
    constructor(fields) {
        this.data = fields;
        this.errors = new FormErrors
    }

    /**
     * Returns an object that contains all form inputs
     *
     * @returns {*}
     */
    getData() {
        return this.data;
    }

    /**
     * Submits the form to the specified entry point
     *
     * @param method: the HTTP verb
     * @param url: the entry point
     */
    submit(method, url) {
        //TODO make a post(), put() wrapper
    }

    /**
     * Re-initialize form inputs and clear validation errors
     */
    reset() {
        // Re-initialize the form inputs depending on the initial data

        // Clear all validation errors
        // this.errors.clear();
    }
}

export default Form