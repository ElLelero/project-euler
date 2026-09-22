function hasSameDigit(str) {
  let digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < str.length; i++) {
    let digit = str.charCodeAt(i) - 48;
    digits[digit]++;
    if (digits[digit] > 1) return true;
  }
  return false;
}

function getMissingDigit(str) {
  let digits = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  for (let i = 0; i < str.length; i++) {
    let digit = str.charCodeAt(i) - 48;
    digits[digit]--;
  }
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 1) return i;
  }
  return -1;
}

function solution() {
  let sum = 0n;

  let divisbleBy2 = [];
  let divisbleBy3 = [];
  let divisbleBy5 = [];
  let divisbleBy7 = [];
  let divisbleBy11 = [];
  let divisbleBy13 = [];
  let divisbleBy17 = [];
  for (let i = 2; i < 1000; i++) {
    let str = i.toLocaleString('it-it', { minimumIntegerDigits: 3 });
    let hasDuplicatedDigits = hasSameDigit(str);
    if (hasDuplicatedDigits === true) continue;
    if (i % 2 === 0) divisbleBy2.push(str);
    if (i % 3 === 0) divisbleBy3.push(str);
    if (i % 5 === 0) divisbleBy5.push(str);
    if (i % 7 === 0) divisbleBy7.push(str);
    if (i % 11 === 0) divisbleBy11.push(str);
    if (i % 13 === 0) divisbleBy13.push(str);
    if (i % 17 === 0) divisbleBy17.push(str);
  }

  for (let a = 0; a < divisbleBy2.length; a++) {
    let d2d3d4 = divisbleBy2[a];
    let d2d3d4d5List = divisbleBy3.filter(n => n[0] === d2d3d4[d2d3d4.length - 2] && n[1] === d2d3d4[d2d3d4.length - 1])
      .map(n => d2d3d4 + n[2]).filter(n => !hasSameDigit(n));
    if (d2d3d4d5List.length === 0) continue;

    for (let b = 0; b < d2d3d4d5List.length; b++) {
      let d2d3d4d5 = d2d3d4d5List[b];
      let d2d3d4d5d6List = divisbleBy5.filter(n => n[0] === d2d3d4d5[d2d3d4d5.length - 2] && n[1] === d2d3d4d5[d2d3d4d5.length - 1])
        .map(n => d2d3d4d5 + n[2]).filter(n => !hasSameDigit(n));
      if (d2d3d4d5d6List.length === 0) continue;

      for (let c = 0; c < d2d3d4d5d6List.length; c++) {
        let d2d3d4d5d6 = d2d3d4d5d6List[c];
        let d2d3d4d5d6d7List = divisbleBy7.filter(n => n[0] === d2d3d4d5d6[d2d3d4d5d6.length - 2] && n[1] === d2d3d4d5d6[d2d3d4d5d6.length - 1])
          .map(n => d2d3d4d5d6 + n[2]).filter(n => !hasSameDigit(n));
        if (d2d3d4d5d6d7List.length === 0) continue;


        for (let d = 0; d < d2d3d4d5d6d7List.length; d++) {
          let d2d3d4d5d6d7 = d2d3d4d5d6d7List[d];
          let d2d3d4d5d6d7d8List = divisbleBy11.filter(n => n[0] === d2d3d4d5d6d7[d2d3d4d5d6d7.length - 2] && n[1] === d2d3d4d5d6d7[d2d3d4d5d6d7.length - 1])
            .map(n => d2d3d4d5d6d7 + n[2]).filter(n => !hasSameDigit(n));
          if (d2d3d4d5d6d7d8List.length === 0) continue;

          for (let e = 0; e < d2d3d4d5d6d7d8List.length; e++) {
            let d2d3d4d5d6d7d8 = d2d3d4d5d6d7d8List[e];
            let d2d3d4d5d6d7d8d9List = divisbleBy13.filter(n => n[0] === d2d3d4d5d6d7d8[d2d3d4d5d6d7d8.length - 2] && n[1] === d2d3d4d5d6d7d8[d2d3d4d5d6d7d8.length - 1])
              .map(n => d2d3d4d5d6d7d8 + n[2]).filter(n => !hasSameDigit(n));
            if (d2d3d4d5d6d7d8d9List.length === 0) continue;

            for (let f = 0; f < d2d3d4d5d6d7d8d9List.length; f++) {
              let d2d3d4d5d6d7d8d9 = d2d3d4d5d6d7d8d9List[f];
              let d2d3d4d5d6d7d8d9d10List = divisbleBy17.filter(n => n[0] === d2d3d4d5d6d7d8d9[d2d3d4d5d6d7d8d9.length - 2] && n[1] === d2d3d4d5d6d7d8d9[d2d3d4d5d6d7d8d9.length - 1])
                .map(n => d2d3d4d5d6d7d8d9 + n[2]).filter(n => !hasSameDigit(n));
              if (d2d3d4d5d6d7d8d9d10List.length === 0) continue;

              for (let g = 0; g < d2d3d4d5d6d7d8d9d10List.length; g++) {
                let d2d3d4d5d6d7d8d9d10 = d2d3d4d5d6d7d8d9d10List[g];
                let d1 = getMissingDigit(d2d3d4d5d6d7d8d9d10);
                sum += BigInt(d1 + d2d3d4d5d6d7d8d9d10)
              }
            }
          }
        }
      }
    }
  }

  return sum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);