function nCk(n, k) {
  let temp = 1;
  for (let i = n; i > n - k; i--) {
    temp *= i;
  }
  for (let i = 2; i <= k; i++) {
    temp /= i;
  }
  return temp;
}

function solution() {
  let count = 0;
  for (let n = 1; n <= 100; n++) {
    for (let k = 1; k <= n / 2; k++) {
      if (nCk(n, k) > 1_000_000) {
        let elementsOverMillion = n - k - k + 1;
        count += elementsOverMillion;
        break;
      }
    }
  }
  return count;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);