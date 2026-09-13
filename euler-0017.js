let dict = {
  1: 3,//'one',
  2: 3,//'two',
  3: 5,//'three',
  4: 4,//'four',
  5: 4, //'five',
  6: 3,//'six',
  7: 5,//'seven',
  8: 5,//'eight',
  9: 4,//'nine',
};

function count(n) {
  let wordsLength = 0;
  while (n > 0) {
    if (n >= 1000) {
      let thousands = Math.floor(n / 1000);
      wordsLength += dict[thousands] + 8;//'thousand';
      n -= (thousands * 1000);
      if (n > 0) {
        wordsLength += 3;//'and';
      }
    } else {
      if (n >= 100) {
        let hundreds = Math.floor(n / 100);
        wordsLength += dict[hundreds] + 7;//'hundred';
        n -= (hundreds * 100);
        if (n > 0) {
          wordsLength += 3;//'and';
        }
      } else {
        if (n >= 90) {
          wordsLength += 6;//'ninety';
          n -= 90;
        } else {
          if (n >= 80) {
            wordsLength += 6;//'eighty';
            n -= 80;
          } else {
            if (n >= 70) {
              wordsLength += 7;//'seventy';
              n -= 70;
            } else {
              if (n >= 60) {
                wordsLength += 5;//'sixty';
                n -= 60;
              } else {
                if (n >= 50) {
                  wordsLength += 5;//'fifty';
                  n -= 50;
                } else {
                  if (n >= 40) {
                    wordsLength += 5;//'forty';
                    n -= 40;
                  } else {
                    if (n >= 30) {
                      wordsLength += 6;//'thirty';
                      n -= 30;
                    } else {
                      if (n >= 20) {
                        wordsLength += 6;//'twenty';
                        n -= 20;
                      } else {
                        if (n >= 19) {
                          wordsLength += 8;//'nineteen';
                          n -= 19;
                        } else {
                          if (n >= 18) {
                            wordsLength += 8;//'eighteen';
                            n -= 18;
                          } else {
                            if (n >= 17) {
                              wordsLength += 9;//'seventeen';
                              n -= 17;
                            } else {
                              if (n >= 16) {
                                wordsLength += 7;//'sixteen';
                                n -= 16;
                              } else {
                                if (n >= 15) {
                                  wordsLength += 7;//'fifteen';
                                  n -= 15;
                                } else {
                                  if (n >= 14) {
                                    wordsLength += 8;//'fourteen';
                                    n -= 14;
                                  } else {
                                    if (n >= 13) {
                                      wordsLength += 8;//'thirteen';
                                      n -= 13;
                                    } else {
                                      if (n >= 12) {
                                        wordsLength += 6;//'twelve';
                                        n -= 12;
                                      } else {
                                        if (n >= 11) {
                                          wordsLength += 6;//'eleven';
                                          n -= 11;
                                        } else {
                                          if (n >= 10) {
                                            wordsLength += 3;//'ten';
                                            n -= 10;
                                          } else {
                                            wordsLength += dict[n];
                                            n = 0;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return wordsLength;
}

function solution() {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    sum += count(i);
  }
  return sum;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);