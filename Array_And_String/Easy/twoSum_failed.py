# Two Sum

#Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
'''
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
'''

# This solution is under the assumption that we always find a sum of two nums that will equal to the target num
# Approach # 1 O(N2)
'''
3, 2, 4
^->
   ^->

Two pointers (same direction, this will help to find all possibilities)
Iterate through the array with a pointer to n.length - 2
Iterate another pointer through the array to n.length -1 
if sum of two numbers is equal to target, push index of the two numbers into 
the result array
'''



# Approach # 2
'''
1,3,1,3,2. ---> [1, 3]. target: 6

1,3,3,2
^->
p1
    <-^
      p2

Two pointers + opposite direction
iterate through the array 
Add the p1 and p2
if the sum is smaller than the target num, move the pointer p1 to the right ^->
if the sum is larger than the target num, move the pointer p2 to the left <-^

'''

def twoSumSecondApproach(nums, target): 
   return

print(twoSumSecondApproach([2,7,11,15], 9)) #expect [0,1]
print(twoSumSecondApproach([3,2,4], 6)) #expect [1,2]
print(twoSumSecondApproach([3,3], 6)) #expect [0,1]
print(twoSumSecondApproach([1,3,3,2], 6)) #expect [1,2]



# Approach # 2 (BUT WRONG......BECAUSE I DID NOT TAKE INDEX INTO CONSIDERATION)

#BIGGEST MISTAKE: I SHOULD NOT BE MESSING UP WITH THE NUMS LIST. IT SHOULD BE IN THE SAME ORDER SO WE COULD REFER TO THE RELEVANT INDEX ON THE SUM
'''
3, 2, 4
^->
    <-^

Two pointers + Max/Min Approach (in opposite direction, but we only iterate one side based on the sum of the first and the last num of the list)
Sort the array first 
Add the first and last num 
if the sum is larger than the target num, iterate from the right <-^
if the sum is smaller than the target num, iterate from the left ^->
'''

# TRIAL - FAILED ATTEMPT
# def twoSumSecondApproach(nums, target): 
#     sorted_nums = sorted(nums)
#     # print(sorted_nums[-1])
#     first_last_sum = sorted_nums[0] + sorted_nums[-1]
#     if first_last_sum > target:
#         for index, num in enumerate(reversed(sorted_nums[-1:0:-1])):
#             sum = sorted_nums[0] + num
#             if (sum == target): 
#                 return [0, index + 1]
#     if first_last_sum < target: 
#         for index, num in enumerate(sorted_nums[0:-1:1]):
#             sum = num + sorted_nums[-1]
#             print(sum)
#             if (sum == target): 
#                 return [0, index + 1]
#     return [0, len(sorted_nums) - 1]

# print(twoSumSecondApproach([2,7,11,15], 9)) #expect [0,1]
# print(twoSumSecondApproach([3,2,4], 6)) #expect [1,2]
# print(twoSumSecondApproach([3,3], 6)) #expect [0,1]
# print(twoSumSecondApproach([1,3,3,2], 6)) #expect [1,2]
