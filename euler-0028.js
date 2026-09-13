function solution() {
  let n = Math.floor(1001 / 2) + 1;
  let sum = -3;
  for (let i = 0; i < n; i++) {
    sum += 16 * i * i + 4 * i + 4;
  }
  return sum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);