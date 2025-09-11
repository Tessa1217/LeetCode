/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1'
    return stringHelper(freqHelper(countAndSay(n - 1)))
};

// const helper = (digit_str) => {
//     const rle_str_arr = []
//     const freqCnt = () => {
//         const result = []
//         result.push([digit_str[0], 1])
//         for (let i = 1; i < digit_str.length; i++) {
//             if (digit_str[i] !== digit_str[i - 1]) {
//                 result.push([digit_str[i], 0])
//             }
//             result[result.length - 1][1]++
//         }
//         return result
//     }
//     // frequency counting
//     const frequency_array = freqCnt()
//     for (const [str, freq] of frequency_array) {
//         rle_str_arr.push(freq.toString().concat(str))
//     }
//     return rle_str_arr.join("")
// }

function freqHelper(digit_str) {
    const result = []
    result.push([digit_str[0], 1])
    for (let i = 1; i < digit_str.length; i++) {
        if (digit_str[i] !== digit_str[i - 1]) {
            result.push([digit_str[i], 0])
        }
        result[result.length - 1][1]++
    }
    return result
}

function stringHelper (array) {
    return array.map(([str, freq]) => String(freq).concat(str)).join("")
} 