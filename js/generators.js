function* take(n, iterable) {
  for (let item of iterable) {
    if (n <= 0) return;
    n--;
    yield item;
  }
}

let taken = [...take(3, [1,2,3,4,5,6,7,8,9])]
console.log(taken);


