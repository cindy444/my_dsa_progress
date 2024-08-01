/**
 * Best Time To Buy And Sell Stocks 
 * 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Buy -> the stock price is low (lowest price)
Sell -> the stock price is high (the highest profit can be made in the future)


for each day -> we wanna compare every other future days to find the difference 
if the diff is highest, we return output


Prerequites: 
Order of the number matters!!
Only positive number


Approach #1: Two pointers O(n^2)
iterate through the array 
lowVal = 7
if all the rest of the days, values are lower than the lowVal value, do nothing 
then keep iterate through the array 
set if the value is lower than 7, set the lowValue to 1
compare with the rest of the future days...
diff = 4
5-1= 4
3-1= 2
6-1= 5 
4-1= 3
find the max of the diff, and then set:
max: 5
once we get to the second last of the element in the array, 
return max (default 0). 

7,1,5,3,6,4
  ^
    ^

7,6,4,3,1

Approach #2 O(N) 1 iteration to the second last element (compare forward, that mean the current element compares with the next element)

7,1,5,3,6,4
        ^

Hashmap...no need hashmap for this problem and we can accomplish with 1 iteration

p1 > p2
min = 1
else 
diff = p2 - min
max = Math.max(max, diff)

 */

var maxProfit = function (prices) {
  let lowestPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const newPrice = prices[i + 1];
    if (lowestPrice > newPrice) {
      lowestPrice = Math.min(newPrice, lowestPrice);
    } else {
      let profit = newPrice - lowestPrice;
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //expect 5
console.log(maxProfit([7, 6, 4, 3, 1])); //expect 0
