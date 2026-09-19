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

function isPalindromeBase10(n) {
  let reversed = reverse(n);
  return reversed === n;
}

function isPalindromeBase2(n) {
  let originalN = n;
  let str = '';
  while (n > 0) {
    let digit = n % 2;
    str += digit;
    n = n >> 1;
  }
  let reverse = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      reverse += Math.pow(2, str.length - i - 1);
    }
  }
  return reverse === originalN;
}

function solution() {
  let sum = 0;
  for (let i = 1; i < 1000000; i++) {
    let palindromeBase10 = isPalindromeBase10(i);
    if (palindromeBase10 === true) {
      let palindromeBase2 = isPalindromeBase2(i);
      if (palindromeBase2 === true) {
        sum += i;
      }
    }
  }
  return sum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);