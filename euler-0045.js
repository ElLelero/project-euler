function getHexagonal(n) {
  return n * (2 * n - 1);
}

function isPentagonal(n) {
  let test = 24 * n + 1;
  if (test < 0) return false;
  let root = Math.sqrt(test);
  if (root % 1 !== 0) return false;
  return root % 6 === 5;
}

function solution() {
  for (let n = 144; ; n++) {
    let hexagonal = getHexagonal(n);//is already triangular
    let pentagonal = isPentagonal(hexagonal);
    if (pentagonal === true) {
      return hexagonal;
    }
  }
  return 1;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);