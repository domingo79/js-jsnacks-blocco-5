/*Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/
/*Snack 3:
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)*/
/*Snack 4:
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da 
uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/
/*Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”*/

/*Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.*/
var zucchina = [
    { varieta: 'Zucchino nero di Milano', peso: 30, lunghezza: 15 },
    { varieta: 'Zucchino romanesco', peso: 35, lunghezza: 16 },
    { varieta: 'Zucchino ortolano di Faenza', peso: 40, lunghezza: 17 },
    { varieta: 'Zucchina lunga fiorentina', peso: 30, lunghezza: 18 },
    { varieta: 'Zucchino siciliano', peso: 35, lunghezza: 19 },
    { varieta: 'Zucchina striata di Napoli', peso: 40, lunghezza: 20 },
    { varieta: 'Zucchina rigata pugliese', peso: 25, lunghezza: 21 },
    { varieta: 'Zucchina Crookneck', peso: 27, lunghezza: 22 },
    { varieta: 'Zucchino giallo', peso: 18, lunghezza: 23 },
    { varieta: 'Zucchina trombetta di Albenga', peso: 25, lunghezza: 24 }
];

//console.log(zucchina[0].lunghezza)

var somma = 0;

for (var i = 0; i < zucchina.length; i++) {
    var elem = zucchina[i];
    // console.log(elem.peso);
    somma += elem.peso;
}
console.log('La somma totale è: ' + somma);




