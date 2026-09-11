function primeScomposition(n) {
  let primeScomposition = {};
  if (n % 2 === 0) primeScomposition[2] = 0;
  while (n % 2 === 0) {
    primeScomposition[2]++;
    n /= 2;
  }
  let divisor = 3;
  while (n > 1) {
    if (n % divisor === 0) primeScomposition[divisor] = 0;
    while (n % divisor === 0) {
      primeScomposition[divisor]++;
      n /= divisor;
    }
    divisor += 2;
  }
  return primeScomposition;
}

function solution() {
  let smallestScomposition = {};
  for (let i = 2; i <= 20; i++) {
    let scomposition = primeScomposition(i);
    let entries = Object.entries(scomposition);
    for (let j = 0; j < entries.length; j++) {
      let [base, power] = entries[j];
      if (smallestScomposition[base] == null || smallestScomposition[base] < scomposition[base]) {
        smallestScomposition[base] = power;
      }
    }
  }
  return Object.entries(smallestScomposition)
    .map(([base, power]) => Math.pow(base, power))
    .reduce((a, n) => n * a, 1);
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);