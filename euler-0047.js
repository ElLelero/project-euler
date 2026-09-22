function primeFactorsOf(n) {
  let primeFactorsCount = 0;
  let prime = 2;
  while (prime * prime <= n && n > 1) {
    if (n % prime === 0) {
      primeFactorsCount++;
      while (n % prime === 0) n /= prime;
    }
    prime++;
  }
  if (n > 1) primeFactorsCount++;
  return primeFactorsCount;
}

function solution() {
  let factorsOfI = 0;
  let factorsOfIMinus1 = 0;
  let factorsOfIMinus2 = 0;
  let factorsOfIMinus3 = 0;

  for (let i = 462; ; i++) {
    let temp = primeFactorsOf(i);

    factorsOfIMinus3 = factorsOfIMinus2;
    factorsOfIMinus2 = factorsOfIMinus1;
    factorsOfIMinus1 = factorsOfI;
    factorsOfI = temp;

    if (factorsOfI === factorsOfIMinus1 && factorsOfI === factorsOfIMinus2 && factorsOfI === factorsOfIMinus3 && factorsOfI === 4) {
      return i - 3;
    }
  }

  return null;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);