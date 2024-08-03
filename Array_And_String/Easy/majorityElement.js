/**
 * Majority Element
 * 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time (O(n)) and in O(1) space? --> using constant variable?

Approach #1: Map - store the number and the number of encounters 

Approach #2: sorted and iterate from the last index of the array (O(n log n))

Approach #3: constant variable 

const majorityElement = 3
const numOfVisited = 1


numOfVisited <= 1: i++ (move forward)

numOfVisited > 1: record numOfVisted++; 


3,2,3
  ^
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementWrong = function (nums) {
  const dict = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!dict.get(nums[i])) {
      dict.set(nums[i], 1);
    } else {
      dict.set(nums[i], dict.get(nums[i]) + 1);
    }
  }
  let maxValue = 0;
  for (let [key, value] of dict) {
    maxValue = Math.max(maxValue, value);
    console.log(maxValue, value);
    if (dict.get(key) === maxValue) {
      return key;
    }
  }
};

console.log(majorityElementWrong([3, 2, 3])); //3
console.log(majorityElementWrong([2, 2, 1, 1, 1, 2, 2])); //2
console.log(majorityElementWrong([1, 2, 2, 2, 1, 1, 1, 2, 2])); //HEY QUESTION: guess what the output is???? why this approach does not work???? Take a guess... no worries, I have fixed this with the following implementation.

/**
 *
 * @param {number[]} nums
 * @return {number}
 *
 * Explanation:
 * So the reason it is not going show a correct answer is because the maxValue is set within the for of loop. This means the maxValue will also refer to the first key value pair inside of the object and the if statement will also be true.
 *
 * In order to resolve the issue, lets take a look at the following and see
 * what the difference is...
 */
var majorityElement = function (nums) {
  const dict = new Map();
  let maxValue = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (!dict.get(nums[i])) {
      dict.set(nums[i], 1);
    } else {
      dict.set(nums[i], dict.get(nums[i]) + 1);
    }
  }
  const valuesOfKeys = [...dict.values()]; //turn a Map into an Array
  maxValue = Math.max(...valuesOfKeys); //use spread operator to find values of keys
  for (let [key] of dict) { //extract key from the Map
    if (dict.get(key) === maxValue) {
      return key;
    }
  }
};

console.log(majorityElement([3, 2, 3])); //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2
console.log(majorityElement([1, 2, 2, 2, 1, 1, 1, 2, 2])); //2
