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
  let N = 10000;
  sieveUpTo(N);
  for (let i = 3; i < N; i += 2) {
    if (sieve[i] === 1) continue;
    let candidates = primes.filter(n => n > 2 && n <= i - 2);

    let conjecture = false;
    for (let j = 0; j < candidates.length; j++) {
      let prime = candidates[j];
      let potentialSquare = (i - prime) / 2;
      let root = Math.sqrt(potentialSquare);
      let isSquare = root % 1 === 0;
      if (isSquare) {
        conjecture = true;
        break;
      }
    }
    if (conjecture == false) {
      return i;
    }
  }
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);