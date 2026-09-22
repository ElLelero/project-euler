function solution() {
  let set = new Set();
  for (let a = 2n; a <= 100n; a++) {
    for (let b = 2n; b <= 100n; b++) {
      let temp = 1n;
      for (let i = 0n; i < b; i++) {
        temp *= a;
      }
      set.add(temp);
    }
  }
  return set.size;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);