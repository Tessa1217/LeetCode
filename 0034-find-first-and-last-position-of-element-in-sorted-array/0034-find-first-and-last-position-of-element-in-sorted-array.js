/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const result = [-1, -1]
    let lower = lowerBound(nums, target)
    if (lower === -1) return result
    result[0] = lower
    while (lower < nums.length && nums[lower] === target) {
        lower++
    } 
    result[1] = lower - 1
    return result
};

function lowerBound(array, target) {
    let low = 0
    let high = array.length 
    while (low < high) {
        let mid = low + Number.parseInt((high - low) / 2)
        if (target <= array[mid]) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return array[high] !== target ? -1 : high
}
