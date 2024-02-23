// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

const guests = ['Fabio', 'Riccardo', 'Matteo']

const userName = prompt("What is your name?");

if (guests.includes(userName)) {
    console.log(`Welcome to the party ${userName}`);
} else {
    console.log(`Sorry ${userName} you are not invited.`);
}