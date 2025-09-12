/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    let answer = 0
    const countMap = new Map()
    for (let hour of hours) {
        const idx = hour % 24
        answer += countMap.get((24 - idx) % 24) || 0
        countMap.set(idx, (countMap.get(idx) || 0) + 1)
    }
    return answer
};