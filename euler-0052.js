function haveSameDigits(a, b) {
  let digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  while (a > 0) {
    let digit = (a % 10);
    digits[digit]++;
    a = (a - digit) / 10;
  }

  while (b > 0) {
    let digit = (b % 10);
    digits[digit]--;
    b = (b - digit) / 10;
  }

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== 0) return false;
  }
  return true;
}

function solution() {
  let max = 1_000_000;
  let sup = Math.floor(max / 6.0);
  let inf = max / 10;
  for (let i = inf; i <= sup; i++) {
    if (haveSameDigits(i, i * 2) && haveSameDigits(i, i * 3) && haveSameDigits(i, i * 4) && haveSameDigits(i, i * 5) && haveSameDigits(i, i * 6)) {
      return i;
    }
  }
  return null;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);