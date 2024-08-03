/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


Approach #1: iterate through the array and squaring them, and then sorted them in a new array (O(N) to square + O(n log n) to sort)

-4,-1,0,3,10

-4 * -4
-1 * -1

Square (time with self) and then Sort 


Approach #2: ??? Follow Up approach...

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Approach #1
 */
var sortedSquares = function (nums) {
  return nums.map((num) => num * num).sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); //[4,9,9,49,121]
