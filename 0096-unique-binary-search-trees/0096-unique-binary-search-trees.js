/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const sum = makeBst(n, {})
    return sum
};

function makeBst(n, memo = {}) {
    if (n === 0) return 1;
    if (memo[n] !== undefined) return memo[n]
    let sum = 0;
    for (let i = 1; i <= n; i++) {        
        sum += makeBst(i - 1, memo) * makeBst(n - i, memo);
    }
    memo[n] = sum;
    return sum;
}
