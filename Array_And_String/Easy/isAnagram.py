'''
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
'''


def isAnagram(s, t): 
    sorted_s = "".join(sorted(s))
    sorted_t = "".join(sorted(t))
    return sorted_s == sorted_t

print(isAnagram("anagram", "nagaram")) #expect True
print(isAnagram("rat", "car")) #expect False 
print(isAnagram("ra#t", "car")) #expect True #TODO