/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Dare output relativo. */

let  word = prompt("inserisci una parola: ");
let  ris = palindroma(word);

// istruzione per controllare se la parola è palindroma o meno
if(word == ris){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}