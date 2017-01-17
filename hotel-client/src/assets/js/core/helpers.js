/**
 * A module that facilitates helpful methods used by other modules
 */

const __ = {

    /**
     * Deep clone an object
     *
     * @param obj
     */
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
        // let clone;
        // switch (typeof obj) {
        //     case "object":
        //         if (obj === null) {
        //             // null => null
        //             clone = null;
        //         } else {
        //             switch (toString.call(obj)) {
        //                 case "[object Array]":
        //                     // It's an array, create a new array with
        //                     // deep copies of the entries
        //                     clone = obj.map(deepClone);
        //                     break;
        //                 case "[object Date]":
        //                     // Clone the date
        //                     clone = new Date(obj);
        //                     break;
        //                 case "[object RegExp]":
        //                     // Clone the RegExp
        //                     clone = new RegExp(obj);
        //                     break;
        //                 // ...probably a few others
        //                 default:
        //                     // Some other kind of object, deep-copy its
        //                     // properties into a new object
        //                     clone = Object.keys(obj).reduce(function(prev, key) {
        //                         prev[key] = deepClone(obj[key]);
        //                         return prev;
        //                     }, {});
        //                     break;
        //             }
        //         }
        //         break;
        //     default:
        //         // It's a primitive, copy via assignment
        //         clone = obj;
        //         break;
        // }
    }
};

export default __