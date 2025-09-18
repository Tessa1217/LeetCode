/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length : m}, () => Array.from({length : n}).fill(false))

    for (let i = 1; i < m; i++) {
        grid[i][0] = grid[i][0] + grid[i - 1][0]
    }

    for (let j = 1; j < n; j++) {
        grid[0][j] = grid[0][j] + grid[0][j - 1]
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const from_left = grid[i - 1][j]
            const from_top = grid[i][j - 1]
            grid[i][j] = Math.min(grid[i][j] + from_left, grid[i][j] + from_top)            
        }
    }

    return grid[m - 1][n - 1]
};