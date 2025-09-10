/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function(students, mentors) {
    const m = students.length
    let max_sum = 0
    const perm = permutation(m)
    perm.forEach((p) => {
        let cur_sum = 0
        for (let i = 0; i < m; i++) {
            cur_sum += calculateCompatibility(students[i], mentors[p[i]])
        }
        max_sum = Math.max(max_sum, cur_sum)
    })
    return max_sum
};

// mentor 인덱스 permutation
function permutation(m) {
    const result = []
    // 1, 2, 3 | 1, 3, 2 | 2, 1, 3 | 2, 3, 1 | 3, 1, 2 | 3, 2, 1
    function permute(cur) {
        if (cur.length === m) {
            result.push([...cur])
            return
        }
        for (let i = 0; i < m; i++) {
            if (cur.includes(i)) continue            
            cur.push(i)
            permute(cur)
            cur.pop()            
        }
    }
    permute([])
    return result
}

function calculateCompatibility(student, mentor) {
    return student.reduce((a, s, i) => {
        a += (s === mentor[i]) ? 1 : 0
        return a
    }, 0)
}