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

function isTruncablePrime(prime) {
  let a = prime;
  let b = prime;
  while (a > 10 && b > 10) {
    let temp = reverse(a);
    a = reverse(Math.floor((temp - (temp % 10)) / 10));
    b = Math.floor((b - (b % 10)) / 10);
    if (sieve[a] === 0) return false;
    if (sieve[b] === 0) return false;
  }
  return true;
}

function solution() {
  sieveUpTo(1_000_000);

  let sum = 0;

  for (let i = 0; i < primes.length; i++) {
    let prime = primes[i];
    if (prime < 10) continue;
    let isTruncable = isTruncablePrime(prime);
    if (isTruncable === true) {
      sum += prime;
    }
  }

  return sum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);