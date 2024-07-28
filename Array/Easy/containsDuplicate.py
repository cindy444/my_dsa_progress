# Contains Duplicate
# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

"""
    :type nums: List[int]
    :rtype: bool
"""
# store -> set (because it can store unique num to use for comparison during iteration)

def containsDuplicate(nums):
    # Approach # 1 O(N)
    # iterate through the array 
    # if the num is not found in the set, then add it to the set
    # if the num is found in the set, then return true
    # else return false 
    result = False
    unique_set = set()
    for num in nums:
        if (num not in unique_set):
            unique_set.add(num)
        else:
            result = True
    return result 

    # Approach # 2 O(N)
    # Compare the set with the nums list
    # if the set has the same length as nums list, then return False 
    # return True 
    unique_nums_set = set(nums) #this would turn a list into a set 
    unique_nums_list = list(unique_nums_set) #this would turn a set into a list
    return len(unique_nums_list) != len(nums)


print(containsDuplicate([1,2,3,1])) #expect true
print(containsDuplicate([1,2,3,4])) #expect false
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) #expect true