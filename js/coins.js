var coinChange = function(coins, amount) {
  // Initialize the array with Infinity, except for min_coins[0] which is 0
  let min_coins = new Array(amount + 1).fill(Infinity);
  min_coins[0] = 0;

  // Iterate through each amount from 1 to amount
  for (let i = 1; i <= amount; i++) {
    // Check each coin
    for (let c of coins) {
      if (i - c >= 0) {
        // Update the min_coins array if a smaller number of coins is found
        min_coins[i] = Math.min(min_coins[i], min_coins[i - c] + 1);
      }
    }
  }

  // If min_coins[amount] is still Infinity, return -1 indicating it's not possible
  return min_coins[amount] === Infinity ? -1 : min_coins[amount];
};


// min_coins[0,12,12,12]
// coins[1,2,5]
// i=1, c=1, m[0]=0+1=1
// i=2, c=1, m[1]=12+1

console.log(coinChange([186,419,83,408], 6249));
// console.log(coinChange([1,2,5], 11));

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1


// function sum(nums) {
//   let c = 0
//   let maxC = 0
//   for(let i=0; i<nums.length; i++) {
//     if(nums[i] === 1) {
//       c++
//     } else{
//       maxC = maxC > c ? maxC : c 
//       c = 0
//     }
//   }
//   return maxC
// }


// console.log(sum([1,1,0,1,1,1]))

// [1,1,1,23,4,1,1,0]