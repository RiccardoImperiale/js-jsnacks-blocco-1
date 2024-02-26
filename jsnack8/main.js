// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

let n = prompt("Enter a 4 digits number");
let sum = 0

// if (n.length === 4) {
// // for (let i = 0; i < n.length; i++) {
// //     sum += Number(n[i]);
// // }
// }

let i = 0;

if (n.length === 4) {
    while (i < n.length) {
        sum += Number(n[i]);
        i++
    }
} else {
    alert("Enter a 4 digits number")
}

console.log(sum);
