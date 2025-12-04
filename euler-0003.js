function solution() {
  let N = 600851475143;
  let M = Math.sqrt(N + 0.0);
  let divisors = new Set();

  while (N % 2 === 0) {
    N /= 2;
    divisors.add(2);
  }

  let i = 3;
  while (i <= M) {
    while (N % i === 0) {
      N /= i;
      divisors.add(i);
    }
    i += 2;
  }

  return [...divisors].sort((a, b) => b - a)[0];
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);