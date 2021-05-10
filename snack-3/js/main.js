//Snack 3:
//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

// var test = 'Ciao';
// var parola = test.split('').reverse().join('')
// console.log(parola);

function specchio(str) {
    var invertText = str.split('').reverse().join('')
    return invertText;
}
var parolaRigirata = specchio('Ciao come stai?')
console.log(parolaRigirata);
