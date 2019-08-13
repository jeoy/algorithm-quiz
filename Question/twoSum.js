/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[target - nums[i]] = i;
        } else {
            result = [map[nums[i]], i];
        }
    }
    return result;
};

var nums = [2, 7, 11, 15],
    target = 9;

console.log(twoSum(nums, target));