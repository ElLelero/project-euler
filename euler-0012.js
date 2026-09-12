function tau(n) {
  let primes = {};
  if (n % 2 === 0) primes[2] = 0;
  while (n % 2 === 0) {
    primes[2]++;
    n /= 2;
  }
  let divisor = 3;
  while (n > 1) {
    if (n % divisor === 0) primes[divisor] = 0;
    while (n % divisor === 0) {
      primes[divisor]++;
      n /= divisor;
    }
    divisor += 2
  }
  return Object.values(primes).map(a => a + 1).reduce((a, n) => n * a, 1);
}

function solution() {
  let target = 500;
  let i = 0;
  let tau_T = 1;
  let T = 0;
  do {
    i++;
    let n = i;
    let nPlus1 = i + 1;
    if (n % 2 === 0) {
      n /= 2;
    } else {
      nPlus1 /= 2;
    }

    T = n * nPlus1;

    //tau(a*b) = tau(a) * tau(b) when gcd(a,b)=1
    tau_T = tau(n) * tau(nPlus1);
  } while (tau_T <= target);
  return T;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);