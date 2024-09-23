// Valid Parentheses

var isValid = function (s) {
  const matches = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  s = s.split("");
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    // console.log(temp);
    if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
      // console.log(s[i]);
      // console.log(temp[temp.length-1], matches[s[i]]);
      if (temp[temp.length - 1] === matches[s[i]]) {
        const res = temp.splice(-1, 1);
        if (res.length === 0) return false;
      } else return false;
    } else temp.push(s[i]);
  }
  return temp.length === 0;
};

// var isValid = function (s) {
//   let stack = [];
//   let map = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
//       stack.push(s[i]);
//     } else {
//       let last = stack.pop();
//       if (s[i] !== map[last]) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };

console.log(isValid("{()[{}]}"));
