// var longestCommonPrefix = function (strs) {
//   strs.sort((a, b) => {
//     return a.length - b.length;
//   });
//   let n = strs[0].length;
//   while (n > 0) {
//     let searchingText = strs[0].slice(0, n);
//     let pattern = new RegExp("^" + searchingText, "g");
//     let isPrefixFinded = true;
//     for (let i = 1; i < strs.length; i++) {
//       let t = strs[i].match(pattern);
//       if (t === null || t[0].length !== searchingText.length) {
//         isPrefixFinded = false;
//         break;
//       }
//     }
//     if (isPrefixFinded) return strs[0].slice(0, n);
//     n--;
//   }
//   return "";
// };

var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  let prefix = "";
  strs.sort();
  console.log(strs);
  const first = strs[0];
  const last = strs[strs.length - 1];

  for (let i = 0; i < first.length; i++) {
    console.log(last[i], first[i]);
    if (last[i] !== first[i]) return prefix;

    prefix = prefix + first[i];
  }

  return prefix;
};

console.time("my");
const strs = ["abcde", "abcde", "abbde"];
// const strs = ["dog", "racecar", "car"];
// const strs = ["reflower", "flow", "flight"];
// Output: ""
console.log(longestCommonPrefix(strs));
console.timeEnd("my");
