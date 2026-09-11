function solution() {
  let sum = 2;
  let sup = 2000000 - 1;

  let sieve = Array(sup + 2).fill(true);
  sieve[0] = false;
  sieve[1] = false;
  let limit = Math.ceil(Math.sqrt(sup + 1));

  for (let j = 4; j < sieve.length; j += 2) {
    sieve[j] = false;
  }
  for (let i = 3; i <= limit; i += 2) {
    if (sieve[i]) {
      sum += i;
      for (let j = i * i; j < sieve.length; j += i) {
        sieve[j] = false;
      }
    }
  }
  for (let i = limit + 1; i < sieve.length; i++) {
    if (sieve[i]) sum += i;
  }
  return sum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);