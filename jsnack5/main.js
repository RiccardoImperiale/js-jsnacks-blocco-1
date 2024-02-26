// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

const array = [];

// for (let i = 0; i < 6; i++) {
//     let num = Number(prompt("Enter a number"));
//     if (num % 2 !== 0){
//         array.push(num)
//     } 
// }

let i = 0;

while (i < 3) {
    let num = Number(prompt("Enter a number"));
    (num % 2 !== 0) && array.push(num)
    i++
}

console.log(array);
