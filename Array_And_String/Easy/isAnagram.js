/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


O(logN)
sorted and then do comparison between two strings 

after sorting all the unicode will be pushed to the beginning 

One way: 
isValidChar - to check if each character after sorting and once we find a
character then discard all the unicode chars
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");
  return sortedS === sortedT;
};

console.log(isAnagram("anagram", "nagaram")); //expect true
console.log(isAnagram("rat", "car")); //expect false
console.log(isAnagram("ra#$>t", "car")); //expect true #TODO: followup question!!
