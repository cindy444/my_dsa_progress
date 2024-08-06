/** Longest Palindrome
 Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
palindrome
 that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.


Prerequisites: 
1) case sensitive 
2) characters only 

abccccdd
a: 1
B: 1
c: 4
d: 2

acBcdcdC
B: 1
C: 1
a: 1
c: 3
d: 2

longest palindrome 

abccccdd
^



 */

/**
 * @param {string} s
 * @return {number}
 * 
 * Approach 1 not yet resolved
 */
var longestPalindrome = function (s) {
  const dict = new Map();
  const s_array = s.split("");
  for (let i = 0; i < s_array.length; i++) {
    if (!dict.has(s.array[i])) {
      dict.set(s_array[i], 0);
    }
    dict.set(s_array[i]);
  }
};

console.log(longestPalindrome("abccccdd")); //7 "dccaccd"
console.log(longestPalindrome("a")); //1
console.log(longestPalindrome("acBcdcdC")); //5
