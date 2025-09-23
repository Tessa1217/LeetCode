/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length;
    let jumps = 0;
    let farthest = 0;
    let end = 0;

    for (let i = 0; i < n - 1; i++) {
        // 현재 구간 시점으로 가장 멀리 갈 수 있는 지점 구하기
        farthest = Math.max(farthest, i + nums[i])
        // 만약 i가 현재 점프 구간 종료 지점이랑 일치한다면
        if (i === end) {
            jumps++;
            end = farthest; // 다음 점프 구간의 끝으로 재갱신
        }
    }

    return jumps;
};