/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    const days = prices.length
    const dp = Array.from({length : days}, () => Array(2).fill(0))

    // 첫번째 주식
    dp[0][0] = 0 // 주식 사지 않음
    dp[0][1] -= prices[0] // 주식 삼
    
    for (let i = 1; i < days; i++) {
        // 주식을 안 들고 있는 날
            // i - 1번째 주식도 구매하지 않고, i번째 주식도 구매X
            // i - 1번째 주식 구매분을 i날에 판 경우        
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]); 
        // 주식 들고있는 날
            // i - 1번째 주식을 계속 들고 있음
            // i - 1번째 주식을 구매하지 않은 상태에서 i날에 i번째 주식 구매
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }

    return Math.max(dp[days - 1][0], dp[days - 1][1]);    
};