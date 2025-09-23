/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_sum = nums[0]
    let sum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i])
        max_sum = Math.max(max_sum, sum)
    }
    return max_sum
};