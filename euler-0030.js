let powers = new Int32Array([0, 1, 32, 243, 1024, 3125, 7776, 16807, 32768, 59049]);

function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    let digit = (n % 10);
    n = (n - digit) / 10;
    sum += powers[digit];
  }
  return sum;
}

function solution() {
  //per digit -> 9^5 = 59049
  //5-digit -> max 99999
  //6-digit -> max 354294

  let finalSum = 0;
  for (let i = 2; i <= 354294; i++) {
    let sum = sumOfDigits(i);
    if (i === sum) {
      finalSum += sum;
    }
  }

  return finalSum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);