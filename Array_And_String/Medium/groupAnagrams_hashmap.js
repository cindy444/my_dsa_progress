/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

commonality of these words- they all share the same characters 

b, a, t  -> a, b, t
["bat"] -> ["abt"]

n, a, t  -> a, n, t
["nat","tan"] -> ["ant", "ant"]

e, a, t -> a, e, t
["ate","eat","tea"] -> ["aet", "aet", "aet"]

As long as we know the order, we should be able to push the 
original word to the sub-array before we push it to the result array


Basic Hashmap in Javascript 
Create a map: 
const map = new Map(); 

Add key-value to map: 
map.set(key, value);

Check map has key or not: 
map.has(key);

Get value by key: 
map.get(key); 

Iterating over key-value pairs using for...of loop
for (let [key, value] of myMap) {
  console.log(key + ' = ' + value);
}

// Deleting a key-value pair from the Map
myMap.delete(2);

clear the map
myMap.clear();


Approaches
split these words out 
Sort all of them so they all look the same 
if we found the matching sorted word, we will push it to 
the array. 
Keep a dictionary to be used for comparing each word during iteration 
and push it to the right key in the dictionary if the 
sorted order of the word matches up with the key of the dictionary 

*/

const anagrams = (strs) => {
  const dictionary = new Map();
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    // lets sort the first word `eat` => `aet`
    const sortedWord = strs[i].split("").sort().join("");
    //check if the dictionary has the key, currently map = {}
    //if it does not have the key, then we will add to the dictionary
    if (!dictionary.has(sortedWord)) {
      dictionary.set(sortedWord, []);
    }
    // if the dictionary has the key,
    // then we will push the non-sorted word to the key (sorted word)
    let found = dictionary.get(sortedWord);
    found.push(strs[i]);
    dictionary.set(sortedWord, found);
  }
  //go through the map with for of and then push them
  for (let [key, value] of dictionary) {
    result.push(value);
  }
  return result;
};

console.log(anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(anagrams([""]));
console.log(anagrams(["a"]));
