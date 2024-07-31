/**
 * Valid Palindrome
 * 
 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}

race e car
^

r: 0
a: 0
c: 0
e: 0

Approach: 
Hashmap O(N)
odd: one character left 
even: 0 character left 
 

pseudocode: 
  a map to store the character and numbers of encountered
  split the string and turn it into an array //convertToLowerCaseAlphabet method
  iterate through the array 
  if char is not in the map, add it in. 
  increment by 1 
  if char is in the map, and has value > 0, 
  decrement by 1 
  if char is in the map, and has value < 1, 
  increment by 1

  review the hashmap 
  if even number s, return true, when the sum is 0
  if odd number s, return true when the sum is 1
  else return false  
 */

const convertToLowerCaseAlphabet = (list) => {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    if (!(list[i] > "z" || list[i] < "a")) {
      newList.push(list[i]);
    }
  }
  return newList;
};

var isPalindrome = function (s) {
  const dict = new Map();
  const lowerCaseChars = convertToLowerCaseAlphabet(
    s.trim().toLowerCase().split("")
  );
  if (lowerCaseChars.length === 0) {
    //empty string
    return true;
  }
  for (let i = 0; i < lowerCaseChars.length; i++) {
    let currentCharValue = dict.get(lowerCaseChars[i]);
    if (currentCharValue === undefined) {
      dict.set(lowerCaseChars[i], 1);
    } else if (currentCharValue > 0) {
      dict.set(lowerCaseChars[i], currentCharValue - 1);
    } else if (currentCharValue < 1) {
      dict.set(lowerCaseChars[i], currentCharValue + 1);
    }

    let sum = 0;
    for (let value of dict.values()) {
      sum += value;
    }
    if (sum === 0 && lowerCaseChars.length % 2 === 0) {
      //even
      return true;
    }
    if (sum === 1 && lowerCaseChars.length % 2 === 1) {
      //odd
      return true;
    }
    return false;
  }
  return null;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false
console.log(isPalindrome(" ")); //true

/**
 * 
//Second Approach - use Split into Half Method
// Use more space 
 */

const isOdd = (num) => {
  return num % 2 !== 0;
}

var isPalindromeDivideApproach = function(s) {
  //split string and exclude all invalid values
  const splitString = convertToLowerCaseAlphabet(s.trim().toLowerCase().split(''));

  //first half
  const firstHalfEndPoint =  Math.floor(splitString.length / 2);
  const firstHalf = splitString.slice(0, firstHalfEndPoint); 

  //second half
  const secondHalfStartPoint = isOdd(splitString.length) ? firstHalfEndPoint + 1 : firstHalfEndPoint;
  const secondHalf = splitString.slice(secondHalfStartPoint, splitString.length);

  //sort + compare
  const sortedFirstHalfString = firstHalf.sort().join('');
  const sortedSecondHalfString = secondHalf.sort().join('');
  return sortedFirstHalfString === sortedSecondHalfString;
};


console.log(isPalindromeDivideApproach("A man, a plan, a canal: Panama")); //true
console.log(isPalindromeDivideApproach("race a car")); //false
console.log(isPalindromeDivideApproach(" ")); //true


/**
 * 
// Third Approach - use Two Pointers + while loop
// left pointer and right pointer, they will move closer to each other 
// until right pointer is larger than the left pointer 
// compare the values, if find any difference return false
// else continue until while loop ends and return true

 */

var isPalindromeTwoPointersApproach = function(s) {
  //split string and exclude all invalid values
  const splitString = convertToLowerCaseAlphabet(s.trim().toLowerCase().split(''));
  let left = 0;
  let right = splitString.length - 1;
  while (left < right) {
    if (splitString[left] !== splitString[right]) {
      return false; 
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindromeTwoPointersApproach("A man, a plan, a canal: Panama")); //true
console.log(isPalindromeTwoPointersApproach("race a car")); //false
console.log(isPalindromeTwoPointersApproach(" ")); //true


/**
 * The below is the solution AI has provided. So much simplier than the three approaches I have tried above =.=!!!
 */
function isPalindrome(s) {
  const sClean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return sClean === sClean.split("").reverse().join("");
}
