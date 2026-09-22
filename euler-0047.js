function primeFactorsOf(n) {
  let primeFactorsCount = 0;
  let divisor = 2;
  if (n % divisor === 0) {
    primeFactorsCount++;
    while (n % divisor === 0) n /= divisor;
  }

  divisor = 3;
  while (divisor * divisor <= n) {
    if (n % divisor === 0) {
      primeFactorsCount++;
      while (n % divisor === 0) n /= divisor;
    }
    divisor += 2;
  }
  
  if (n > 1) primeFactorsCount++;//è primo
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