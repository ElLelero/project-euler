function solution() {
  let counter = 0;
  let n = 10001;
  //Rosser:
  //n*ln(n)< p_n < n*(ln(n) + ln(ln(n))), n>=6
  let ln_n = Math.log(n);
  let inf = Math.floor(n * ln_n);
  let sup = Math.ceil(n * (ln_n + Math.log(ln_n)));

  let sieve = Array(sup + 2).fill(true);
  sieve[0] = false;
  sieve[1] = false;
  let limit = Math.sqrt(sup + 1);

  for (let j = 4; j < sieve.length; j += 2) {
    sieve[j] = false;
  }
  for (let i = 3; i <= limit; i += 2) {
    if (sieve[i]) {
      for (let j = i * i; j < sieve.length; j += i) {
        sieve[j] = false;
      }
    }
  }
  for (let i = 0; i < sieve.length; i++) {
    if (sieve[i]) counter++;
    if (counter === n) return i;
  }
  return undefined;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);