// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// let sum = 0;

// for (let i = 0; i < 10; i++) {
//     let num = Number(prompt("Enter a number"));
//     sum += num; 
// }

// console.log(sum);


let sum = 0;
let i = 0;

while (i < 10) {
    let num = Number(prompt("Enter a number"));
    sum += num; 
    i++
}

console.log(sum);