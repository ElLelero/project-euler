function solution() {
  let duration = Temporal.Duration.from({ days: 7 });
  let start = Temporal.PlainDate.from("1901-01-01");
  let end = Temporal.PlainDate.from("2001-01-01");

  let count = 0;
  while (Temporal.PlainDate.compare(start, end) < 0) {
    if (start.day === 1) {
      count++;
    }
    start = start.add(duration);
  }
  return count;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);