import FormErrors from "./FormErrors";
import __ from "./helpers";
import http from "./http";

class Form {
    constructor(fields) {
        this.initData = __.deepClone(fields);
        this.data = fields;
        this.errors = new FormErrors
    }

    /**
     * Submits the form to the specified entry point
     *
     * @param method: the HTTP verb
     * @param url: the entry point
     */
    submit(method, url) {

        return new Promise((resolve, reject) => {
            http[method](url, this.data)
                .then(res => {
                    this.onSuccess(res);
                    resolve(res); // when everything is ok, resolve promise (trigger .then()) and delegate back
                })
                .catch(err => {
                    this.onFail(err);
                    //todo try/catch err.response is undefined
                    reject(err.response.data); // pass the errors to the catch callback
                })
        });
    }

    /**
     * Wrapper for submitting a "PUT" request
     * @param url
     */
    put(url) {
        return this.submit('put', url);
    }

    /**
     * Wrapper for submitting a "POST" request
     * @param url
     */
    post(url) {
        return this.submit('post', url);
    }

    /**
     * Re-initialize form inputs and clear validation errors
     */
    reset() {
        // Re-initialize the form fields
        this.data = __.deepClone(this.initData);
        // Clear all validation errors
        this.errors.clear();
    }

    /**
     * Handle form's submission success
     *
     */
    onSuccess(response) {
        // reset the form
        this.reset();
    }

    /**
     * Handle form's submission failure
     *
     */
    onFail(error) {
        if (typeof error.response === 'undefined') {
            //The python dev server sis not running
            alert(error.message);
        } else {
            switch (error.response.status) {
                case 0:
                    alert('Python server is not running bro!');
                    break;
                case 400:
                    // record validation errors
                    this.errors.set(error.response.data);
                    break;
                default:
                    console.log(`Form submission failed with error ${error.response.status}: ${error.message}`)
            }
        }
    }
}

export default Form