function solution() {
  let n = 100;
  return n * (n + 1) * (3 * n + 2) * (n - 1) / 12;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);