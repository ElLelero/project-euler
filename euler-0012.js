let memo = {};
function tau(n) {
  let t = 1;
  let counter = 0;
  while (n % 2 === 0) {
    counter++;
    n /= 2;
  }
  t *= (counter + 1);

  let divisor = 3;
  while (divisor * divisor <= n) {
    counter = 0;
    while (n % divisor === 0) {
      counter++;
      n /= divisor;
    }
    divisor += 2
    t *= (counter + 1);
  }
  if (n > 1) t *= 2;//è un primo, quindi un esponente 1 (+1)
  return t;
}

function solution() {
  let target = 500;
  let i = 0;
  let tau_T = 1;
  let T = 0;
  do {
    i++;
    let n = i;
    let nPlus1 = i + 1;
    if (n % 2 === 0) {
      n /= 2;
    } else {
      nPlus1 /= 2;
    }

    T = n * nPlus1;

    let tau_n = memo[n] ?? tau(n);
    if (memo[n] == null) memo[n] = tau_n;

    let tau_nPlus1 = memo[nPlus1] ?? tau(nPlus1);
    if (memo[nPlus1] == null) memo[nPlus1] = tau_nPlus1


    //tau(a*b) = tau(a) * tau(b) when gcd(a,b)=1
    tau_T = tau_n * tau_nPlus1;
  } while (tau_T <= target);
  return T;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);