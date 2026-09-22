function isPandigitalProduct(a, b) {
  let digits = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let product = a * b;
  while (a > 0) {
    let digit = a % 10;
    if (digit === 0) return false;
    digits[digit - 1]++;
    if (digits[digit - 1] > 1) return false;
    a = Math.floor((a - digit) / 10);
  }
  while (b > 0) {
    let digit = b % 10;
    if (digit === 0) return false;
    digits[digit - 1]++;
    if (digits[digit - 1] > 1) return false;
    b = Math.floor((b - digit) / 10);
  }
  while (product > 0) {
    let digit = product % 10;
    if (digit === 0) return false;
    digits[digit - 1]++;
    if (digits[digit - 1] > 1) return false;
    product = Math.floor((product - digit) / 10);
  }

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== 1) return false;
  }
  return true;
}

function solution() {
  let set = new Set();
  let sum = 0;
  for (let a = 1; a < 100; a++) {
    for (let b = 100; b < 10000.0 / a; b++) {
      let isPandigital = isPandigitalProduct(a, b);
      if (isPandigital === true) {
        set.add(a * b);
      }
    }
  }
  return [...set].reduce((sum, n) => sum + n, 0);
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);