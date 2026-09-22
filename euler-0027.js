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

function solution() {
  sieveUpTo(2_000_000);//n^2+a*n+b -> 999^2+999*999+999 < 2000000

  let product = 0;
  let maxCount = 0;

  //b must be prime when n=0!
  for (let i = 0; i < primes.length; i++) {
    let b = primes[i];
    if (b > 1000) break;//must not exceed 1000
    for (let a = -999; a < 1000; a++) {
      let count = 0;

      for (let n = 0; ; n++) {
        let candidate = n * n + a * n + b;
        if (sieve[candidate] === 1) {
          count++;
        } else {
          break;
        }
      }

      if (count > maxCount) {
        maxCount = count;
        product = a * b;
      }
    }
  }

  return product;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);