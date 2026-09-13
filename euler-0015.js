function solution() {
  //un lattice paths è convertibile in una stringa -> DestraGiuDestraGiu = DGDG
  //si può associare a un problema di combinatoria: quanti modi distinti ho di arrangiare
  //questi elementi? nel caso dell'esempio: 4! / (2! * 2!) -> i due 2! servono per rimuovere la "duplicazione".
  //diventa un'operazione 4 preso 2.
  //quindi con una griglia 20x20 il calcolo diventa: 40 preso 20 = 40! / (20! * 20!), che semplificato è uguale
  //al calcolo sottostante.
  return 39n * 37n * 35n * 33n * 31n * 29n * 23n * 2n * 2n;
}

console.time('solution');
let s = solution();
console.timeEnd('solution');
console.log(s);