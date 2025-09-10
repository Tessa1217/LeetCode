/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function(students, mentors) {
    const m = students.length
    const score = Array.from({ length: m }, () => Array(m).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            score[i][j] = calculateCompatibility(students[i], mentors[j])
        }
    }
    const dp = new Array(1 << m).fill(0)
    for (let mask = 1; mask < (1 << m); mask++) {
        const i = bitCount(mask) - 1
        for (let j = 0; j < m; j++) {
            if (mask & (1 << j)) {
                dp[mask] = Math.max(dp[mask], dp[mask ^ (1 << j)] + score[i][j])
            }
        }
    }

    return dp[(1 << m) - 1]
};

function bitCount(x) {
    let cnt = 0
    while (x) {
        cnt += x & 1
        x >>= 1
    }
    return cnt
}

function calculateCompatibility(student, mentor) {
    return student.reduce((a, s, i) => {
        a += (s === mentor[i]) ? 1 : 0
        return a
    }, 0)
}