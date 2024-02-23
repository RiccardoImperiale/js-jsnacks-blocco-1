// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

const guests = ['Fabio', 'Riccardo', 'Matteo']

const userName = prompt("What is your name?");

// for (let i = 0; i < guests.length; i++) {
//     if (userName === guests[i]) {
//         console.log(`Welcome to the party ${userName}`);
//         break
//     } else {
//         console.log(`Sorry ${userName} you are not invited.`);
//         break
//     }
// }

if (guests.includes(userName)) {
    console.log(`Welcome to the party ${userName}`);
} else {
    console.log(`Sorry ${userName} you are not invited.`);
}