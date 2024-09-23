var findMaxConsecutiveOnes = function (nums) {
  let c = 0;
  let maxC = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      c++;
    } else {
      maxC = maxC > c ? maxC : c;
      c = 0;
    }
  }
  return maxC > c ? maxC : c;
};


console.log(findMaxConsecutiveOnes([1,0,1,1,0,1,1,1]));