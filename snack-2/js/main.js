/*Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/

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

var zucchinaCorta = [];
var zucchinaLunga = [];

for (var i = 0; i < Zucchina.length; i++) {
    var elem = Zucchina[i];
    if (elem.lunghezza > 15) {
        zucchinaLunga.push(elem)
    } else {
        zucchinaCorta.push(elem)
    }
}
console.log('Array di zucchine corte: ', zucchinaCorta);
console.log('Array di zucchine lunghe: ', zucchinaLunga);