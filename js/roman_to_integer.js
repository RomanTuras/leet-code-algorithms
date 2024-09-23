var romanToInt = function (s) {
  let map = new Map();
  map.set("M", 1000);
  map.set("CM", 900);
  map.set("D", 500);
  map.set("CD", 400);
  map.set("C", 100);
  map.set("XC", 90);
  map.set("L", 50);
  map.set("XL", 40);
  map.set("X", 10);
  map.set("IX", 9);
  map.set("V", 5);
  map.set("IV", 4);
  map.set("I", 1);

  if (s.length === 1) {
    return map.get(s);
  } else {
    let i = 0;
    let res = 0;
    while (i < s.length) {
      let n = map.get(s[i] + s[i + 1]);
      if (n !== undefined) {
        res += n;
        i += 2;
      } else {
        res += map.get(s[i]);
        i++;
      }
    }
    return res;
  }
};

// console.log(romanToInt("r"));
console.log(romanToInt("MCMXCIV"));

// LVIII
// III

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
