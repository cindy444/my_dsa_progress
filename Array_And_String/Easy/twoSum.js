/** TWO SUM
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Approach # 1: O(N2) 

two pointers - same direction

3, 2, 4
^->
   ^->

Two pointers (same direction, this will help to find all possibilities)
Iterate through the array with a pointer to n.length - 1 (second last)
Iterate another pointer through the array to n.length
if sum of two numbers is equal to target, push index of the two numbers into 
the result array
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9)); //expect [0,1]
console.log(twoSum([3, 2, 4], 6)); //expect [1,2]
console.log(twoSum([3, 3], 6)); //expect [0,1]
console.log(twoSum([1, 3, 3, 2], 6)); //expect [1,2]

/*

Hashmap (after watching Neetcode approach which makes it clearer to understand)
So Neetcode uses Hashmap as a way to store index after each value has visited 
target - nums[i]
so you could only iterate through the array once

*/

var twoSumHashmap = function (nums, target) {
  const indexMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (indexMap.get(num) !== undefined) {
      return [indexMap.get(num), i];
    }
    indexMap.set(nums[i], i);
  }
  return null;
};

console.log(twoSumHashmap([2, 7, 11, 15], 9)); //expect [0,1]
console.log(twoSumHashmap([3, 2, 4], 6)); //expect [1,2]
console.log(twoSumHashmap([3, 3], 6)); //expect [0,1]
console.log(twoSumHashmap([1, 3, 3, 2], 6)); //expect [1,2]
