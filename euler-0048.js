function solution() {
  let sum = 0n;
  for (let i = 1; i <= 1000; i++) {
    let n = BigInt(i);
    let temp = 1n;
    for (let j = 1; j <= i; j++) {
      temp *= n;
    }
    sum += temp;
  }
  let str = sum.toString();
  return str.substring(str.length - 10);
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);