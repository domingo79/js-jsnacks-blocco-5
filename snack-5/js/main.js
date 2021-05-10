// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

var numeri = [1, 2, 3, 4, 5, 6], a = 1, b = 6;

function intervallo(arr, min, max) {

    var newArray = [];

    for (var i = min; i < max; i++) {
        var ele = arr[i];
        newArray.push(ele)
    }
    return newArray;

}
var arrNuovo = intervallo(numeri, a, b);
console.log(arrNuovo);



