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

function isCircular(prime) {
  let str = prime.toString();
  for (let i = 0; i < str.length; i++) {
    if (sieve[+(str)] === 0) return false;
    str = `${str.substring(1) + str[0]}`;
  }
  return true;
}

function solution() {
  sieveUpTo(1_000_000);

  let count = 0;
  for (let i = 0; i < primes.length; i++) {
    let circular = isCircular(primes[i]);
    if (circular) count++;
  }

  return count;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);