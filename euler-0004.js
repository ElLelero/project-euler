function palindrome(n) {
  let reversed = 0;
  let original = n;

  while (n > 0) {
    let unit = n % 10;
    reversed = (reversed * 10) + unit;

    n = Math.floor(n / 10);
  }
  return original === reversed;
}
function solution() {
  let max = 0;
  for (let i = 999; i >= 100; i--) {
    let minJ = (100000.0 / (i + 0.0));
    for (let j = 999; j >= minJ; j--) {
      let p = i * j;
      if (p < max) break;
      if (palindrome(p) && p > max) {
        max = p;
      }
    }
  }
  return max;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);