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

const convertToLowerCaseAlphabetList = (list) => {
  //iterate through the list
  //if the character is  not larger than 'z' and smaller than 'a'
  //which means it is in between 'a' and 'z'
  //then push it to newList and return it
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    if (!(list[i] > "z" || list[i] < "a")) {
      newList.push(list[i]);
    }
  }
  return newList;
};

/**
 
### Follow up question: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

unicode characters -- numerical codes based on the character encoding scheme. When comparing characters, numeric codes/values are used ot determine the order. 

ASCII: 
'a' > 'A' --> true
'$' < 'A' --> true

isValidChar - to check if each character after sorting and once we find a
character then discard all the unicode chars. There are two ways: 

(1) RegEx 
(2) Iterate through the array of strings and then removed those that are non-Ascii characters, then sorted and join. 

 */

var isAnagramExcludeUnicode = function (s, t) {
  const sortedS = convertToLowerCaseAlphabetList(s.split("")).sort().join("");
  const sortedT = convertToLowerCaseAlphabetList(t.split("")).sort().join("");
  return sortedS === sortedT;
};

console.log(
  isAnagramExcludeUnicode("aKK##na$$$$$907gram", "nagaERTWERT#$%#$ram")
); //expect true
console.log(isAnagramExcludeUnicode("ABCra#$>t", "car")); //expect false
