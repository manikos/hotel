/**
 * In case of non-array inputs, the errors keys are in the form of "filedName"
 * In case of array inputs, the errors keys are in the form of "parentFieldName.0.filedName"
 */
class FormErrors {
    constructor() {
        this.errors = {};
    }

    /**
     * Get error description for given form field
     *
     * @returns {string} - The validation error description
     * @param name {string} - The name of the error
     */
    get(name) {
        if (this.errors[name])
            return this.errors[name][0];
    }

    /**
     * Record the validation errors
     *
     * @param errors {Object} - The $errors object send by server
     */
    set(errors) {
        this.errors = errors;
    }

    /**
     * Check if a given error name exists
     *
     * @returns {boolean} - True if the error with `name` exists
     * @param name {string} - The name of the error
     */
    has(name) {
        // // Check array-based form inputs validation names
        // if (/.\*+\./g.test(name)) {
        //     // create a pattern to check if there are any names that match
        //     let pattern = new RegExp(name.split('.')[0] + '.[0-9]+\.' + name.split('.')[2] + '$');
        //     for (let err in this.names) {
        //         // console.log(err);
        //         // console.log(pattern.test(err));
        //         if (pattern.test(err))
        //             return true;
        //     }
        // }
        return this.errors.hasOwnProperty(name);
    }

    /**
     * Check if any errors exist
     *
     * @returns {boolean}
     */
    hasAny() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Clear the error(s)
     *
     * @param name <string>: can be omitted to clear all errors
     */
    clear(name) {
        if (name)
            delete this.errors[name];
        else
            this.errors = {};
    }
}

export default FormErrors;