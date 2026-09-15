let factorials = new Int32Array([1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]);

function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    let digit = (n % 10);
    n = (n - digit) / 10;
    sum += factorials[digit];
  }
  return sum;
}

function solution() {
  //per digit -> 9! = 362880
  //se ho 6 cifre -> 9!*6 = 2177280
  //se ho 7 cifre -> 9!*7 = 2540160

  let finalSum = 0;
  for (let i = 3; i < 2540160; i++) {
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