/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length;
    let jumps = 0;
    let farthest = 0;
    let end = 0;

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i])
        if (i === end) {
            jumps++;
            end = farthest;
        }
    }

    return jumps;
};