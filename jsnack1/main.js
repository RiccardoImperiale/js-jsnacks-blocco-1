// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

let num1 =  Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

if (num1 > num2) {
    console.log("The first number is bigger:", num1);
} else if (num2 > num1) {
    console.log("The second number is bigger:", num2);
} else {
    console.log("The numbers are equals:", num1);
}