function solution() {
  let a = 0n;
  let b = 1n;
  for (let i = 0; ; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    if (b.toString().length >= 1000) {//string approach apparently faster than log or math digit counting...
      return i + 2;
    }
  }
  return -1;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);