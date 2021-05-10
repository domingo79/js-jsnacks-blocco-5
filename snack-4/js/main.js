//Snack 4:
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var nomi = ['Domenico', 'Rita', 'Nunzia', 'Fabiola'];
var cognomi = ['Santo', 'Maurogiovanni', 'Generoso', 'Fuzio'];
var n1 = nomi.length;
var n2 = cognomi.length;
var nomiCognomi = new Array(n1 + n2);

function alterMerge(arr1, arr2, n1, n2, arr3) {
    var i = 0, j = 0, k = 0;

    while (i < n1 && j < n2) {

        arr3[k++] = arr1[i++]
        arr3[k++] = arr2[j++]
    }
}
alterMerge(nomi, cognomi, n1, n2, nomiCognomi);

console.log(nomiCognomi);

