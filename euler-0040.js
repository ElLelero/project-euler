function solution() {
  let str = '';
  let i = 1;
  while (str.length <= 1_000_000) {
    str = `${str}${i}`;
    i++;
  }
  let d1 = str.charAt(1 - 1);
  let d10 = str.charAt(10 - 1);
  let d100 = str.charAt(100 - 1);
  let d1000 = str.charAt(1000 - 1);
  let d10000 = str.charAt(10000 - 1);
  let d100000 = str.charAt(100000 - 1);
  let d1000000 = str.charAt(1000000 - 1);
  return d1 * d10 * d100 * d1000 * d10000 * d100000 * d1000000;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);