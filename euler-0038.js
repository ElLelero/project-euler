function isPandigital(n) {
  let digits = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  while (n > 0) {
    let digit = n % 10;
    if (digit === 0) return false;
    digits[digit - 1]++;
    if (digits[digit - 1] > 1) return false;
    n = Math.floor((n - digit) / 10.0);
  }
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== 1) return false;
  }
  return true;
}

function reverse(n) {
  let reversed = 0;
  while (n > 0) {
    let digit = n % 10;
    reversed *= 10;
    reversed += digit;
    n -= digit;
    n /= 10;
  }
  return reversed;
}

function concat(a, b) {
  let temp = reverse(b);
  while (temp > 0) {
    let digit = temp % 10;
    a *= 10;
    a += digit;
    temp = (temp - digit) / 10;
  }
  return a;
}

function solution() {
  let max = 0;
  for (let n = 1; n < 10000; n++) {
    let pandigitalNumber = n;
    for (let i = 2; i < 10; i++) {
      let product = n * i;
      pandigitalNumber = concat(pandigitalNumber, product);
      let l = Math.floor(Math.log10(pandigitalNumber)) + 1;
      if (l < 9) continue;
      if (l > 9) break;

      let pandigital = isPandigital(pandigitalNumber);
      if (pandigital) {
        if (pandigitalNumber > max) {
          max = pandigitalNumber;
        }
        break;
      }
    }
  }
  return max;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);