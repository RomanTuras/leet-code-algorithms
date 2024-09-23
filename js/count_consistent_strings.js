var countConsistentStrings = function(allowed, words) {
  let ans=0
  let a=new Set(allowed)
  
  words.forEach(item=>{
      let b=new Set(item)
      let flag=false
      for(const s of b){
          if(!a.has(s)){
              flag=true
              break
          }
      }
      if(flag==false) ans++
  })
  return ans
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));