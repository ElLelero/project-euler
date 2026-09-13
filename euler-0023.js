let notFromAbundantSet = new Uint8Array(28124).fill(1);

function divisors(n) {
  let sum = 1;
  let divisor = 2;
  while (divisor * divisor <= n) {
    if (n % divisor === 0) {
      sum += divisor;
      if (divisor !== n / divisor) {
        sum += (n / divisor);
      }
    }
    divisor++;
  }

  return sum;
}

function solution() {
  let abundants = [];
  for (let i = 2; i <= 28123; i++) {
    let sum = divisors(i);
    if (sum > i) {
      abundants.push(i);
      notFromAbundantSet[2 * i] = 0;
    }
  }

  for (let i = 0; i < abundants.length; i++) {
    for (let j = i + 1; j < abundants.length; j++) {
      let sum = abundants[i] + abundants[j];
      if (sum > 28123) break;
      notFromAbundantSet[sum] = 0;
    }
  }

  let finalSum = 0;
  for (let i = 1; i < notFromAbundantSet.length; i++) {
    if (notFromAbundantSet[i] === 0) continue;
    finalSum += i;
  }
  return finalSum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);