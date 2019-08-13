/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => {
        return a - b;
    });
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) return result;
        while (nums[i] === nums[i - 1]) {
            i++;
        }
        let m = i + 1;
        let n = nums.length - 1;
        while (m < n) {
            if (nums[m] + nums[n] + nums[i] > 0) {
                n--;
            } else if (nums[m] + nums[n] + nums[i] < 0) {
                m++;
            } else {
                result.push([nums[i], nums[m], nums[n]]);
                n--;
                m++;
                while (nums[m] === nums[m - 1]) {
                    m++;
                }
                while (nums[n] === nums[n + 1]) {
                    n--;
                }
            }
        }
    }
    return result;
};