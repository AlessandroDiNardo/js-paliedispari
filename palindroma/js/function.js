// funzione per parola palindroma
function palindroma(revert){

    // creo una variabile vuota dove andranno messi i singoli caratteri della parola
    let parolaInversa = '';

    // creo una variabile contatore dove viene salvata la parola scelta dall'utente e calcolata la lunghezza
    let i = revert.length - 1;

    // il while scorre la parola partendo dalla fine, estraiamo ciascun carattere e lo inseriamo in una variabile.
    while (i >= 0) {
    parolaInversa += revert[i];
    i--;
    }

    return parolaInversa;
}
