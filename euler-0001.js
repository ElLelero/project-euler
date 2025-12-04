function solution() {
  let N = 1000;
  let sum = 0;

  let N_3 = Math.floor((N - 1) / 3.0);
  sum += N_3 * (N_3 + 1) / 2.0 * 3.0;

  let N_5 = Math.floor((N - 1) / 5.0);
  sum += N_5 * (N_5 + 1) / 2.0 * 5.0;

  let N_15 = Math.floor((N - 1) / 15.0);
  sum -= N_15 * (N_15 + 1) / 2.0 * 15.0;

  return sum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);