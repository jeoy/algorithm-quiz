/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    return [searchLeft(nums, target), searchRight(nums, target)]
};

var searchLeft = function (nums, target) {

    function find(left, right) {
        if (left >= right) {
            return left;
        }
        minInd = parseInt((right + left) / 2);
        if (nums[minInd] < target) {
            console.log('right', '[', minInd + 1, ', ', right, ']');
            return find(minInd + 1, right);
        } else {
            return find(left, minInd)
        }
    }

    return find(0, nums.length);
};

var searchRight = function (nums, target) {

    function find(left, right) {
        if (left >= right) {
            return right;
        }
        minInd = parseInt((right + left) / 2);
        if (nums[minInd] > target) {
            console.log('left', '[', left, ', ', minInd - 1, ']');
            return find(left, minInd);
        } else {
            return find(minInd + 1, right)
        }
    }

    return find(0, nums.length) - 1;
};

console.log(searchRange([1], 1));
