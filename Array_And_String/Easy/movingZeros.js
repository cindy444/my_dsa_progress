/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1


0,1,0,3,12,0
^
slice this number 

 */
/** Trial #1
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], i);
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
    console.log(i);
  }
  return nums;
};

console.log(moveZeroes([0,1,0,3,12])); //[1,3,12,0,0]
console.log(moveZeroes([1, 0, 0, 3, 12])); //[1,3,12,0,0] <-- this case is not yet solved. 
console.log(moveZeroes([0])); //[0]

/**
 * Second Trial + Go over some resources online
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        nums.splice(i,1);
        zeroCount++;
        i--;
      }
    }
    while (zeroCount > 0) {
      nums.push(0);
      zeroCount--;
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12])); //[1,3,12,0,0]
console.log(moveZeroes([1,0,0,3,12])); //[1,3,12,0,0]
console.log(moveZeroes([0])); //[0]

