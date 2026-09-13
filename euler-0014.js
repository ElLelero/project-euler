let memo = new Int16Array(1000000);
memo[1] = 1;

let terms = new Float64Array(700);

function collatz(n) {
  //terms è riutilizzato. ogni volta che lancio la funzione, sono dove mi devo fermare sulla
  //lettura di terms grazie a questa variabile depth. il resto dei valori eventualmente
  //utilizzati in altre esecuzioni della funzione vengono ignorati.
  //risultato: un unico array riciclato senza far impazzire il GC.
  let depth = 0;
  //il ciclo avanza finchè non trovo qualcosa di memoizzato o se il valore sfora il limite
  //imposto dal problema.
  //usando un array con dimensioni fisse, memo[n] con n sopra il limite va in errore;
  //quindi, forzando che il ciclo avanza anche con n oltre il limite, continua a farlo andare avanti.
  while (n >= 1000000 || memo[n] === 0) {
    terms[depth++] = n;
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = (3 * n) + 1;
    }
  }
  //esco dal ciclo precedente se ho qualcosa nell'oggetto di memoizzazione:
  //il count è quello. memorizzo in terms solo quelli nuovi.
  let count = memo[n];
  for (let i = depth - 1; i >= 0; i--) {
    count++;
    if (terms[i] < 1000000) {
      memo[terms[i]] = count;
    }
  }
  return count;
}

function solution() {
  let max = 0;
  let n = 0;
  //Sapendo che Collatz(2n) = Collatz(n)+1 -> Collatz(n) < Collatz(2n), il massimo non può trovarsi nella metà tra 0 500.000.
  //se il massimo fosse nella metà inferiore, non varrebbe più la regola sopra. posso cercare nella metà superiore.
  for (let i = 500000; i < 1000000; i++) {
    let termsLength = collatz(i);
    if (termsLength > max) {
      max = termsLength;
      n = i;
    }
  }
  return n;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);