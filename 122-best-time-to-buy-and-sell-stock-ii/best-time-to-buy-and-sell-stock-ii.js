/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // 전날 보다 증가했다면
        // 증가분 만큼 max profit에 더하기
        const prev = prices[i - 1]
        const cur = prices[i]
        maxProfit += cur > prev ? cur - prev : 0
    }

    return maxProfit;
};