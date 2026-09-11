function solution() {
  for (let b = 1; b < 1000; b++) {
    let c = (500000 - b * 1000 + b * b) / (1000 - b);
    if (Math.ceil(c) !== Math.floor(c)) continue;
    let a = 1000 - b - c;

    return a * b * c;
  }

  return 1;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);