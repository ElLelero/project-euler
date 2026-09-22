/*
  a^2+b^2 = c^2 AND a+b+c=P AND a<b<c

  a^2+b^2 = (P-a-b)^2
  a^2+b^2 = P^2+a^2+b^2-2aP-2bP+2ab
  0 = P^2-2aP-2bP+2ab
  2bP-2ab = P^2-2aP
  2b*(P-a) = P(P-2a)
  
  b = (P*(P-2a))/(2*(P-a))
  c = P-a-b
*/
function pythagoreanTripletsForPerimeter(perimeter) {
  let tripletsCount = 0;
  for (let a = 1; a < perimeter / 2; a++) {
    let numerator = (perimeter * (perimeter - 2 * a));
    let denominator = (2 * (perimeter - a));
    if (numerator % denominator !== 0) continue;
    let b = numerator / denominator;
    if (b < a) continue;
    let c = perimeter - a - b;
    if (c < b) continue;

    tripletsCount++;
  }
  return tripletsCount;
}
function solution() {
  let max = 0;
  let maxPerimeter = 0;
  for (let perimeter = 1; perimeter <= 1000; perimeter++) {
    let tripletsCount = pythagoreanTripletsForPerimeter(perimeter);
    if (tripletsCount > max) {
      max = tripletsCount;
      maxPerimeter = perimeter;
    }
  }
  return maxPerimeter;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);