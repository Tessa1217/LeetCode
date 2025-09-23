/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length - 1
    const n = obstacleGrid[0].length - 1
    // 시작점 자체가 장애물이거나 corner가 장애물이라면
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m][n] === 1) return 0 // 도달 불가

    const dp = Array.from({length : m + 1}, () => Array.from({length : n + 1}, () => 0))

    // 시작점
    dp[0][0] = 1

    // 가로 세로 첫 줄은 어차피 오른쪽 또는 아래쪽으로 one path
    for (let i = 1; i <= m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i - 1][0]
    }

    for (let i = 1; i <= n; i++) {
        dp[0][i] = obstacleGrid[0][i] === 1 ? 0 : dp[0][i - 1]
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i][j - 1] + dp[i - 1][j]
        }
    }

    return dp[m][n];

};