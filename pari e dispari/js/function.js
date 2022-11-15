// funzione pari dispari
function pariDispari(num1, num2) {

    const somma = num1 + num2;

    // controllo numero user se pari o dispari
    if(num1 % 2 === 0) {
        console.log("numero pari", num1);
    }else{
        console.log("numero dispari", num1);
    }

    // controllo numero pc se pari o dispari
    if(num2 % 2 === 0) {
        console.log("numero pari", num2);
    }else{
        console.log("numero dispari" , num2);
    }

    return somma;
}