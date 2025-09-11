/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = Array(n).fill(0)
    // 1번째 칸 -> climb 1
    dp[0] = 1
    // 2번째 칸 -> climb 1 + 1 or climb 2
    dp[1] = 2
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n - 1]
};