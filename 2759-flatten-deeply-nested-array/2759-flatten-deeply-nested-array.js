/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {    
    const flatten = (element, depth) => {
        // flatten 할 depth가 넘었거나 배열이 아닌 경우
        if (depth > n || !Array.isArray(element)) return [element]        
        const result = []
        element.forEach((elem) => {
            result.push(...flatten(elem, depth + 1))
        })
        return result
    }
    return flatten(arr, 0)
};