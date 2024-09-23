var isPalindrome = function(x) {
    if (x < 0) return false
    else if (x >= 0 && x < 10) return true
    else {
      let n = x.toString()
      for (let i = 0; i < n.length>>1; i++) {
        if (parseInt(n[i]) != parseInt(n[(n.length-1)-i])) return false
      }
      return true
    }
};

console.log(isPalindrome(1243113421));

// var isPalindrome = function(x) {
//   let temp = x.toString().split('').reverse().join('')
//   if(x == temp) return true
//   return false
// };