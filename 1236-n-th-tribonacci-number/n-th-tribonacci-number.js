/**
 * @param {number} n
 * @return {number}
 */

var tribonacci = function(n) {
   const tri = Array(38).fill(0)
    tri[0] = 0
    tri[1] = 1
    tri[2] = 1
    
    for (let i = 3; i <= n; i++) {        
        tri[i] = tri[i - 3] + tri[i - 2] + tri[i - 1]
    }    
    return tri[n]
};