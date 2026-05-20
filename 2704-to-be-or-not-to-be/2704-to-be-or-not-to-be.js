/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let obj = {
        toBe: function(value) {
            if (val !== value) {
                throw new Error("Not Equal");
            }
            return true; 
        }, 

        notToBe: function(value) {
            if (val === value) { 
                throw new Error("Equal");
            }
            return true; 
        }
    };

    return obj; 
};


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
//  */