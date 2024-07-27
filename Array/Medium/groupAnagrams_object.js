var groupAnagrams = function (strs) {
  //an object to contain the unique string combination in a sorted order
  const anagrams = {};

  /*
    ["eat","tea","tan","ate","nat","bat"]
      ^
    */

  for (let i = 0; i < strs.length; i++) {
    //eat
    const sortedWord = strs[i].split("").sort().join(""); //aet
    console.log(sortedWord);
    console.log("cindy: ", anagrams[sortedWord]);
    if (!Object.hasOwn(anagrams, sortedWord)) {
      anagrams[sortedWord] = [];
    }
    console.log("cindy2: ", anagrams[sortedWord]);
    anagrams[sortedWord].push(strs[i]);
  }
  console.log(anagrams);

  return Object.values(anagrams.sort());

  //First Attempt Failed
  // let result = [];
  // let set = new Set();
  // for (let i = 0; i < strs.length; i++) {
  //     let subArray;
  //     const charArray = strs.split('');
  //     for (let j=0; j < charArray.length; j++) {
  //         if (!set.has(charArray[j])) {
  //             set.add(charArray[j]);
  //         }
  //     }
  //     subArray.push(strs[i])
  // }
  // return
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
