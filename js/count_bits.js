
// var countBits = function(n) {
//   let res = [0]
//     for (let i=1; i<=n; i++) {
//       res.push(i.toString(2).match(/1/g).length)
//     }

//     return res
// };


var countBits = function(n) {
  const dp = [0]
  for (let i = 1; i <= n; i++) {
  if ((i & 1) === 0) {
    dp[i] = dp[i >> 1]
    console.log('even ' + i + `  taken from dp[${i>>1}]`);
    
    console.log(`dp[${i}]= ` + dp[i>>1]);
    console.log('---');
  } else {
    console.log('odd ' + i);
    dp[i] = dp[i - 1] + 1
    console.log(`dp[${i}]= ` + (dp[i - 1] + 1));
    console.log('---');
  }
  }
  return dp   
};

// console.log(countBits(15));
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101