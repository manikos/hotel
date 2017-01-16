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
     * @param errorName
     */
    get(errorName) {
        if (this.errors[errorName])
            return this.errors[errorName][0];
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
     * The given error may be in the format of:
     *
     * @param error {String | Array | null} - An error name /or an array of error names
     * @returns {boolean}
     */
    has(error) {
        if (error) {
            // Check array-based form inputs validation errors
            if (/.\*+\./g.test(error)) {
                // create a pattern to check if there are any errors that match
                let pattern = new RegExp(error.split('.')[0] + '.[0-9]+\.' + error.split('.')[2] + '$');
                for (let err in this.errors) {
                    // console.log(err);
                    // console.log(pattern.test(err));
                    if (pattern.test(err))
                        return true;
                }
            }
            return this.errors.hasOwnProperty(error);
        } else {
            return Object.keys(this.errors).length > 0;
        }
    }

    /**
     * Clear the error(s)
     * -----------------------------------------------------------
     * WARNING:
     * In case of clear() method the @param is NOT the error name
     * but the name of the $event.target input field.
     * Thus, we have to check the name format of the argument
     * to figure out which error should we clear
     * -----------------------------------------------------------
     *
     * @param errorName
     */
    clear(errorName) {
        if (errorName)
            delete this.errors[errorName];
        else
            this.errors = {};
    }
}

export default FormErrors;