// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

let n = Number(prompt("Enter a number"));

for (let i = 0; i < n; i++) {
    console.log(i ** 3);
}

let i = 0;
while (i < n) {
    console.log(i ** 3);
    i++;
}