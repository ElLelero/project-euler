let sieve;
let primes;
function sieveUpTo(sup) {
  sieve = new Int32Array(sup + 1).fill(1);
  sieve[0] = 0;
  sieve[1] = 0;
  let limit = Math.ceil(Math.sqrt(sup + 1));

  for (let j = 4; j < sieve.length; j += 2) {
    sieve[j] = 0;
  }
  for (let i = 3; i <= limit; i += 2) {
    if (sieve[i] === 1) {
      for (let j = i * i; j < sieve.length; j += i) {
        sieve[j] = 0;
      }
    }
  }
  primes = new Int32Array(sieve.map((n, i) => n === 1 ? i : null).filter(n => n > 0));
}

function isPandigital(n, options) {
  let { limit, includeZero } = options ?? { limit: 9, includeZero: false };
  let digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  while (n > 0) {
    let digit = n % 10;
    digits[digit]++;
    if (digits[digit] > 1) return false;
    n = Math.floor((n - digit) / 10.0);
  }
  for (let i = includeZero === true ? 0 : 1; i <= limit; i++) {
    if (digits[i] !== 1) return false;
  }
  return true;
}

function solution() {
  sieveUpTo(9999999);
  for (let i = primes.length - 1; i >= 0; i--) {
    let prime = primes[i];
    if (isPandigital(prime, { limit: 7, includeZero: false })) {
      return prime;
    }
  }
  return 1;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);