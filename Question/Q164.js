/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let maxGap = 0;
    if (nums.length < 2) {
        return maxGap;
    }
    nums.sort((a, b) => {
        return a - b;
    });

    for (var i = 0; i < nums.length - 1; i++) {
        let gap = nums[i + 1] - nums[i];
        if (gap > maxGap) {
            maxGap = gap;
        }
    }
    return maxGap
};
