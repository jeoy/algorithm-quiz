// nums = [1,2,1,3,5,6,4]
//  1 或 5
 /**
  * @param {number[]} nums
  * @return {number}
  */
 var findPeakElement = function(nums) {
     if (nums.length < 2) {
        return 0;
     }
     for (var i = 0; i < nums.length; i++) {
         let pre = nums[i-1];
         let next = nums[i+1];

         if ((pre === undefined || nums[i] > pre) && (nums[i] > next || next === undefined )) {
             return i
         }
     }
 };
