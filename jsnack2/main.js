// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Enter first word");
const secondWord = prompt("Enter second word:");

if (firstWord.length > secondWord.length) {
    console.log(secondWord);
    console.log(firstWord);

} else if (firstWord.length < secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);
} else {
    console.log('the words have the same length');
}