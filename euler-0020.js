function solution() {
  let N = 1n;
  for (let i = 2n; i < 100; i+=1n) {
    N *= i;
  }
  return N.toString().split('').map(a => +a).reduce((a, sum) => sum + a, 0);
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);