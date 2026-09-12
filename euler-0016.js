function solution() {
  let N = 1n;
  let two = 2n;
  for (let i = 0; i < 1000; i++) {
    N *= two;
  }
  return N.toString().split('').map(a => +a).reduce((a, sum) => sum + a, 0);
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);