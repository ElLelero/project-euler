function digitsOf(n) {
  let digits = [];
  while (n > 0) {
    let digit = n % 10;
    n = (n - digit) / 10;
    digits.push(digit);
  }
  return digits;
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) { let temp = a; a = b; b = temp; }
  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
}

function solution() {
  let numerator = 1;
  let denominator = 1;
  for (let i = 10; i < 100; i++) {
    for (let j = i + 1; j < 100; j++) {
      let fractionGcd = gcd(i, j);
      if (fractionGcd === 1) continue;//irriducibile in partenza

      let iDigits = digitsOf(i);
      let jDigits = digitsOf(j);
      let intersection = [...(new Set(iDigits)).intersection(new Set(jDigits))];
      //per ogni intersezione, genero una frazione e la testo
      for (let k = 0; k < intersection.length; k++) {
        if (intersection[k] === 0) continue;

        let iIndex = iDigits.findIndex(d => d === intersection[k]);
        let jIndex = jDigits.findIndex(d => d === intersection[k]);

        let wrongI = iDigits.find((d, index) => index !== iIndex);
        let wrongJ = jDigits.find((d, index) => index !== jIndex);

        if (wrongI >= wrongJ) continue;//>1

        let wrongFractionGcd = gcd(wrongI, wrongJ);

        let reducedFractionI = i / fractionGcd;
        let reducedFractionJ = j / fractionGcd;

        let reducedWrongFractionI = wrongI / wrongFractionGcd;
        let reducedWrongFractionJ = wrongJ / wrongFractionGcd;

        if (reducedFractionI === reducedWrongFractionI && reducedFractionJ === reducedWrongFractionJ) {
          numerator *= reducedFractionI;
          denominator *= reducedFractionJ;
        }

      }
    }
  }
  let resultGcd = gcd(numerator, denominator);

  return denominator / resultGcd;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);