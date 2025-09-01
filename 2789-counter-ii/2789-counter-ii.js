/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    // init value for reset
    const initialValue = init
    // count variable
    let count = initialValue
    return {
        increment : function() {
            count += 1
            return count
        },
        reset : function() {
            count = initialValue;
            return count
        },
        decrement : function() {
            count -= 1
            return count
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */