/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // if the length of array is 0, return init
    if (nums.length === 0) return init
    // reduce values
    let reducedValue = init
    nums.forEach((n) => reducedValue = fn(reducedValue, n))
    return reducedValue
};