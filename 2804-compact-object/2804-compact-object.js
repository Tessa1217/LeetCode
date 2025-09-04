/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // object 프로토타입 가지고 있지 않은 경우
    if (!obj || typeof obj !== 'object') return obj    
    // Array인 경우
    if (Array.isArray(obj)) return obj.filter((e) => !!e).map(compactObject)
    // Object    
    for (let p in obj) {
        const value = typeof obj[p] !== 'object' ? obj[p] : compactObject(obj[p])
        if (!value) {
            delete obj[p]
        } else {
            obj[p] = value
        }
    }
    return obj
};