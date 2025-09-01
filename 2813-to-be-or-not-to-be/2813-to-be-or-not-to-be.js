/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const target = val
    return {
        toBe : (value) => {
            if (target === value) return true
            throw new Error("Not Equal")            
        },
        notToBe : (value) => {
            if (target !== value) return true
            throw new Error("Equal")
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */