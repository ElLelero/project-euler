let fibonacciMemo = { 1: 1, 2: 1 };

function fibonacci(n) {
  if (fibonacciMemo[n]) return fibonacciMemo[n];
  let f_N_1 = fibonacci(n - 1);
  let f_N_2 = fibonacci(n - 2);

  fibonacciMemo[n - 1] = f_N_1;
  fibonacciMemo[n - 2] = f_N_2;

  let f = f_N_1 + f_N_2;
  fibonacciMemo[n] = f;
  return f;
}

function solution() {
  let sum = 0;
  let n = 1;
  let f = 0;

  do {
    f = fibonacci(n);
    n++;
    if (f % 2 === 0) sum += f;
  } while (f < 4000000);

  return sum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);