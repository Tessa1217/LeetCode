/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    const length = cost.length;

    if (length === 2) {
        return Math.min(cost[0], cost[1]);
    }
    
    const dp = Array.from({ length }, () => 0)

    dp[0] = cost[0]
    dp[1] = cost[1]

    // 1칸 전 + 현재 칸, 2칸 전 + 현재 칸 비교
    for (let i = 2; i < length - 1; i++) {        
        dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);        
    }

    // 마지막 칸은 2칸 전일 경우에는 밟아야 하기 때문에 더하고
    // 전칸일 경우에는 2칸 갈 수 있으니까 더하지 않음
    return Math.min(dp[length - 2], dp[length - 3] + cost[length - 1]);
};