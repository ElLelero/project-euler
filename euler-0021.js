let memo = new Int32Array(10000);

function divisors(n) {
  if (memo[n] !== 0) return memo[n];
  let sum = 1;
  let divisor = 2;
  while (divisor * divisor <= n) {
    if (n % divisor === 0) {
      sum += divisor;
      if (divisor !== n / divisor) {
        sum += (n / divisor);
      }
    }
    divisor++;
  }

  memo[n] = sum;

  return sum;
}

function solution() {
  let sum = 0;
  for (let i = 2; i < 10000; i++) {
    let b = divisors(i);
    if (b === i || b >= 10000) continue;//sforo
    let a = divisors(b);
    if (a !== i) continue;//numero di partenza diverso da quello di arrivo

    sum += a;
  }
  return sum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);