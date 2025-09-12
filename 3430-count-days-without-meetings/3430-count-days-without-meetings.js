/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a, b) => {return a[0] - b[0]})
    const merge_meeting = [meetings[0]]
    // merge interval
    for (let i = 1; i < meetings.length; i++) {
        const cur_length = merge_meeting.length
        const [s, e] = meetings[i]
        const [ls, le] = merge_meeting[cur_length - 1]
        if (s <= le) {
            merge_meeting[cur_length - 1] = [Math.min(s, ls), Math.max(e, le)]
        } else {
            merge_meeting.push(meetings[i])
        }
    }

    let meeting_cnt = 0
    merge_meeting.forEach(([s, e]) => {
        meeting_cnt += (e - s + 1)
    })

    return days - meeting_cnt
};