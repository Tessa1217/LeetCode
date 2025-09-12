/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    let answer = 0
    let count = Array.from({length : 24}).fill(0)
    for (let hour of hours) {
        const idx = hour % 24
        answer += count[(24 - idx) % 24]
        count[hour % 24]++
    }
    return answer
};