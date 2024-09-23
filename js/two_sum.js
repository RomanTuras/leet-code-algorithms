var twoSum = function(nums, target) {
  let db = new Map()
  for (let i=0; i<nums.length; i++) {
    const d = target - nums[i]
    const c = db.get(d)
    if (c != undefined) return [c, i]
    else db.set(nums[i],i)
  }
};

let r = twoSum([0,1,2,3,4], 6)
console.log(r);