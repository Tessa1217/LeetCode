/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let idx = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[idx]) {
            idx++
        }
    }
    return s.length === idx;
};