/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    // 문제가 요구하는 것
    // k = 1 => "ab"
    // k = 2 => "abab"
    // k = 3 => "ababab"
    // 이게 있는지 찾는 문제
    const length = sequence.length
    let k = 0
    let str = word
    while (str.length <= length) {        
        if (sequence.indexOf(str) === -1) break
        k++
        str += word
    }
    return k
};