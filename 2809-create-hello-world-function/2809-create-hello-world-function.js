/**
 * @return {Function}
 */
var createHelloWorld = function() {
    const returnString = "Hello World"
    return function(...args) {
        return returnString
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */