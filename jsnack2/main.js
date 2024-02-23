// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
    console.log("The first number is bigger:", num1);
} else if (num2 > num1) {
    console.log("The second number is bigger:", num2);
} else {
    console.log("The numbers are equals:", num1);
}