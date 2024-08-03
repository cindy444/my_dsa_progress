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

Square (time with self) and then Sort

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquaresApproachOne = function (nums) {
  return nums.map((num) => num * num).sort((a, b) => a - b);
};

console.log(sortedSquaresApproachOne([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
console.log(sortedSquaresApproachOne([-7, -3, 2, 3, 11])); //[4,9,9,49,121]

/**
Approach #2: Two Pointers (pointing at two different points in the array)

Two pointers (indexes):
p1 = 0
p2 = arr.length - 1

-4,-1,0,3,10
       
-4 * -4 = 16 (large)
-1 * -1 = 1
0 * 0 = 0 (small)
3 * 3 = 9
10 * 10 = 100 (large)

PATTERN: As we go toward the middle, it will become smaller.

p1 < p2
push p2
then push p1

KEY TO REMEMBER: 
1. the pointers are always indexes, please do not get confused they are values
2. two pointers problem in the opposite direction is usually in the while loop
3. you can always push and reverse it and it will still count of O(N) time, since they are two different iterations.
4. Similar pattern as "valid palindrome"!! 
 */

var sortedSquares = function (nums) {
  let p1 = 0;
  let p2 = nums.length - 1;
  let result = [];
  while (p1 <= p2) {
    if (p1 < p2) {
      result.push(nums[p2] * nums[p2]);
    }
    result.push(nums[p1] * nums[p1]);
    p1++;
    p2--;
  }
  return result.reverse();
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); //[4,9,9,49,121]
