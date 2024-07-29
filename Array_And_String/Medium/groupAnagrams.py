# Group Anagrams in Python 
# the problem is to group similar characters together and place them into an array 
# iteration through the array is needed 
# we need a place to store the sorted string 
# python: sort method is needed, a Map is needed, 
def groupAnagrams(strs):
    dict = {}
    for str in strs:
        sorted_word = ''.join(sorted(str))
        # print(sorted_word)
            #push this sorted word into the Map
            #if the sorted word is already in the dict
            #then we will push the str, if not, we will create an empty array
        if sorted_word not in dict:
            dict[sorted_word] = []
        dict[sorted_word].append(str)
    # print(dict.values())
    all_dict_values = dict.values()
    return(list(all_dict_values))

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))
