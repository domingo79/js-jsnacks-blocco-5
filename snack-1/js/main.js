/*Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.*/
var Zucchina = [
    { varieta: 'Zucchino nero di Milano', peso: 30, lunghezza: 10 },
    { varieta: 'Zucchino romanesco', peso: 35, lunghezza: 11 },
    { varieta: 'Zucchino ortolano di Faenza', peso: 40, lunghezza: 13 },
    { varieta: 'Zucchina lunga fiorentina', peso: 30, lunghezza: 15 },
    { varieta: 'Zucchino siciliano', peso: 35, lunghezza: 14 },
    { varieta: 'Zucchina striata di Napoli', peso: 40, lunghezza: 18 },
    { varieta: 'Zucchina rigata pugliese', peso: 25, lunghezza: 16 },
    { varieta: 'Zucchina Crookneck', peso: 27, lunghezza: 17 },
    { varieta: 'Zucchino giallo', peso: 18, lunghezza: 19 },
    { varieta: 'Zucchina trombetta di Albenga', peso: 25, lunghezza: 20 }
];

//console.log(Zucchina[0].lunghezza)

var somma = 0;

for (var i = 0; i < Zucchina.length; i++) {
    var elem = Zucchina[i];
    test = elem.lunghezza
    somma += elem.peso;
}
console.log('La somma totale è: ' + somma);