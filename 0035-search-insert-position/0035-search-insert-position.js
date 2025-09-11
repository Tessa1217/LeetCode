/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return lowerBound(nums, target)    
};

function lowerBound(nums, target) {
    let low = 0
    let high = nums.length  

    while (low < high) {
        const mid = low + Number.parseInt((high - low) / 2)
        if (target <= nums[mid]) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return high
}