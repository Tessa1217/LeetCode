/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (!digits) return []

    const comb_length = digits.length

    // 글자 숫자 map
    const digitmap = {
        "2" : ["a", 'b', 'c'],
        "3" : ['d', 'e', 'f'],
        '4' : ['g', 'h', 'i'],
        '5' : ['j', 'k', 'l'],
        '6' : ['m', 'n', 'o'],
        '7' : ['p', 'q', 'r', 's'],
        '8' : ['t', 'u', 'v'],
        '9' : ['w', 'x', 'y', 'z']
    }

    const result = []

    function makeCombination(cur_idx, cur) {
        if (cur.length === comb_length) {
            result.push(cur.join(""))
            return
        }
        const num = digits[cur_idx]
        // 1인 경우에는 mapping 되지 않음
        if (!num) return
        const letters = digitmap[num]
        letters.forEach((l) => {
            const next = [...cur, l]
            makeCombination(cur_idx + 1, next)
        })
    }

    makeCombination(0, [])

    return result
};